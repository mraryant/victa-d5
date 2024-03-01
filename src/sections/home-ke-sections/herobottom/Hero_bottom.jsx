 
import "./Hero_bottom.css"
import {motion} from "framer-motion"
import m01 from '../../../assets/icons/m01.png'
import m02 from '../../../assets/icons/m02.png'
import m03 from '../../../assets/icons/m03.png'
 

const Hero_section = () => {
  return (
    <div id="hero-bottom-main">
      {/* <div id="hero-head">
        <h1>Expertise you can trust </h1>
        <p>VICTA represents a groundbreaking initiative designed to address the challenges and limitations of traditional systems</p>
      </div> */}
      
       

      <div id="hero-bottom-lower">
  
      <div id="hero-bottom-right">
          <motion.div
            className='usecase1'
            initial={{
              opacity: 0,
              x: 200
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              duration: 20,
            }}
            id="h-b-r-card">
            <img src={m01} style={{width:70, height:70}} alt="Mission" className="mb-3" />
            <h3>Mission </h3>
            <p>At VICTA, our mission is to be the best web 3.0 crypto coins and top web 3.0 tokens platform, providing real use cases in Blockchain coin, E-commerce coin, and Future of Blockchain. Discover the top metaverse utility, crypto metaverse tokens, and top digital currencies, all contributing to a green and sustainable future, reflecting the future of green blockchain technologies.</p>
          </motion.div>
          

          <motion.div
            className='usecase1'
            initial={{
              opacity: 0,
              x: 200
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              duration: 20,
            }}
            id="h-b-r-card">
            <img src={m02} style={{width:70, height:70}} alt="Robust" className="mb-3" />
            <h3>Robust Security Measures </h3>
            <p>VICTA employs state-of-the-art security measures to safeguard your data and transactions. Our platform is fortified with advanced encryption protocols, multi-factor authentication, and regular security audits to detect and mitigate potential vulnerabilities.</p>
         </motion.div>
          <motion.div
            className='usecase1'
            initial={{
              opacity: 0,
              x: 200
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              duration: 20,
            }}
            id="h-b-r-card">
            <img src={m03} style={{width:70, height:70}} alt="Policy" className="mb-3" />
            <h3>Privacy Protection  </h3>
            <p>Your privacy is our priority. VICTA adheres to stringent privacy policies, ensuring that your personal information is handled with the utmost confidentiality. Our commitment to privacy aligns with global standards and regulations to provide you with a secure and trusted environment.</p>
         </motion.div>
      </div>
        </div>

      
    </div>
  )
}

export default Hero_section