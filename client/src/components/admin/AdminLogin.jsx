import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const infoMessage = location.state?.message || '';

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/admin');
      } else {
        setError(
          data.message ||
            'Incorrect email or password. Please try again.'
        );
      }
    } catch (err) {
      console.error(err);
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm border-gray-500 border-2">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
          Admin Login
        </h2>

        {infoMessage && (
          <p className="text-red-600 text-sm mb-4">
            {infoMessage}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded border-slate-600"
          disabled={isSubmitting}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border rounded border-slate-600"
          disabled={isSubmitting}
        />

        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={isSubmitting}
          className={`w-full py-2 rounded text-white transition duration-300
            bg-blue-500 hover:bg-blue-600
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          {isSubmitting ? 'Logging in…' : 'Login'}
        </button>

        {isSubmitting && (
          <p className="text-gray-600 text-sm mt-2 text-center">
            Please wait, authenticating…
          </p>
        )}
      </div>
    </div>
  );
}
