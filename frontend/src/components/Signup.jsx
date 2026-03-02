import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      navigate('/login'); // Redirect to login on success
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-slate-200">
        <h2 className="text-3xl font-bold text-center text-blue-900">Join OceanGuard</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" placeholder="Full Name" required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input 
            type="email" placeholder="Email Address" required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input 
            type="password" placeholder="Password" required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button type="submit" className="w-full py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>
        <p className="text-center text-slate-600">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}