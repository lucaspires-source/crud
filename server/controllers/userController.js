const { v4: uuidv4 } = require('uuid');
const users = require('../models/userModel');

function getUsers(req, res) {
  res.json(users);
}

function createUser(req, res) {
  const { nomeCompleto, rg, cpf, status, endereco } = req.body;

  const newUser = {
    id: uuidv4(),
    nomeCompleto,
    rg,
    cpf,
    status,
    endereco
  };

  users.push(newUser);
  res.status(201).json({ message: 'Usuário criado com sucesso.' });
}

function updateUser(req, res) {
  console.log(req.params)
  const { id } = req.params;
  const { nomeCompleto, rg, cpf, status, endereco } = req.body;

  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  user.nomeCompleto = nomeCompleto;
  user.rg = rg;
  user.cpf = cpf;
  user.status = status;
  user.endereco = endereco;

  res.json({ message: 'Usuário atualizado com sucesso.' });
}

function deleteUser(req, res) {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  if (!user.status) {
    users.splice(users.indexOf(user), 1);
    res.json({ message: 'Usuário excluído com sucesso.' });
  } else {
    res.status(403).json({ error: 'Apenas usuários inativos podem ser excluídos.' });
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
