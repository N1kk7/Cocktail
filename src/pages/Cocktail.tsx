import axios from 'axios';
import React, { useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {Grid, Pagination } from 'swiper';
import {Grid, Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

// import {  Grid, Pagination } from "swiper";
// import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import 'swiper/css/grid';
import 'swiper/css/pagination';
import '../index.css'
import { Link } from 'react-router-dom';

// import "swiper/modules/grid/grid";
// import "swiper/modules/pagination/pagination.min.css";
// import "swiper/components/effect-flip/effect-flip.scss";
// import "swiper/components/scrollbar/scrollbar.scss";


// SwiperCore.use([Grid, Pagination]);



export default function Cocktail() {

  const [nAlcoList, setnAlcoList] = useState([]);
  const [nAlcoState, setNAlcoState] = useState(true)
  SwiperCore.use([Autoplay])

  // const swiper = useSwiper();


  const noneAlcohol = async () => {
    setNAlcoState(false)

    const response: any = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
    setnAlcoList(response.data.drinks)
    // console.log(response.data.drinks);
    // console.log('call from func');
  
  };

  // const getDrink = async (id: number) => {
    

  //   const response: any = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

  //   console.log(response.data);
    
   
  
  // };


  













  return (
    <>
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
            {nAlcoState && <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white m-left-item" 
            onClick={() => noneAlcohol()}>
              <span className="relative pr-4 pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">All list</span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-violet-800">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </button>}
            {!nAlcoState && <button className='relative flex items-center m-left-item p-4' onClick={() => {setNAlcoState(true); setnAlcoList([])}}>
              <img className='w-2cqw ' src="close.png" alt="" />
              </button>}
          </div>
        </div>

        
        

      </div>
      <div className="swiperNotAlc mx-0 my-10">


      <Swiper
        autoplay={{ delay: 3000 }}
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
        {nAlcoList.map((item: any) => <SwiperSlide key={item.idDrink} className='rounded-3xl border-2 border-violet-300 shadow-custom-shadow'>

        <div  className="flex justify-between py-6 px-4  w-22cqw h-fit min-h-40cqh flex-col mx-auto ">
                    <div className="flex items-center space-x-4 flex-col">
                        <img src={item.strDrinkThumb} className='shadow-custom-shadow' alt=""/>
                        <div className="flex flex-col space-y-1">
                            <span className="font-bold w-max pt-5">{item.strDrink}</span>
                        </div>
                    </div>
          <img className='absolute bottom-0 left-0 -z-10 h-webkit rounded-3xl opacity-30' src="bg1.png" alt="" />

          <Link to={`/Drink/${item.idDrink}`}>
            <div className="flex flex-col justify-center items-center">
                        <button

                        
                            className="relative text-center h-4cqh w-11cqw transition-all duration-500
                                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r from-pink-500 via-yellow-400 to-emerald-300 before:transition-all
                                before:duration-300 before:opacity-50 before:hover:opacity-0 before:hover:scale-50
                                after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                                after:border after:border-sky-600 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
                        >
                            <span className="relative text-black uppercase italic font-frederica font-thin">Read more</span>
                        </button>
                    </div>
                    </Link>




                </div>



        </SwiperSlide> )}
        
      </Swiper>
      
        </div>



        
    </div>
</div>




    </>

  )
}
