import image1 from "../../assets/slide_image/1st_.jpg";
import image2 from "../../assets/slide_image/2nd.jpg";
import image3 from "../../assets/slide_image/3rd.jpg";
import image4 from "../../assets/card img/outline ported.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdDraw } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";




const Hero = () => {
  return (
    <div>
      <div>
      {/* bg-[#c5b2f0] */}
        <Swiper
          className="bg-[#ffffff] p-2 lg:p-0 "
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
         
          {/* 1st slide  */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row justify-between p-4 lg:p-28 bg-[#ffffff] min-h-[30vh] rounded-lg">
              <div className="  space-y-10">
                {/* <div className="w-10 </div> */}
                <div className="flex md:flex items-center gap-4">
                  <button className="text-xl bg-[#571f8e] p-2 rounded-full">
                  <MdDraw className="text-white text-xl"></MdDraw>
                  </button>
                  <h1 className="text-2xl font-serif font-semibold">
                    
                  <Typewriter 
            words={["Top Printing Drawing", ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
                  </h1>
                </div>
                <h1 className="text-4xl space-y-4 font-serif font-bold text-[#571f8e]">
                Painting Is Silent Poetry, <br /> And Poetry Is Painting.
                </h1>
                <p className="text-xl text-gray-700 font-serif">
                Sometimes a game comes at just the right moment in your life. 'Flower' is beautiful, serene, and a bit of sunshine in a gloomy world I remember.
                </p>
                {/* <button className="bg-[#571f8e] px-4 py-2 rounded-md text-xl text-white  font-serif font-semibold">
                    Explore Now
                  </button> */}
                <div>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#06ABB2] rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#06ABB2] rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#399598] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl font-serif font-semibold">
                     View More
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <img className="max-w-[600px]" src={image1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          {/* 2nd slide  */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row justify-between p-4 lg:p-28 bg-[#ffffff] min-h-[30vh] rounded-lg">
              <div className="  space-y-10">
                {/* <div className="w-10 </div> */}
                <div className="flex md:flex items-center gap-4">
                  <button className="text-xl bg-[#571f8e] p-2 rounded-full">
                  <MdDraw className="text-white text-xl"></MdDraw>
                  </button>
                  <h1 className="text-2xl font-serif font-semibold">
                  <Typewriter 
            words={["Top Printing Drawing", ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
                  </h1>
                </div>
                <h1 className="text-4xl space-y-4 font-serif font-bold text-[#571f8e]">
                Painting Is Silent Poetry, <br /> And Poetry Is Painting.
                </h1>
                <p className="text-xl text-gray-700 font-serif">
                Sometimes a game comes at just the right moment in your life. 'Flower' is beautiful, serene, and a bit of sunshine in a gloomy world I remember.
                </p>
                {/* <button className="bg-[#571f8e] px-4 py-2 rounded-md text-xl text-white  font-serif font-semibold">
                    Explore Now
                  </button> */}
                <div>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#06ABB2] rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#06ABB2] rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#399598] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl font-serif font-semibold">
                     View More
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <img className="max-w-[600px]" src={image2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          {/* 3rd slide  */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row justify-between p-4 lg:p-28 bg-[#ffffff] min-h-[30vh] rounded-lg">
              <div className="  space-y-10">
                {/* <div className="w-10 </div> */}
                <div className="flex md:flex items-center gap-4">
                  <button className="text-xl bg-[#571f8e] p-2 rounded-full">
                  <MdDraw className="text-white text-xl"></MdDraw>
                  </button>
                  <h1 className="text-2xl font-serif font-semibold">
                  <Typewriter 
            words={["Top Printing Drawing", ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
                  </h1>
                </div>
                <h1 className="text-4xl space-y-4 font-serif font-bold text-[#571f8e]">
                Painting Is Silent Poetry, <br /> And Poetry Is Painting.
                </h1>
                <p className="text-xl text-gray-700 font-serif">
                Sometimes a game comes at just the right moment in your life. 'Flower' is beautiful, serene, and a bit of sunshine in a gloomy world I remember.
                </p>
                {/* <button className="bg-[#571f8e] px-4 py-2 rounded-md text-xl text-white  font-serif font-semibold">
                    Explore Now
                  </button> */}
                <div>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#06ABB2] rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#06ABB2] rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#399598] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl font-serif font-semibold">
                     View More
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <img className="max-w-[600px]" src={image3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          {/* 4th slide  */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row justify-between p-4 lg:p-28 bg-[#ffffff] min-h-[30vh] rounded-lg">
              <div className="  space-y-10">
                {/* <div className="w-10 </div> */}
                <div className="flex md:flex items-center gap-4">
                  <button className="text-xl bg-[#571f8e] p-2 rounded-full">
                  <MdDraw className="text-white text-xl"></MdDraw>
                  </button>
                  <h1 className="text-2xl font-serif font-semibold">
                  <Typewriter 
            words={["Top Printing Drawing", ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
                  </h1>
                </div>
                <h1 className="text-4xl space-y-4 font-serif font-bold text-[#571f8e]">
                Painting Is Silent Poetry, <br /> And Poetry Is Painting.
                </h1>
                <p className="text-xl text-gray-700 font-serif">
                Sometimes a game comes at just the right moment in your life. 'Flower' is beautiful, serene, and a bit of sunshine in a gloomy world I remember.
                </p>
                {/* <button className="bg-[#571f8e] px-4 py-2 rounded-md text-xl text-white  font-serif font-semibold">
                    Explore Now
                  </button> */}
                <div>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#06ABB2] rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#06ABB2] rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#399598] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl font-serif font-semibold">
                     View More
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <img className="max-w-[600px]" src={image4} alt="" />
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      
      </div>
    </div>
  );
};

export default Hero;
