import React, { useState } from 'react';
import './login.scss';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc'; // Ícone do Google

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione a lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // Usuário autenticado com sucesso
        console.log('Google Sign-In successful:', result.user);
      })
      .catch((error) => {
        // Tratar erros
        console.error('Error during Google Sign-In:', error);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
        <a href="/reset-password" className="forgot-password">Lembrar Senha?</a>
        <button className="google-login" onClick={handleGoogleLogin} type="button">
          <FcGoogle size={24} />
        </button>
      </form>
    </div>
  );
};

export default Login;
