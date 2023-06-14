import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function UserForm({ handleCreateUser }) {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [status, setStatus] = useState(true);
  const [endereco, setEndereco] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nomeCompleto || !rg || !cpf || !endereco) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    setError('');
    handleCreateUser({
        nomeCompleto,
        rg,
        cpf,
        status,
        endereco,
      });
    setNomeCompleto('');
    setRg('');
    setCpf('');
    setStatus(true);
    setEndereco('');
  };

  return (
    <div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block">Nome Completo:</label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block">RG:</label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            type="text"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block">CPF:</label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block">Status:</label>
          <input
            className="ml-2"
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </div>
        <div className="mt-4">
          <label className="block">Endereço:</label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default UserForm;
