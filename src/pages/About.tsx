import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Journey of Healing</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Combining ancient Ayurvedic wisdom with modern healthcare practices to provide holistic healing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">10k+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">25+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">98%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Leaf className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">50+</h3>
                <p className="text-gray-600">Herbal Treatments</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
                alt="Ayurvedic Medicine"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At AyurCare, our mission is to promote holistic wellness through the time-tested principles of Ayurveda while embracing modern healthcare advancements. We strive to provide personalized care that addresses the root cause of health issues rather than just treating symptoms.
              </p>
              <p className="text-gray-600">
                Our team of experienced practitioners combines traditional Ayurvedic wisdom with contemporary medical knowledge to offer comprehensive healthcare solutions that promote long-term well-being and vitality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;