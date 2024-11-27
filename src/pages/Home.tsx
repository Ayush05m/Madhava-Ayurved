import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-emerald-800 to-emerald-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">Modern Ayurvedic Care for Your Well-being</h1>
            <p className="text-xl mb-8">Experience the perfect blend of traditional Ayurvedic wisdom and modern healthcare practices.</p>
            <div className="flex space-x-4">
              <Link 
                to="/book-appointment"
                className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 inline-flex items-center"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-800 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 p-6 rounded-lg"
            >
              <Calendar className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book appointments online at your convenience</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-emerald-50 p-6 rounded-lg"
            >
              <Video className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Video Consultations</h3>
              <p className="text-gray-600">Connect with our doctors from anywhere</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-emerald-50 p-6 rounded-lg"
            >
              <Clock className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for emergencies</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;