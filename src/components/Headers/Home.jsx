import Hero from "./Hero";
import image1 from "../../assets/card img/1st.jpg";
import { RiStarFill } from "react-icons/ri";
import { SiProcessingfoundation } from "react-icons/si";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Contact from "../../pages/Contact";
import Testimonial from "../../pages/Testimonial";
const Home = () => {
  const crafts = useLoaderData()
const slice =crafts.slice(0,6)
  console.log(crafts)
  return (
    <div >
      <div>
        <Hero></Hero>
      </div>
      <div className="text-center my-10 space-y-4 ">
      <h1 className="text-4xl text-[#5454E2] font-serif font-semibold">Craft Items Section</h1>
      <p className="text-xl font-serif">From intricate hand-sewn textiles to beautifully sculpted ceramics, discover artisanal treasures <br />waiting to adorn your home or inspire your next project. Each item is a testament to craftsmanship and creativity.</p>
      <div className="divider"></div>
      </div>
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        
        {
          slice.map(craft =>  <Card  key={craft._id} craft={craft}></Card>)
        }
        
        
      </div>
      <div className="max-w-[1320px] mx-auto">
      <Testimonial/>
      </div>
   <div>
   {/* <Contact/> */}
   </div>
    </div>
  );
};

export default Home;
