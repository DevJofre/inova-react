import React, { useState } from 'react';
import './login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { setToken } from '../../auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", { email, password });

      if (response.status === 200) {
        setToken(response.data.token)
        navigate('/profile');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  };

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        const token = await result.user.getIdToken();

        const response = await axios.post('http://localhost:4000/google-login', { token });

        if (response.status === 200) {
          console.log('Google Login successful:', response.data);


          localStorage.setItem('token', response.data.token);


          navigate('/profile');
        }
      })
      .catch((error) => {
        console.error('Erro durante o Google Sign-In:', error);
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
