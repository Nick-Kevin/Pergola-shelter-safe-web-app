import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({email}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token du stockage
    localStorage.removeItem('authToken');

    // Rediriger vers la page de connexion
    navigate('/Pergola-shelter-safe-web-app/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4">Déconnexion</h2>
        <p className="mb-4">{email}</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600"
        >
           Se déconnecter
        </button>
      </div>
    </div>
  );
}

export default Logout;