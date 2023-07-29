import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import cartoon1 from '../img/cartoonImg/1.png'
import cartoon2 from '../img/cartoonImg/2.png'
import cartoon3 from '../img/cartoonImg/3.png'
import cartoon4 from '../img/cartoonImg/4.png'
import cartoon6 from '../img/cartoonImg/6.png'
import cartoon8 from '../img/cartoonImg/8.png'
import cartoon9 from '../img/cartoonImg/9.png'
import cartoon10 from '../img/cartoonImg/10.png'
import cartoon11 from '../img/cartoonImg/11.png'
import cartoon12 from '../img/cartoonImg/12.png'
import nightImg1 from '../img/nightImg/1.jpeg'


// import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";
import Footer from "../components/FooterBlock";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";


export default function Home() {
  const modal = useSelector((state:any) => state.cocktail.modal);
  const theme = useSelector((state:any) => state.theme.theme);

  const [style, setStyle] = useState<string>("unset");

  SwiperCore.use([Autoplay])

  const checkStyle = () => {
    if (modal) {
      setStyle("fixed")
    } else {
      setStyle("unset")
    }
  }


  useEffect(() => {
    checkStyle();
    
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <>
      {theme && <main className="main flex flex-col items-center justify-center mt-32 z-30" style={{position: `${style}` as "unset"}}>
        {modal && <Modal key={Date.now()}/>}

      <section
          className="tittleBlock flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-customFitCont sm:max-w-screen-sm md:max-w-screen-md pb-20">

          <div className="homeTittle px-3 w-full lg:w-2/5">
              <div
                  className="tittleText mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                  <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                      Exclusive Cocktail App 

                      <span className="text-5xl text-blue-500 leading-relaxeds"
                      >
                      &nbsp; For Your&nbsp;
                      </span>

                      Enjoy Every Day
                  </h2>

                  <p
                      className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                      You must to use it app with responsibility!!!
                  </p>
              </div>

              <div className="sectionBtn text-center lg:text-left">
                  <button
                      className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                      >Key Features</button
                  >

                  <button 
                      className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                      >How We Work?</button
                  >
              </div>
          </div>

          <div className="homeSwiper px-3 mb-12 w-full lg:mb-0 lg:w-3/5">

              <div className="flex justify-center items-center">
              <Swiper
                autoplay={{ delay: 5000 }}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                // pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className='bg-none'>
                  {/* <img className='w-30cqw min-w mx-auto pt-24 ' src="./cartoonImg/1.png" alt="cartoon" /> */}
                  <img className='w-30cqw min-w mx-auto pt-24 ' src={cartoon1} alt="cartoon" />

                </SwiperSlide>
                <SwiperSlide>
                  {/* <img className='w-30cqw min-w mx-auto pt-36 ' src="./cartoonImg/2.png" alt="cartoon" /> */}
                  <img className='w-30cqw min-w mx-auto pt-36 ' src={cartoon2} alt="cartoon" />

                </SwiperSlide>
                <SwiperSlide>
                  {/* <img className='w-30cqw min-w mx-auto' src="./cartoonImg/3.png" alt="cartoon" /> */}
                  <img className='w-30cqw min-w mx-auto' src={cartoon3} alt="cartoon" />

                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-28' src={cartoon4} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-20' src={cartoon6} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-16' src={cartoon8} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-28' src={cartoon9} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-40' src={cartoon10} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-25cqw min-w mx-auto pt-2 ' src={cartoon11} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-24' src={cartoon12} alt="cartoon" />
                </SwiperSlide>
                </Swiper>
              </div>
          </div>
      </section>
  
        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
          // style={{backgroundImage: `url(./nightImg/1.jpeg)`}}
          style={{backgroundImage: `url(${nightImg1})`}}

          >
          <h1 className="parallaxTittle text-white text-5xl font-semibold mt-20 mb-10">
              Here is available more than 700 drinks!
          </h1>
        </section>
      <section className="textBlock py-6 px-16 space-y-8">
          <h1 className="text-4xl text-center my-10 font-tangerine text-indigo-900">About this App</h1>

          <p className="font-raleway leading-loose text-blue-800">    
            Our Cocktail Recipes app brings together the best and delicious cocktails from all over the world.
            The Cocktail Recipes app offers you many easy and quick recipes. These include alcoholic beverages and non-alcoholic beverages.
            There are many amazing cocktails that are the best choice for a party.
            Simple instructions for a cocktail recipe with a picture
            Each alcoholic drink mixing recipe has simple step by step instructions with a photo.
          </p>

          <h2 className="font-frederica text-2xl text-indigo-900">Collect your favorite cocktail recipes</h2>

          <p className="font-raleway leading-loose text-blue-800">    
            Add your favorite drink recipe to the favorites section of the app. 
            You can use saved cocktail recipes offline. You can also create collections of alcoholic mixed drink recipes 
            based on vodka rum and whiskey cocktail recipe, mixed cocktails, blood maries, bourbon drinks, champagne drinks, 
            cosmopolitans, daiquiris, hurricanes, gin drinks, margarita, martini, mojito recipe, rum drinks. , 
            tequila, vodka, whiskey, flavors and simple syrups, etc.
          </p>

          <h2 className="font-frederica text-2xl text-indigo-900">Search cocktail recipes</h2>

          <p className="font-raleway leading-loose text-blue-800"> 
            Let the cocktails flow with our lovely drink finder. Find recipes with a simple search by recipe name or ingredients used. 
            You can search for a drink recipe with the ingredients you have based on special occasions such as: 
            Thanksgiving, Christmas, Halloween, etc.   
          </p>

          <h2 className="font-frederica text-2xl text-indigo-900">We offer many cocktail recipes</h2>

          <p className="font-raleway leading-loose text-blue-800">        
            Prepare delicious recipes for alcoholic mixed drinks at home using sugar, honey, milk, herbs, soda, fruit juices, cream, sauce, lemon juice and liquor.
            Recipes for classic drinks such as Pineapple Milk, Freedom Punch, Apple Chips, Prairie Buzz and Ginger Baker are available in the app.
          </p>

          <p className="font-raleway leading-loose text-blue-800">  
            Start making drinks with our free cocktail recipe app today, it's the perfect drink maker.      
          </p>
      </section>
    <Footer/>
      </main>}
      {!theme && <main className="main flex flex-col items-center justify-center mt-32 z-30" style={{position: `${style}` as "unset"}}>
        {modal && <Modal key={Date.now()}/>}

      <section
          className="tittleBlock flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-customFitCont sm:max-w-screen-sm md:max-w-screen-md pb-20">

          <div className="homeTittle px-3 w-full lg:w-2/5">
              <div
                  className="tittleText mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                  <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl text-bisque">
                      Exclusive Cocktail App 

                      <span className="text-5xl text-blue-500 leading-relaxeds"
                      >
                      &nbsp; For Your&nbsp;
                      </span>

                      Enjoy Every Day
                  </h2>

                  <p
                      className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-rose-500">
                      You must to use it app with responsibility!!!
                  </p>
              </div>

              <div className="text-center lg:text-left">
                  <button
                      className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                      >Key Features</button
                  >

                  <button 
                      className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                      >How We Work?</button
                  >
              </div>
          </div>

          <div className="homeSwiper px-3 mb-12 w-full lg:mb-0 lg:w-3/5">

              <div className="flex justify-center items-center">
              <Swiper
                autoplay={{ delay: 5000 }}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                // pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className='bg-none'>
                  {/* <img className='w-30cqw min-w mx-auto pt-24 ' src="./cartoonImg/1.png" alt="cartoon" /> */}
                  <img className='w-30cqw min-w mx-auto pt-24 ' src={cartoon1} alt="cartoon" />

                </SwiperSlide>
                <SwiperSlide>
                  {/* <img className='w-30cqw min-w mx-auto pt-36 ' src="./cartoonImg/2.png" alt="cartoon" /> */}
                  <img className='w-30cqw min-w mx-auto pt-36 ' src={cartoon2} alt="cartoon" />

                </SwiperSlide>
                <SwiperSlide>
                  {/* <img className='w-30cqw min-w mx-auto' src="./cartoonImg/3.png" alt="cartoon" /> */}
                  <img className='w-30cqw min-w mx-auto' src={cartoon3} alt="cartoon" />

                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-28' src={cartoon4} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-20' src={cartoon6} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-16' src={cartoon8} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-28' src={cartoon9} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-40' src={cartoon10} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-25cqw min-w mx-auto pt-2 ' src={cartoon11} alt="cartoon" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-30cqw min-w mx-auto pt-24' src={cartoon12} alt="cartoon" />
                </SwiperSlide>
                </Swiper>
              </div>
          </div>
      </section>
  
        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
          style={{backgroundImage: `url(${nightImg1})`}}
          >
          <h1 className="parallaxTittle text-bisque bg-customTextBg rounded-xl p-5 text-5xl font-semibold mt-20 mb-10">
              Here is available more than 700 drinks!
          </h1>
        </section>
      <section className="textBlock py-6 px-16 space-y-8">
          <h1 className="text-4xl text-center my-10 font-tangerine text-bisque">About this App</h1>

          <p className="font-raleway leading-loose text-zinc-400">    
            Our Cocktail Recipes app brings together the best and delicious cocktails from all over the world.
            The Cocktail Recipes app offers you many easy and quick recipes. These include alcoholic beverages and non-alcoholic beverages.
            There are many amazing cocktails that are the best choice for a party.
            Simple instructions for a cocktail recipe with a picture
            Each alcoholic drink mixing recipe has simple step by step instructions with a photo.
          </p>

          <h2 className="font-frederica text-2xl text-bisque">Collect your favorite cocktail recipes</h2>

          <p className="font-raleway leading-loose text-zinc-400">    
            Add your favorite drink recipe to the favorites section of the app. 
            You can use saved cocktail recipes offline. You can also create collections of alcoholic mixed drink recipes 
            based on vodka rum and whiskey cocktail recipe, mixed cocktails, blood maries, bourbon drinks, champagne drinks, 
            cosmopolitans, daiquiris, hurricanes, gin drinks, margarita, martini, mojito recipe, rum drinks. , 
            tequila, vodka, whiskey, flavors and simple syrups, etc.
          </p>

          <h2 className="font-frederica text-2xl text-bisque">Search cocktail recipes</h2>

          <p className="font-raleway leading-loose text-zinc-400"> 
            Let the cocktails flow with our lovely drink finder. Find recipes with a simple search by recipe name or ingredients used. 
            You can search for a drink recipe with the ingredients you have based on special occasions such as: 
            Thanksgiving, Christmas, Halloween, etc.   
          </p>

          <h2 className="font-frederica text-2xl text-bisque">We offer many cocktail recipes</h2>

          <p className="font-raleway leading-loose text-zinc-400">        
            Prepare delicious recipes for alcoholic mixed drinks at home using sugar, honey, milk, herbs, soda, fruit juices, cream, sauce, lemon juice and liquor.
            Recipes for classic drinks such as Pineapple Milk, Freedom Punch, Apple Chips, Prairie Buzz and Ginger Baker are available in the app.
          </p>

          <p className="font-raleway leading-loose text-zinc-400">  
            Start making drinks with our free cocktail recipe app today, it's the perfect drink maker.      
          </p>
      </section>
    <Footer/>
      </main>}
    </>
    
  )
}
