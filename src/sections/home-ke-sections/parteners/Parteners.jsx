import "./Parteners.css"
 
import partener1 from "../../../assets/logo/pr1.svg"
import partener2 from "../../../assets/logo/pr2.png"
import partener3 from "../../../assets/logo/pr3.png"
import partener4 from "../../../assets/logo/pr4.svg"
import partener5 from "../../../assets/bnc.svg"
 

const Parteners = () => {
  

  return (
    <>
    <div id="parteners-main" >
        <p id="H1">STRATEGIC <span style={{ color:'rgb(247, 185, 27)'}} >PARTENERS</span>  </p>  
    <div id="parteners-main2" >
        <img src={partener1} alt="Partner1" />
        <img src={partener2} alt="Partner2" />
        <img src={partener3} alt="Partner3" />
        <img src={partener4} alt="Partner4" />
        <img src={partener5} alt="Partner5" />
        
    </div>
    </div>
    </>
  );

 
}

export default Parteners