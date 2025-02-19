import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { techMobile } from "../assets";

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-10'>
			{technologies.map((tech) => {
				return (
					<div className='w-28 h-28 hidden sm:block' key={tech.name}>
						<BallCanvas icon={tech.icon} />
					</div>
				);
			})}
      <img src= {techMobile} alt="" className="object-contain sm:hidden" />
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
