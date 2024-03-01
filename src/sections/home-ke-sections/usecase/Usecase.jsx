import "./Usecase.css"
import { motion } from "framer-motion"
// import uleftimg from "../../../assets/images/usecase left 2.jpg"

import u1 from '../../../assets/icons/u1.svg'
import u2 from '../../../assets/icons/u2.svg'
import u3 from '../../../assets/icons/u3.svg'
import u4 from '../../../assets/icons/u4.svg'
import u5 from '../../../assets/icons/u5.svg'
import u6 from '../../../assets/icons/u6.svg'
import u7 from '../../../assets/icons/u7.svg'
import u8 from '../../../assets/icons/u8.svg'
import glob from '../../../assets/images/aiai.svg'

 

const usecase = () => {
  return (
    <div id="usecase-main">
      <div id="ecosystem">
        <img src={glob} alt="" />
      </div>
      <motion.div className='s3header' whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} transition={{
        ease: "linear",
        duration: 1,
      }}
        whileInView={{ opacity: 1 }}>
        <p className='s3headersmall'>Victa  <span style={{color:'white', lineHeight:"normal"}}> Ecosystem</span></p>
        <p className='s3header1'>
        The versatility of Victa manifests through its diverse use cases, enhancing user engagement and utility within the Victa ecosystem some key use cases includes Green Blockchain , Utility Wallet, E-commerce reward system, Metaverse OTT, DEXA, SVA, Dating application, EV ecosystem.
             </p>

      </motion.div>

      <motion.div className='s3usecase'

      >
 


        <div className='s3usecaseright'>

          <div className='usecasemain'>
            {/* <div id="use-main-inner"> */}
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
              >
                <div>
                  <img src={u1} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Utility Wallet</p>
                  <p className='ucpara'>Victa is dedicated to provide a streamlined and enriching experience for users managing utility bills. Explore a user-friendly utility wallet that simplifies mobile recharges, electricity bill payments, swift tag transactions, and more.</p>
                  
                </div>

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
              >
                <div>
                  <img src={u2} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>E-Commerce Rewards Program</p>
                  <p className='ucpara'>Victa's integration into the broader digital commerce ecosystem is comprehensive. Whether dealing with virtual coins, Fintech coins, or Reward coins, our platform provides a holistic solution for various E-commerce transactions. This comprehensive approach reflects our commitment to meeting diverse needs within the digital commerce landscape.

                  </p>

                </div>

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
              >
                <div>
                  <img src={u3} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>EV Application</p>
                  <p className='ucpara'>At the heart of the Victa EV Application lies a commitment to revolutionize electric vehicle management, providing users with an intuitive, secure, and efficient platform. Our user-centric design ensures a hassle-free experience, simplifying tasks such as monitoring charging status, planning routes, and optimizing energy consumption, making electric vehicle ownership a truly user-friendly endeavor with getting reward as Victa Token on charging to help to promote green energy 
                  </p>
                  
                </div>

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
              >
                <div>
                  <img src={u4} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Short Video platform</p>
                  <p className='ucpara'>Step into the future of content creation with the Victa Short Video platform, a trailblazing solution will launched in upcoming year. Victa is at the forefront of innovation, seamlessly merging user-friendly design, cutting-edge technology, and sustainable practices to revolutionize the landscape of short video hosting.

                  </p>
                  
                </div>

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
              >
                <div>
                  <img src={u5} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Metaverse OTT Platform </p>
                  <p className='ucpara'> Users can subscribe to the Metaverse OTT platform through VICTA, gaining access to a varied content selection encompassing local markets, gaming, short storytelling, and motivational pieces. 


                  </p>
                 
                </div>

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
              >
                <div>
                  <img src={u6} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Online Dating App</p>
                  <p className='ucpara'> Embark on a revolutionary journey in the realm of dating with Victa's Online Dating App, an avant-garde solution will introduced in upcoming years. 


                  </p>
                
                </div>

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
              >
                <div>
                  <img src={u7} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Green Energy Blockchain</p>
                  <p className='ucpara'>Victa Green Energy Blockchain is meticulously designed to provide users with an eco-friendly and secure platform for managing renewable energy resources. Our user-centric design ensures a seamless experience, from transparent energy transactions to decentralized energy exchanges, making Victa a preferred choice for those committed to sustainability.
                  </p>
                   
                </div>

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
              >
                <div>
                  <img src={u8} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>DEXA Transactions</p>
                  <p className='ucpara'>Within the decentralized exchange (DEXA), users seamlessly utilize VICTA for secure and efficient transactions, fostering liquidity and enhancing platform functionality. Leverage the innovative features of Metaverse coin, utilizing the upcoming AI coin to pioneer new technology in green blockchain. VICTA emerges as the go-to high-returns coin, embodying a real use-case in the crypto landscape and asserting its position as the best cryptocurrency, with qualities of the highest potential cryptocurrency, including ground-breaking altcoin.
                  </p>
                   
                </div>

              </motion.div>
 
          </div>
        </div>
      </motion.div>



    </div>
  )
}

export default usecase