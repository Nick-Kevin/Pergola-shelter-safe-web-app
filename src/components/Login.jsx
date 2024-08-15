import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, NavLink} from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloggedIn, setIsloggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const token = response.data.token;
      //stockage du token 
      localStorage.setItem('authToken',token);
      console.log('logged in successfully:', token);

      setEmail('');
      setPassword('');
      setIsloggedIn(true);
      

      // Enregistrez le token ou effectuez une redirection ici
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <> 
    {isloggedIn? (<Navigate to="/Pergola-shelter-safe-web-app/voice-recognition"/>) :(
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        <div>
           <span>Pas encore de compte ?</span><NavLink to="/Pergola-shelter-safe-web-app/register">Créer un compte</NavLink>
      </div> 
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
        >
          Se connecter
        </button>
      </form>
    </div>
    )}
    </>
  );
}

export default Login;