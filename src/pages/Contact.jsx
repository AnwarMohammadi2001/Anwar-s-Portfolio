import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas, StarsCanvas } from "../components/canvas";
import image from "../assets/cover1.png"
import SendingForm from "../components/SendingForm";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send(
        "service_6mtuizk",
        "template_xxa6gzr",
        {
          from_name: form.name,
          to_name: "Anwar",
          from_email: form.email,
          to_email: "anwarmohammadi1390@gmail.com",
          message: form.message,
        },
        "Zcc829UhiguVzPsA9"
      )
      .then(
        () => {
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setSending(false);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <section id="contact">
      <div className="relative z-0 min-h-screen flex justify-center items-center">
        <div className="xl:flex-row flex-col-reverse flex  gap-10 overflow-hidden w-full">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="py-5  px-8 w-full md:w-[65%] border  rounded-2xl"
          >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
            {sending ? (
              <div className="flex justify-center items-center  h-[450px]">
                <SendingForm />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className="mt-4 flex flex-col  gap-5 mb-12 md:mb-0"
              >
                <label className="flex flex-col gap-2">
                  <span className="text-white">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    required
                  />
                </label>
                <label className="flex flex-col gap-4">
                  <span className="text-white">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    required
                  />
                </label>
                <label className="flex flex-col gap-4">
                  <span className="text-white">Your Message</span>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="bg-tertiary py-3 px-8 outline-none w-fit  font-bold text-white rounded-xl shadow-md shadow-primary"
                >
                  Send
                </button>
              </form>
            )}
          </motion.div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto xl:mt-8 md:h-[420px] h-[320px] mx-auto w-[240px] mt-60 md:mt-0"
          >
            {/* <EarthCanvas /> */}
            <img src={image} alt="logo" className="mix-blend-multiply rounded-lg bg-primary"  />
          </motion.div>
        </div>
        <StarsCanvas />
      </div>
    </section>
  );
}

export default SectionWrapper(Contact, "");
