import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigate to the login page only if the current route is not '/login'
  const handleNotifyClick = () => {
    if (router.pathname !== '/login') {
      router.push('/login');
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image src="/assets/boxlogo.svg" alt="Logo" width={40} height={40} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 45 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </motion.svg>
              )}
            </button>
          </div>

          {/* Menu */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className={`lg:flex items-center space-x-6 hidden ${isMenuOpen ? 'block' : 'hidden'
              }`}
          >
            <div
              className="relative rounded-full px-8 py-5"
              style={{ backgroundColor: 'rgba(15, 15, 15, 0.6)', backdropFilter: 'blur(10px)' }}
            >
              <div
                className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"
                style={{ top: '2px', left: '2px', right: '2px', bottom: '2px' }}
              />
              <ul className="relative flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-sm text-gray-300">
                {['Our God', 'Christ', 'About Christ', 'FAQs'].map((item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase().replace(/ /g, '-')} // Matches section ids
                      smooth={true} // Smooth scrolling
                      duration={200} // Faster scrolling duration
                      offset={-70} // Offset to adjust for the navbar height
                      className="relative group cursor-pointer"
                      onClick={() => setIsMenuOpen(false)} // Close menu on item click
                    >
                      <span className="hover:text-white transition-colors duration-200">
                        {item}
                        <motion.span
                          whileHover={{ scale: 1.2 }}
                          className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-25 group-hover:blur-sm transition-all duration-300 -z-10"
                        ></motion.span>
                      </span>
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Notify Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="relative text-sm text-gray-300 font-medium px-5 py-3.5 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 border border-white/20"
              style={{ backgroundColor: 'rgba(15, 15, 15, 0.6)', backdropFilter: 'blur(10px)' }}
              onClick={handleNotifyClick} // Add onClick handler for navigation
            >
              <span className="relative group">
                Notify me
                <motion.span
                  className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-25 group-hover:blur-sm transition-all duration-300 -z-10"
                  style={{ top: '2px', left: '2px', right: '2px', bottom: '2px' }}
                ></motion.span>
              </span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden mt-4 space-y-4"
          >
            <ul className="space-y-4 text-sm text-gray-300">
              {['Our model', 'How it works', 'About us', 'FAQs'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase().replace(/ /g, '-')} // Matches section ids
                    smooth={true} // Smooth scrolling
                    duration={500} // Faster scrolling duration
                    offset={-70} // Offset to adjust for the navbar height
                    className="block text-center"
                    onClick={() => setIsMenuOpen(false)} // Close menu on item click
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;

