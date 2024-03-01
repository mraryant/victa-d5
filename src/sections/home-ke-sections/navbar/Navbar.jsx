
import "./Navbar.css"
import Logo from "../../../assets/logo/logo.png"
// import Logo from "../../../assets/logo/logo color2 name.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";



const Navbar = () => {

    const animation = {
        initial: {
            opacity: 0, y: -30
        },

        transition: {
            ease: "backInOut",
            staggerChildren: 2,
            duration: 1
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "backInOut",
                delay: 0.4,
                type: "spring",
                duration: 1.5
            },
        }
    };

    return (
        <>
            <motion.nav
                initial="initial"
                animate="whileInView"
                variants={animation}

                className=" navbar navbar-expand-lg navbar-light topnav">
                <div className="container-fluid navfluid" >
                    <Link to="/"> <img id="logo"
                        src={Logo} alt="logo"
                    /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div style={{ width: "30%" }}>

                        </div>
                        <ul

                            className="navbar-nav me-auto mb-2 mb-lg-0 ngflex" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ecosystem">Ecosystem</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="block" href="https://victastake.com/">Staking</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="#tokenomics">Tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blogs">Blog</a>
                            </li>


                        </ul>
                        <form className="d-flex ngflex">


                            <button className="button-87 btn2  " style={{ width: "100%", fontSize: 14 }}> <a style={{ textDecoration: 'none', color: 'white' }} target="block" href="https://victastake.com/">Buy Tokens </a> </button>
                        </form>
                    </div>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar