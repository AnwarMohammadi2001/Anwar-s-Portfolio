import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import heroimage from "../assets/Programming.png";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const tiltRef = useRef(null); // Create a ref for Tilt component

  return (
    <Tilt ref={tiltRef} className="lg:min-w-[250px] min-w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]  items-center px-8  gap-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-secondary text-[17px] leading-[30px]"
        >
          <p className="text-justify">
		  I'm a passionate frontend developer with expertise in building modern, responsive, and scalable web applications. Proficient in Sass, Bootstrap, and Tailwind CSS, I craft intuitive user interfaces that enhance user experience. With strong skills in jQuery, TypeScript, React, and Redux Toolkit, I develop high-performance applications with clean, maintainable code. Staying updated with the latest industry trends, I continuously refine my skills to deliver top-notch solutions. Let's collaborate to bring your ideas to life!
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={heroimage}
            alt="Developer"
            className="w-full max-w-sm rounded-2xl mix-blend-screen shadow-lg"
          />
        </motion.div>
      </div>
      <div className="mt-20 lg:flex-row flex flex-col  gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
