
import "./Blog.css"
import blog1 from "../../../assets/blog1.jpg"
import blog2 from "../../../assets/blog2.jpg"
import blog3 from "../../../assets/blog3.jpg"
import { Link } from "react-router-dom"

const Blog = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>


            <section id="blogs" className=" p-lg-5 ">
                <div className="container">
                    <div className="text-center mb-5">
                        <h5 className="text-primary h6">Our Blog</h5>
                        <h2 className="display-20 text-white display-md-18 display-lg-16">Most recent our blog</h2>
                    </div>
                    <div className="row d-flex gap-0">
                        <div className="col-lg-4 col-md-6 mb-2-6 my-3 d-flex justify-content-center   ">
                            <Link to="/Blog/link1" onClick={scrollToTop} className="text-decoration-none">
                                <article className="card card-style2">
                                    <div className="card-img">
                                        <img className="rounded-top" src={blog1} alt="..." />
                                        <div className="date"><span>15</span>Sep</div>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="h5"><a href="#!">Decoding the Halving: A Comprehensive Exploration of {"Bitcoin's"} Crucial Role in Crypto Evolution</a></h3>
                                        <p className="display-30">The rapid evolution of the cryptocurrency landscape has been marked by seismic shifts, with Bitcoin emerging as the forerunner in the digital currency revolution.</p>
                                        {/* <a href="#!" className="read-more">read more</a> */}
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </article>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-2-6 my-3  d-flex justify-content-center ">
                            <Link to="/Blog/link2" onClick={scrollToTop} className="text-decoration-none">
                                <article className="card card-style2">
                                    <div className="card-img">
                                        <img className="rounded-top" src={blog2} alt="..." />
                                        <div className="date"><span>18</span>Aug</div>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="h5"><a href="#!"> Sustainable Solutions: Exploring the Green Blockchain for the Future with VICTA</a></h3>
                                        <p className="display-30">In an era characterized by an accelerating wave of technological innovation, the blockchain has emerged as a formidable force, reshaping industries and challenging conventional norms. </p>
                                        {/* <a href="#!" className="read-more">read more</a> */}
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </article>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-2-6 my-3  d-flex justify-content-center  ">
                            <Link to="/Blog/link3" onClick={scrollToTop} className="text-decoration-none">
                                <article className="card card-style2">
                                    <div className="card-img">
                                        <img className="rounded-top" src={blog3} alt="..." />
                                        <div className="date"><span>24</span>May</div>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="h5"><a href="#!"> Unlocking the Power: How Affiliate Marketing Strengthens the Crypto Landscape </a></h3>
                                        <p className="display-30">In the rapidly evolving landscape of cryptocurrency, innovative strategies are constantly emerging to enhance the ecosystem. One such strategy that has gained considerable attention is affiliate marketing. </p>
                                        {/* <a href="#!" className="read-more">read more</a> */}
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </article>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog