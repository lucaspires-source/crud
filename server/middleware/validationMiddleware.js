function validateUser(req, res, next) {
    const { nomeCompleto, rg, cpf, endereco } = req.body;
  
    const errors = [];
  
    if (!nomeCompleto) {
      errors.push('O campo "nomeCompleto" é obrigatório.');
    }
    
    if (!rg) {
      errors.push('O campo "rg" é obrigatório.');
    }
  
    if (!cpf) {
      errors.push('O campo "cpf" é obrigatório.');
    }
  
    if (!endereco) {
      errors.push('O campo "endereco" é obrigatório.');
    }
  
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
  
    next();
  }
  
  module.exports = {
    validateUser
  };
  