import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Register() {
  const navigate = useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    async function sendData(){
       await axios.post('http://localhost:5000/register', { email, password }
       ).then((response)=>{
        console.log(response.data);
        setEmail('');
        setPassword('');
        navigate('/Pergola-shelter-safe-web-app/login')
       }).catch((error)=>{
        console.error('Registration failed:', error.response.data.error);
       })
    
      }
      sendData()
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Incription</h2>
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
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;