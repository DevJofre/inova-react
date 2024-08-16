import React, { useEffect, useState } from 'react';
import './UserProfile.scss';
import { makeRequest } from '../../requestHandler';
import { deleteToken } from '../../auth';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await makeRequest(`usuario/get-info`)
        console.log(response)
        setUser(response.data);
      } catch (err) {
        setError('Erro ao carregar dados do usuário');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await makeRequest(`logout`)
    deleteToken()
    navigate('/');
  }

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  if (!user) return <p>Nenhum usuário encontrado</p>;

  return (
    <div className="user-profile-container">
      <h2>Perfil do Usuário</h2>
      <div className="profile-details">
        <div className="profile-image">
          <img
            src={user.profilePicture || 'default-profile.png'}
            alt="Foto do perfil"
          />
        </div>
        <div className="profile-item">
          <span className="profile-label">Nome:</span>
          <span className="profile-value">{user.name || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Sobrenome:</span>
          <span className="profile-value">{user.lastname || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Email:</span>
          <span className="profile-value">{user.email || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">CPF:</span>
          <span className="profile-value">{user.address.at(0).cpf || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Cidade:</span>
          <span className="profile-value">{user.address.at(0).city || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Estado:</span>
          <span className="profile-value">{user.address.at(0).state || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Rua:</span>
          <span className="profile-value">{user.address.at(0).street || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Número:</span>
          <span className="profile-value">{user.address.at(0).number || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">CEP:</span>
          <span className="profile-value">{user.address.at(0).zip_code || 'N/A'}</span>
        </div>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default UserProfile;
