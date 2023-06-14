import React from 'react';

// eslint-disable-next-line react/prop-types
function UserTable({ users, handleOpenModal, handleDeleteUser }) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Nome Completo</th>
          <th className="px-4 py-2">RG</th>
          <th className="px-4 py-2">CPF</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Endereço</th>
          <th className="px-4 py-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{user.nomeCompleto}</td>
            <td className="border px-4 py-2">{user.rg}</td>
            <td className="border px-4 py-2">{user.cpf}</td>
            <td className="border px-4 py-2">{user.status ? 'Ativo' : 'Inativo'}</td>
            <td className="border px-4 py-2">{user.endereco}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleOpenModal(user)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteUser(user.id, user.status)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
