/* eslint-disable react/prop-types */
import { useState } from 'react';

function UserModal({ user, handleUpdateUser, handleCloseModal }) {
  const [formData, setFormData] = useState({
    nomeCompleto: user.nomeCompleto,
    rg: user.rg,
    cpf: user.cpf,
    status: user.status,
    endereco: user.endereco,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(user.id, formData);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-bold mb-4">Editar Usuário</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Nome Completo:</label>
            <input
              className="border border-gray-300 px-4 py-2 w-full"
              type="text"
              name="nomeCompleto"
              value={formData.nomeCompleto}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block">RG:</label>
            <input
              className="border border-gray-300 px-4 py-2 w-full"
              type="text"
              name="rg"
              value={formData.rg}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block">CPF:</label>
            <input
              className="border border-gray-300 px-4 py-2 w-full"
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block">Status:</label>
            <input
              className="ml-2"
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block">Endereço:</label>
            <input
              className="border border-gray-300 px-4 py-2 w-full"
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              type="submit"
            >
              Salvar
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;

