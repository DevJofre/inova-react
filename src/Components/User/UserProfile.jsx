import React from 'react';
import './UserProfile.scss';

const UserProfile = ({ user = {} }) => {
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
          <span className="profile-value">{user.surname || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Email:</span>
          <span className="profile-value">{user.email || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">CPF:</span>
          <span className="profile-value">{user.cpf || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Cidade:</span>
          <span className="profile-value">{user.city || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Estado:</span>
          <span className="profile-value">{user.state || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Rua:</span>
          <span className="profile-value">{user.street || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Número:</span>
          <span className="profile-value">{user.number || 'N/A'}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">CEP:</span>
          <span className="profile-value">{user.zip || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
