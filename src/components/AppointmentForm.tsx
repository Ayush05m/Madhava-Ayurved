import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  department: string;
  message: string;
}

const departments = [
  'Panchakarma',
  'Kayachikitsa',
  'Rasayana Therapy',
  'Yoga & Meditation',
  'Dietary Consultation',
  'Ayurvedic Surgery',
];

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>();

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      // TODO: Implement appointment submission logic
      console.log('Appointment data:', data);
      reset();
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'Phone number is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              id="department"
              {...register('department', { required: 'Department is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              {...register('date', { required: 'Date is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              {...register('time', { required: 'Time is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors duration-200"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AppointmentForm;