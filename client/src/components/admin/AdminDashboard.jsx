import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('Unauthorized: Please log in to continue');
      setLoading(false);
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/bookings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Unauthorized or invalid token');
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        localStorage.removeItem('accessToken');
        
        navigate('/admin/login', {
          state: { message: 'Your session has expired. Please log in again.' },
          replace: true
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const token = localStorage.getItem('accessToken');
  if (!token) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Helmet>
          <title>Admin Authentication Required | Book My Event</title>
        </Helmet>
        <h2 className="text-2xl  text-center font-bold mb-3 text-blue-700 md:text-4xl">
          🔐 Admin Authentication Required
        </h2>
        <p className="mb-6 text-gray-600">
          {error || 'Please log in to continue to the Admin Dashboard.'}
        </p>
        <button
          onClick={() => navigate('/admin/login')}
          className="px-6 py-3 text-xl bg-blue-600 text-white rounded hover:bg-blue-700 transition hover:scale-105"
        >
          Go to Login Page
        </button>

      </div>
    );
  }

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-100 to-blue-50 px-2 py-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Admin Dashboard | Book My Event</title>
      </Helmet>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-6 sm:mb-8 border-b-4 border-blue-300 pb-2">
        📋 Admin Dashboard
      </h1>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg border-2 border-black p-4 sm:p-6">
        {loading ? (
          <p className="text-center text-blue-600 font-medium">
            Loading bookings...
          </p>
        ) : error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-600">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-black rounded-md text-sm sm:text-base">
              <thead className="bg-blue-100 text-blue-800 font-semibold border-b border-black">
                <tr>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap">
                    Name
                  </th>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap">
                    Phone
                  </th>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap min-w-[80px]">
                    Date
                  </th>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap">
                    Location
                  </th>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap">
                    Event Type
                  </th>
                  <th className="p-2 sm:p-3 whitespace-nowrap">Requests</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-t border-black hover:bg-blue-50 transition"
                  >
                    <td className="p-2 sm:p-3 border-r border-black">
                      {booking.name}
                    </td>
                    <td className="p-2 sm:p-3 border-r border-black">
                      {booking.phone}
                    </td>
                    <td className="p-2 sm:p-3 border-r border-black whitespace-nowrap min-w-[90px]">
                      {booking.date}
                    </td>
                    <td className="p-2 sm:p-3 border-r border-black">
                      {booking.location}
                    </td>
                    <td className="p-2 sm:p-3 border-r border-black">
                      {booking.eventType}
                    </td>
                    <td className="p-2 sm:p-3">{booking.requests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
