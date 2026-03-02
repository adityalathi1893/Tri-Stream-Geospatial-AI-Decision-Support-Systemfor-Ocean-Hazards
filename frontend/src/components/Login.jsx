import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token); // Save token for future requests
      localStorage.setItem('userName', res.data.user.name);
      navigate('/dashboard'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-slate-200">
        <h2 className="text-3xl font-bold text-center text-blue-900">Ocean Hazard Portal</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Log In
          </button>
        </form>
        <p className="text-center text-slate-600">
          New citizen reporter? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}