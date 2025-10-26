import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function BookingForm() {
  const [success, setSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.message);

      setSuccess(true);
      setShowToast(true);
      reset();

      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative max-w-lg mx-auto p-8 bg-white shadow-xl rounded-xl space-y-6">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 
                        bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg z-50 
                        text-center animate-fade-in">
          ✅ Booking submitted successfully!
        </div>
      )}

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Book Your Event</h1>

      {success && (
        <div className="text-center space-y-2">
          <p className="text-lg text-gray-700">🎉 Thank you for your booking! We’ll contact you soon.</p>
          <p className="text-green-600 font-semibold">✅ Booking Submitted!</p>
        </div>
      )}

      {!success && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name *</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Phone *</label>
            <input
              {...register('phone', {
                required: 'Phone is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Enter a valid 10-digit number',
                },
              })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Event Date */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Event Date *</label>
            <input
              type="date"
              {...register('date', { required: 'Event date is required' })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Location *</label>
            <input
              {...register('location', { required: 'Location is required' })}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.location ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>

          {/* Event Type */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Event Type</label>
            <select
              {...register('eventType')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select an event type</option>
              <option value="Concert">Concert</option>
              <option value="Workshop">Workshop</option>
              <option value="Seminar">Seminar</option>
              <option value="Conference">Conference</option>
              <option value="Exhibition">Exhibition</option>
              <option value="Trade Show">Trade Show</option>
              <option value="Fashion Show">Fashion Show</option>
              <option value="Product Launch">Product Launch</option>
              <option value="Community Event">Community Event</option>
              <option value="Wedding Baraat">Wedding Baraat</option>
              <option value="Reception">Reception</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Special Requests</label>
            <textarea
              {...register('requests')}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-transform transform hover:scale-105 duration-200 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Booking'}
          </button>
        </form>
      )}
    </div>
  );
}
