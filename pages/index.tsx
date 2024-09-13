import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import How_it_works from "../components/how-it-works/how_it_works";
import Contact from "../components/Contact/Contact";
import OurModel from "../components/OurModel/OurModel";
import Faqs_page from "../components/Faqs/faqs";
import About_us from "../components/about_us/about_us";

const Home = () => {
  return (
    <>
      <Head>
        <title>Eva</title>
        <meta name="description" content="Join us validating traders using our NexGen Evaluation model" />
        <link rel="icon" href="/assets/boxlogo.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center" // Added for centering
      >
        <Hero
          heading={
            <h1
              className="hero-font text-4xl font-bold font-inter text-left bg-clip-text text-transparent bg-gradient-to-bl from-white to-[#2b2a2a] opacity-100"
            >
              Jesus Christ is King
              <br />
              Submit to rome
            </h1>
          }
          message={
            <p
              className="text-lg font-inter text-left mt-4 bg-clip-text text-transparent bg-gradient-to-bl from-[#bdbbbb] to-[#bdbbbb] opacity-100"
            >
              Sancta Maria, Ora pro nobis peccatoribus
            </p>
          }
        />
      </motion.div>

      {/* Our Model Section */}
      <motion.div
        id="our-model"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <OurModel />
        <div className="h-60"></div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        id="how-it-works"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
      </motion.div>

      {/* About Us Section */}
      <motion.div
        id="about-us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <About_us />
      </motion.div>

      {/* FAQs Section */}
      <motion.div
        id="faqs"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Faqs_page />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default Home;
