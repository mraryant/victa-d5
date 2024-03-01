
import Hero_section from "../sections/home-ke-sections/hero/Hero_section"
import About_section from "../sections/home-ke-sections/about/About_section"
import Hero_bottom from "../sections/home-ke-sections/herobottom/Hero_bottom"
import Usecase from "../sections/home-ke-sections/usecase/Usecase"
import Roadmap from "../sections/home-ke-sections/roadmap/Roadmap"
import Tokonomics from "../sections/home-ke-sections/tokonomics/Tokonomics"
import Parteners from "../sections/home-ke-sections/parteners/Parteners"
import Footer from "../sections/home-ke-sections/footer/Footer"
import Blog from "../sections/home-ke-sections/blogs/Blog"
 


const Home = () => {

  return (
    <div>


      <Hero_section />
      <About_section />
      <Hero_bottom />

      <Usecase />
      <Roadmap />
      <Parteners />
      <Tokonomics />
      <Blog/>
      <Footer />
    </div>
  )
}

export default Home