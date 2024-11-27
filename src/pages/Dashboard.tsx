import React from 'react';
import { motion } from 'framer-motion';
import useStore from '../store/authStore';

const Dashboard = () => {
  const { user } = useStore();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}!</h1>
          {/* Add dashboard content here */}
          <p>Dashboard content coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;