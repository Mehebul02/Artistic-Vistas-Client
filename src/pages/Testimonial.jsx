import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div>
            <div className="text-center my-10 space-y-4 ">
      <h1 className="text-4xl text-[#5454E2] font-serif font-semibold">Testimonial</h1>
      <p className="text-xl font-serif">Omnicos directe al desirabilite de un nov lingua franca: On refusa <br /> continuar payar custosi traductores..</p>
      <div className="divider"></div>
      </div>
      {/* card  */}
     
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">





</div>
<Swiper watchSlidesProgress={true} slidesPerView={3}  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}  className="mySwiper">
        <SwiperSlide><div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-lg border-4 border-[#5685EC] dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl text-[#5440DE]">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">HR Manager</p>
		</div>
		<div >
			
			<p>When crafting a testimonial, it's crucial to highlight your genuine experience with the product or service.</p>
			
			
		</div>
	</div>
</div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-lg border-4 border-[#5685EC] dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl text-[#5440DE]">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">HR Manager</p>
		</div>
		<div >
			
			<p>When crafting a testimonial, it's crucial to highlight your genuine experience with the product or service.</p>
			
			
		</div>
	</div>
</div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-lg border-4 border-[#5685EC] dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl text-[#5440DE]">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">HR Manager</p>
		</div>
		<div >
			
			<p>When crafting a testimonial, it's crucial to highlight your genuine experience with the product or service.</p>
			
			
		</div>
	</div>
</div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-lg border-4 border-[#5685EC] dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl text-[#5440DE]">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">HR Manager</p>
		</div>
		<div >
			
			<p>When crafting a testimonial, it's crucial to highlight your genuine experience with the product or service.</p>
			
			
		</div>
	</div>
</div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-lg border-4 border-[#5685EC] dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl text-[#5440DE]">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">HR Manager</p>
		</div>
		<div >
			
			<p>When crafting a testimonial, it's crucial to highlight your genuine experience with the product or service.</p>
			
			
		</div>
	</div>
</div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-lg border-4 border-[#5685EC] dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl text-[#5440DE]">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">HR Manager</p>
		</div>
		<div >
			
			<p>When crafting a testimonial, it's crucial to highlight your genuine experience with the product or service.</p>
			
			
		</div>
	</div>
</div></SwiperSlide>
        <SwiperSlide><div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-lg border-4 border-[#5685EC] dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl text-[#5440DE]">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">HR Manager</p>
		</div>
		<div >
			
			<p>When crafting a testimonial, it's crucial to highlight your genuine experience with the product or service.</p>
			
			
		</div>
	</div>
</div></SwiperSlide>
        
      </Swiper>

        </div>
    );
};

export default Testimonial;