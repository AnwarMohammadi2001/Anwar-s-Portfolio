import { motion } from "framer-motion";
import Lottie from "lottie-react";
import codingCoffee from "../assets/coding-coffee.json";
import { styles } from "../styles";

const Hero = () => {
	return (
		<section
			className='relative w-full h-screen mx-auto flex flex-col'
			id='home'
		>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='h-5 w-5 rounded-full bg-[#915eff]' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText}  text-white`}>
						Hi, I'm{" "}
						<span className='animate-text bg-gradient-to-r from-teal-500 via-[#915eff] to-orange-500 bg-clip-text text-transparent'>
							Sahil
						</span>
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 text-white-100 glitch`}
						data-text='I design immersive digital
						experiences that captivate users'
					>
						I design immersive digital <br className='sm:block hidden' />
						experiences that captivate users
					</p>
				</div>
			</div>
			<div className='flex justify-center absolute inset-0 h-full w-full bottom-0 mt-40'>
				<Lottie animationData={codingCoffee} loop={true} />
			</div>
			<div className='absolute sm:bottom-10 bottom-[80px] w-full flex justify-center sm:hidden items-center'>
				<a
					onClick={() => {
						document.getElementById("about").scrollIntoView({
							behavior: "smooth",
						});
					}}
				>
					<div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer '>
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className='h-3 w-3 rounded-full  bg-secondary mb-1'
						></motion.div>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
