
import image1 from '../../assets/slide_image/1st_.jpg'
import image2 from '../../assets/slide_image/2nd.jpg' 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
    return (
        <div>
        <div>
          <Swiper
            className="bg-[#c5b2f0]"
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
              <div className="flex flex-col md:flex-row justify-between p-4 lg:p-28 bg-[#c5b2f0] min-h-[30vh] rounded-lg">
                <div className="  space-y-10">
                  {/* <div className="w-10 </div> */}
                  <div className="flex md:flex items-center gap-4">
                    <button className="text-xl bg-[#571f8e] p-2 rounded-full">
                      {" "}
                     
                    </button>
                    <h1 className="text-2xl font-serif font-semibold">
                      Top Brands
                    </h1>
                  </div>
                  <h1 className="text-4xl font-serif font-bold text-[#571f8e]">
                    Shop Smart,Shop <br /> TechWonders
                  </h1>
                  <p className="text-xl text-gray-700 font-serif">
                    Stay ahead with the latest tech trends and innovations.
                  </p>
                  {/* <button className="bg-[#571f8e] px-4 py-2 rounded-md text-xl text-white  font-serif font-semibold">
                    Explore Now
                  </button> */}
                  <div>
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#571f8e] rounded-xl group"
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#2b074e] rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4f1b82] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl font-serif font-semibold">
                        Explore Now
                      </span>
                    </a>
                  </div>
                </div>
                <div>
                  <img className="max-w-[600px]" src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            {/* 1st slide  */}
            <SwiperSlide>
              <div className="flex flex-col md:flex-row justify-between p-4 lg:p-28 bg-[#c5b2f0] min-h-[30vh] rounded-lg">
                <div className="  space-y-10">
                  {/* <div className="w-10 </div> */}
                  <div className="flex md:flex items-center gap-4">
                    <button className="text-xl bg-[#571f8e] p-2 rounded-full">
                      {" "}
                     
                    </button>
                    <h1 className="text-2xl font-serif font-semibold">
                      Top Brands
                    </h1>
                  </div>
                  <h1 className="text-4xl font-serif font-bold text-[#571f8e]">
                    Shop Smart,Shop <br /> TechWonders
                  </h1>
                  <p className="text-xl text-gray-700 font-serif">
                    Stay ahead with the latest tech trends and innovations.
                  </p>
                  {/* <button className="bg-[#571f8e] px-4 py-2 rounded-md text-xl text-white  font-serif font-semibold">
                    Explore Now
                  </button> */}
                  <div>
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#571f8e] rounded-xl group"
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#2b074e] rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4f1b82] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl font-serif font-semibold">
                        Explore Now
                      </span>
                    </a>
                  </div>
                </div>
                <div>
                  <img className="max-w-[600px]" src={image2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            
          
          </Swiper>
          fusdfhsdufghfohsdf;ocshdf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, exercitationem placeat dolor dignissimos animi nostrum voluptas consectetur, amet quaerat veniam commodi est ipsum, rem labore nesciunt corporis nulla eveniet voluptatibus?
        </div>
      </div>
    );
};

export default Hero;