import React from "react";
import Link from "next/link";
import { ScrollLink } from "react-scroll";

interface Props {
  heading: React.ReactNode;
  message: React.ReactNode;
}

const Hero: React.FC<Props> = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <div className="text-5xl   
 font-bold">{heading}</div>
        <div className="py-5 text-xl">{message}</div>
        <ScrollLink
          to="our-vision" // Assuming your "Our Vision" section has this ID
          smooth={true}
          duration={500} // Adjust scroll duration (milliseconds)
          offset={-70} // Offset to adjust for navbar height (optional)
          className="px-8 py-2 border"
        >
          Know more
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
