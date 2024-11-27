import React from 'react';
import { motion } from 'framer-motion';

const specialists = [
  {
    id: 1,
    name: 'Dr. Aisha Patel',
    department: 'Panchakarma',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    experience: '15+ years',
    specialization: 'Detoxification and Rejuvenation Therapy',
  },
  {
    id: 2,
    name: 'Dr. Raj Kumar',
    department: 'Kayachikitsa',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80',
    experience: '12+ years',
    specialization: 'Internal Medicine and Chronic Diseases',
  },
  {
    id: 3,
    name: 'Dr. Sarah Johnson',
    department: 'Rasayana Therapy',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
    experience: '10+ years',
    specialization: 'Anti-aging and Immunotherapy',
  },
  {
    id: 4,
    name: 'Dr. Michael Chen',
    department: 'Yoga & Meditation',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80',
    experience: '8+ years',
    specialization: 'Mind-Body Wellness',
  },
];

const Specialists = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Specialists</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Meet our team of experienced Ayurvedic practitioners dedicated to your well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialists Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <motion.div
                key={specialist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{specialist.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{specialist.department}</p>
                  <p className="text-gray-600 mb-2">Experience: {specialist.experience}</p>
                  <p className="text-gray-600">{specialist.specialization}</p>
                  <button className="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-200">
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialists;