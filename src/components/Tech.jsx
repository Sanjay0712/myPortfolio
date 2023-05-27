import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 style={{textAlign: "center", margin: "70px"}} className={styles.sectionHeadText}>Tech Skills</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 " >
        {technologies.map((technology) => (
          <div className="w-28 h-28 " key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills")