import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header Section */}
      <section className="bg-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Appointment</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Schedule a consultation with our experienced Ayurvedic practitioners
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Calendar className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Choose appointment times that work best for your schedule</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Video className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Consultations</h3>
              <p className="text-gray-600">Connect with our doctors through secure video calls</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Clock className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Confirmation</h3>
              <p className="text-gray-600">Receive instant confirmation for your appointment</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;