import "./style/Roadmap_card.css"
import { motion } from "framer-motion"

const Roadmap_card = ( prop) => {
    // const background = {
    //     backgroundColor: prop.bg,
    // }
  return (
      <motion.div
      
          className='usecase1'
          initial={{
              opacity: 0,
              scale:0.9
          }}
          transition={{
              ease: "easeInOut",
              duration: 1,
              staggerChildren:true
          }}
          whileInView={{
              opacity: 1,
               scale:1,
              duration: 10,
          }}
          id="roadmap-card"  >
          <h6>{prop.h4}</h6>
          
          {/* <div id="image_div"  >
              <img src={prop.image} alt="" />
          </div> */}
          
          <div id="r-mid">
              
          <h4>{ prop.h4_2}</h4>
          <p>{prop.p}</p>
          </div>
      </motion.div>
  )
}

export default Roadmap_card