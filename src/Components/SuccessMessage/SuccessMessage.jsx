import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessMessage.scss'; 

const SuccessMessage = () => {
  const navigate = useNavigate(); 

  const handleBackToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="success-message-container">
      <div className="success-message-box">
        <h2>Cadastro concluído com sucesso.</h2>
        <p>Volte à página inicial para entrar no seu perfil.</p>
        <button onClick={handleBackToHome}>Voltar para Início</button>
      </div>
    </div>
  );
};

export default SuccessMessage;