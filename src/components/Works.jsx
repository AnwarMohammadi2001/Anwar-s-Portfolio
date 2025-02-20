import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  openSource,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.05 }} // Slight hover zoom effect
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 400,
        }}
        className="relative bg-opacity-80 bg-gradient-to-br from-[#1e293b] to-[#111827] border border-gray-700 backdrop-blur-lg p-5 rounded-2xl w-full h-full flex flex-col justify-between shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-blue-500"
      >
        {/* Card Image Section */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
          />

          {/* Hover Icons */}
          <div className="absolute inset-0 flex items-center justify-end gap-3 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            {/* Live Preview Button */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/60 hover:bg-black/80 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300"
            >
              <img
                src={live}
                className="h-1/2 w-1/2 object-contain"
                alt="Live Preview"
              />
            </div>

            {/* GitHub Link (If Open Source) */}
            {openSource && (
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/sahilxkhadka/resturant-website",
                    "_blank"
                  )
                }
                className="bg-black/60 hover:bg-black/80 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300"
              >
                <img
                  src={github}
                  className="h-1/2 w-1/2 object-contain"
                  alt="GitHub"
                />
              </div>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="mt-5">
          <h3 className="text-white font-extrabold text-[22px]">{name}</h3>
          <p className="mt-2 text-gray-300 text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] font-semibold px-2 py-1 rounded-md border border-gray-500 ${tag.color} transition-all duration-300 hover:bg-gray-800`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-5 justify-between">
        {projects.map((project, index) => {
          return (
            <div className="sm:w-[49%] w-full flex" key={`project-${index}`}>
              <ProjectCard {...project} index={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
