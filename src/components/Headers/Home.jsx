import Hero from "./Hero";
import image1 from "../../assets/card img/1st.jpg";
import { RiStarFill } from "react-icons/ri";
import { SiProcessingfoundation } from "react-icons/si";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
const Home = () => {
  const crafts = useLoaderData()
  console.log(crafts)
  return (
    <div>
      <div className=" min-h-screen">
        <Hero></Hero>
      </div>
      <div className="max-w-[1300px] mx-auto grid grid-cols-3 gap-6 ">
        
        {
          crafts.map(craft => <Card key={craft._id} craft={craft}></Card>)
        }
        
        
      </div>
    </div>
  );
};

export default Home;
