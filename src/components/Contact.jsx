import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas, StarsCanvas } from "./canvas";
function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const formRef = useRef();
	const [sendButtonText, setSendButtonText] = useState("Send");
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSendButtonText("Sending...");
		emailjs
			.send(
				"service_6mtuizk",
				"template_xxa6gzr",
				{
					from_name: form.name,
					to_name: "Sahil",
					from_email: form.email,
					to_email: "sahilkhadka767@gmail.com",
					message: form.message,
				},
				"Zcc829UhiguVzPsA9"
			)
			.then(
				() => {
					setSendButtonText("Sent!");
					setForm({
						name: "",
						email: "",
						message: "",
					});
					setTimeout(() => {
						setSendButtonText("Send");
					}, 3000);
				},
				(error) => {
					console.log(error);
					setSendButtonText("Send Again");
				}
			);
	};
	return (
		<div className='relative z-0'>
			<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
				>
					<p className={styles.sectionSubText}>Get in touch</p>
					<h3 className={styles.sectionHeadText}>Contact.</h3>
					<form
						onSubmit={handleSubmit}
						ref={formRef}
						className='mt-12 flex flex-col gap-8'
					>
						<label className='flex flex-col gap-4'>
							<span className='text-white'>Your Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder='Enter your name'
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
								required
							/>
						</label>
						<label className='flex flex-col gap-4'>
							<span className='text-white'>Your Email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder='Enter your Email'
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
								required
							/>
						</label>
						<label className='flex flex-col gap-4'>
							<span className='text-white'>Your Message</span>
							<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Enter your message'
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
								required
							/>
						</label>
						<button
							type='submit'
							className='bg-tertiary py-3 px-8 outline-none w-fit  font-bold text-white rounded-xl shadow-md shadow-primary'
						>
							{sendButtonText}
						</button>
					</form>
				</motion.div>
				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className='xl:flex-1 xl:h-auto xl:mt-8 md:h-[450px] h-[320px] mx-auto w-[240px]'
				>
					<EarthCanvas />
				</motion.div>
			</div>
			<StarsCanvas />
		</div>
	);
}

export default SectionWrapper(Contact, "contact");
