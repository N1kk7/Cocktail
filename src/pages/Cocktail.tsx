import axios from 'axios';
import React, {useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

// import "./styles.css";





export default function Cocktail() {

  const [nAlcoList, setnAlcoList] = useState([])


  const noneAlcohol = async () => {

    const response: any = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
    setnAlcoList(response.data.drinks)
    // console.log(response.data.drinks);
    // console.log('call from func');
  
  };

  console.log(nAlcoList);
  













  return (
    <div className="main mt-40 ">

    {/* <div style={{backgroundImage: `url("bar.jpeg")`}} className="flex items-center justify-center bg-gradient-to-t h-screen p-6 bg-no-repeat bg-center"> */}

        <div className="container w-full my-0 mx-auto">

          <div className="acohol flex items-center relative my-8">
            <div className="main-img relative z-10">
              <img className='w-40cqw' src="alcohol.jpeg" alt="" />
  
            </div>
            <div className="info-block w-70cqw bg-custom-transp rounded-xl relative right-10 shadow-custom-shadow h-fit">
              <div className="tittle h-14 border-b-2 border-black font-tangerine p-py-1cqh text-center" >
                <span className='pl-16 text-4xl '>Alcohol Drink</span>
              </div>
              <div className="alphabet text-center w-45cqw mx-auto">
                <div className="alhabet-tittle font-frederica space-x-24 text-2xl pt-5">
                  <span>Find Name Of Drink By First Letter</span>
                </div>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>A</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>B</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>C</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>D</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>E</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>F</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>G</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>H</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>I</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>J</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>K</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>L</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>M</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>N</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>O</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>P</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>Q</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>R</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>S</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>T</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>U</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>V</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>W</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>X</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>Y</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>Z</span>


              </div>
              <div className="btn">
                <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white m-left-item">
                  <span className="relative pr-4 pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">All list</span>
                  <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-violet-800">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          <div className="non-acohol flex items-center relative my-8">
            <div className="main-img relative z-10">
              <img className='w-40cqw h-45cqh' src="non-alco.jpeg" alt="" />
  
            </div>
            <div className="info-block w-70cqw bg-custom-transp rounded-xl relative right-10 shadow-custom-shadow h-fit">
              <div className="tittle h-14 border-b-2 border-black font-tangerine p-py-1cqh text-center" >
                <span className='pl-16 text-4xl '>None Alcohol Drink</span>
              </div>
              <div className="alphabet text-center w-45cqw mx-auto">
                <div className="alhabet-tittle font-frederica space-x-24 text-2xl pt-5">
                  <span>Find Name Of Drink By First Letter</span>
                </div>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>A</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>B</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>C</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>D</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>E</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>F</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>G</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>H</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>I</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>J</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>K</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>L</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>M</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>N</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>O</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>P</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>Q</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>R</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>S</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>T</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>U</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>V</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>W</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>X</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>Y</span>
                <span className='letter m-2cqw inline-block max-w-fit cursor-pointer'>Z</span>


              </div>
              <div className="btn">
                <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white m-left-item" 
                onClick={() => noneAlcohol()}>
                  <span className="relative pr-4 pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">All list</span>
                  <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-violet-800">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                  </svg>
                </button>
              </div>
            </div>

            
            

          </div>
          <div className="swiperNotAlc">
            <Swiper
              slidesPerView={3}
              grid={{
                rows: 2,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            </div>



            
        </div>
    </div>
  )
}






// <div className="flex justify-between py-6 px-4 bg-white/30 rounded-lg w-22cqw h-35cqh flex-col">
//                     <div className="flex items-center space-x-4 flex-col">
//                         <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="" alt=""/>
//                         <div className="flex flex-col space-y-1">
//                             <span className="font-bold">Leonard Krashner</span>
//                             <span className="text-sm">Yeah same question here too 🔥</span>
//                         </div>
//                     </div>
//                     <div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
//                         17m ago
//                     </div>
//                 </div>