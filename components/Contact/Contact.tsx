import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#010101] text-white font-inter">
      <div className="flex-grow flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#080808] p-12 rounded-lg max-w-6xl max-h-screen mx-auto text-center shadow-[#000000] shadow-lg bg-gradient-to-br from-[#101010] to-black opacity-100">
          {/* Hero Section with Horizon Font */}
          <h1 className="text-3xl font-bold hero-font mb-20 leading-tight text-left bg-clip-text text-transparent bg-gradient-to-bl from-white to-[#2b2a2a] opacity-100">

            Elevate your life with the fullness of the truth only found in the One Holy Catholic Apostolic Church.
          </h1>
          <p className="mb-8 text-gray-300 font-inter">
            Get updates from and newsletters related
            <br />
            to the catholic church and thomism.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-2">
            <div className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={handleEmailChange}
                className="p-6 border border-white/20 rounded-full bg-[#010101] text-gray w-full pr-32 shadow-inner"
              />
              <button
                type="submit"
                className="absolute top-4 right-4 h-10 px-3 bg-[#DDFF00] text-black rounded-full text-sm font-inter font-semibold hover:bg-yellow-300 transition duration-300 shadow-[#010101] shadow-sm"
              >
                Get notified
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <div className="w-full max-w-lg text-gray-500 flex justify-between text-sm mb-8">
        <a href="#" className="hover:text-white">Contact</a>
        <a href="#" className="hover:text-white">Privacy & Cookie Policy</a>
        <a href="#" className="hover:text-white">Terms & Conditions</a>
      </div>
    </div >
  );
};

export default Contact;
