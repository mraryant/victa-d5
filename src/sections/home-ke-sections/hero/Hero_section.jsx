import "./Hero_section.css"

import Navbar from "..//navbar/Navbar"
import bghome from "../../../assets/logo/e3_aMmiWCy6.mp4"
import whitepaper from "../../../assets/images/VICTA WHITEPAPER.pdf"
import Headroom from "react-headroom"
 
// import { motion } from "framer-motion"

const Hero_section = () => {
 
  return (
    <>
          <div id="navbar-hero">
            <Headroom>
                <Navbar/>
            </Headroom>
          </div>
      <div id="hero-main">
        <video id="v1" playsInline autoPlay muted loop src={bghome} > </video>


        <div id="hero-left">


          <h1>
            <div>
              <span id="victa"> VICTA </span>
              <span className="sm-t" style={{textTransform:"none"}}> is</span>
              
              <div>
              <span  className="lg-t">
PROOF OF ENERGY
</span>
              </div>
              <span id="poe" className="sm-t"> a BLOCKCHAIN technology  </span>
            </div>
          </h1>

          <h6>The energy issue is basically a blockchain issue due to the carbon footprint associated with mining digital assets like Bitcoin.
Using the Victa network and energy-efficient consensus methods, a solution with proof of energy (PoE) and sustainable energy sources including geothermal, hydroelectric, solar, and volcanic power may be able to reach net-zero carbon emissions.
VICTA is revolutionizing the industry, driving on renewable energy, also known as sustainable energy.
 </h6>


          <div id="hero-buttons">

            <button className="button-87 " type="submit" style={{ fontSize: 14 }}> <a style={{ textDecoration: 'none', color: 'white' }} target="block" href="https://victastake.com/">Buy Tokens</a></button>
            <button className="button-87" onClick={() => { window.open(whitepaper) }} type="download" style={{ fontSize: 14 }} > Whitepaper </button>

          </div>
        </div>




        <div id="hero-right">
           
           
        </div>

        <div id="hero-gredient">
        </div>

      </div>
    </>
  )
}

export default Hero_section