import About_card from "../../../components/About_card"
import "./About_section.css"
import ab1 from "../../../assets/images/a01.svg"
import bg1 from "../../../assets/images/bg-blue.jpg"
 
import { motion } from "framer-motion"

const About_section = () => {
  return (
    <>
      <div id="about">
        <div id="ab-bg">
          <img src={bg1} alt="Background" />
      </div>
         
        <p  id="about-h" >ABOUT <span style={{ color: 'white' }}> US</span> </p>
        <div id="about-middle">
          <div id="about-mid-left">

            <About_card
              
              h3={`VICTA: Genesis Marks The Commencement Of Our Ambitious Journey`}
              p1={`Welcome to VICTA, a dynamic force founded in 2023, fuelled by a shared passion for blockchain innovation and an unwavering commitment to driving positive change. Our inception was inspired by a simple yet powerful idea – to create a platform that not only harnesses the power of blockchain but also enriches the lives of those who embrace this transformative technology.`}
               
            />
             
            <About_card
              h3={`Our Vision: Transformative Blockchain Solutions for a Bright Future`}
              p1={`At VICTA, we envision a future where blockchain isn't just a technology; it's a force for positive transformation. We are dedicated to revolutionizing industries, empowering individuals, and fostering societal progress through innovative green blockchain solutions.`}
              
            />
             
            <About_card
              h3={` Founding Principles: Innovation, Sustainability, Community Engagement `}
              p1={`Built on the pillars of innovation, sustainability, and community, VICTA strives to be a leader in technological advancements while prioritizing environmental responsibility. We believe in the collective strength and wisdom that emerges when like-minded individuals come together, forming a community committed to positive change.`}
               
            />
            
          </div>

          <motion.div id="about-mid-right"
            initial={{
              top:"-30px",
              // scale: 1
            }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            whileInView={{
              top: "0px",
               
            }}
          >

            
            <img id="img2" src={ab1} alt="img2" />
          </motion.div>

        </div>

       
        
      </div>
    </>
  )
}

export default About_section