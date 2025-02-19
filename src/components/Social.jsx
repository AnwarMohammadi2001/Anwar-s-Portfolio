import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";

const Social = () => {
	return (
		<>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				viewport={{ once: false }}
			>
				<motion.div variants={textVariant} className='mt-12 bg-primary'>
					<p className={styles.sectionSubText}>Connect with me.</p>
					<h2 className={styles.sectionHeadText}>Socials</h2>
				</motion.div>
				<div className='flex gap-7 flex-wrap justify-center mt-8'>
					{socials.map((social, index) => {
						return (
							<a
								className='black-gradient h-20 w-20 rounded-full group flex justify-center items-center cursor-pointer'
								href={social.link}
								target='_blank'
								key={index}
							>
								<img
									src={social.image}
									className='h-1/2 w-1/2 object-contain group-hover:scale-[1.1] transition-all'
									alt=''
								/>
							</a>
						);
					})}
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Social, "socials");
