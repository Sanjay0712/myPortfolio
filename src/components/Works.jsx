import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import SectionWrapper from '../hoc/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import React, { useState } from 'react';
import '../carouselStyle.css';
import { TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';

const CARDS = projects.length;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointerEvents': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
      >
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-contain rounded-2xl ' />
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(source_code_link, "_blank")} 
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]  ' >{name}</h3>
            <p className=' mt-2 text-secondary text-[14px] ' > {description} </p>
          </div>

          <div className=' mt-4 flex flex-wrap gap-2 ' >
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
              </p>
            ))}
          </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>My work</p> */}
        <h2 style={{textAlign: "center", margin: "20px"}} className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex ml-40 mb-10' style={{textAlign: "center"}}>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        > 
          Following projects showcases my skills and Experience through real-world examples of my work. Each project is briefly described with links to code 
          repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-7 '>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}

      <div className='carouselMain flex justify-center mr-80'>
        <Carousel>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Carousel>
      </div>
      <br />
      <br />
      <br />
    </>
  )
}

export default SectionWrapper(Works, "projects")
