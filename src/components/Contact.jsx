import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import resume from '../assets/Sanjay_Resume.pdf';
import env from '../assets/env.svg';
import phn from '../assets/phn.svg'

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

// service_r369l0r
// template_bnx648o
// bmqt98JRDnVyrnQ9l

    emailjs.send(
      'service_r369l0r', 
      'template_bnx648o',
      {
        from_name: form.name,
        to_name: 'Sanjay',
        from_email: form.email,
        to_email: 'sanjaycts07@gmail.com',
        message: form.message,
      },
      'bmqt98JRDnVyrnQ9l'
    )
    .then(() => {
      setLoading(false);
      alert("Thank You. I will get back to you as soon as possible");

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong')
    }
    )
  }

  return (
    <div className=" xl:mt-80 xl:flex-row md:mt-[150px] xs:mt-[350px] flex-col-reverse flex gap-5 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-2 pl-10 pr-10 pb-4 rounded-2xl "
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-4 ">Your Name</span> */}
            <input 
              type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" 
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium " 
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-4 ">Your Email</span> */}
            <input 
              type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"  
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" 
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-4 ">Your Message</span> */}
            <textarea
              rows="4" 
              name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" 
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium " 
            />
          </label>

          <div className="flex justify-between">
            <button
              type="submit"
              className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl violet-gradient"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <button className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl violet-gradient">
              <a href={resume} download="SanjayResume">Download Resume</a>
            </button>
          </div>

        </form> <br />
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
