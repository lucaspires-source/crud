import { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import UserModal
 from './components/UserModal';
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (userData) => {
    try {
      await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleUpdateUser = async (id, userData) => {
    try {
      await fetch(`http://localhost:3001/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      fetchUsers();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (id, status) => {
    if (!status) {
      try {
        await fetch(`http://localhost:3001/users/${id}`, {
          method: 'DELETE',
        });
        fetchUsers();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Apenas usuários inativos podem ser deletados.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Usuários</h1>
      <UserTable
        users={users}
        handleOpenModal={handleOpenModal}
        handleDeleteUser={handleDeleteUser}
      />
      <h2 className="text-2xl mt-4">Adicionar Usuário</h2>
      <UserForm handleCreateUser={handleCreateUser} />
      {isModalOpen && (
        <UserModal
          user={selectedUser}
          handleUpdateUser={handleUpdateUser}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;

