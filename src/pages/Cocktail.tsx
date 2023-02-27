import { Swiper, SwiperSlide } from "swiper/react";
import {Grid, Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '../index.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNoneAlc, fetchAlc, eraseData } from '../redux/cocktailSlice';
import { btnActive, btnDisable } from "../redux/themeSlice";
import SwiperList from '../components/SwiperList';
import { ICocktails } from '../models/cocktailsModel';
import FirstsLetter from '../components/FirstsLetter';
import { IDrinkByLetter } from "../models/firstLetterModel";
import DrinkByLetter from "../components/DrinkByLetter";
import Footer from "../components/FooterBlock";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";




export default function Cocktail() {

  SwiperCore.use([Autoplay])
  const noneAlc = useSelector((state: any) => state.cocktail.noneAlc);
  const alc = useSelector((state: any) => state.cocktail.alc);
  const stateAlc = useSelector((state: any) => state.theme.stateAlc);
  const stateNoneAlc = useSelector((state: any) => state.theme.stateNoneAlc);
  const theme = useSelector((state: any) => state.theme.theme);
  const firstLetter = useSelector((state: any) => state.theme.stateFirstLetter);
  const modal = useSelector((state:any) => state.cocktail.modal);
  const [style, setStyle] = useState<string>("unset");



  const drinkByLetter = useSelector((state: any) => state.cocktail.drinkByLetter);
  const dispatch = useDispatch<any>();
// console.log(noneAlc)


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
        {modal && <Modal key={Date.now()}/>}

        <div className="main mt-40 " style={{position: `${style}` as "unset"}}>

{/* <div style={{backgroundImage: `url("bar.jpeg")`}} className="flex items-center justify-center bg-gradient-to-t h-screen p-6 bg-no-repeat bg-center"> */}

          <div className="container w-full my-0 mx-auto">


            <div className="alcohol flex items-center relative my-8">
              <div className="main-img relative z-10">
                <img className='w-40cqw' src="alcohol.jpeg" alt="" />

              </div>



              {theme && <div className="info-block w-70cqw bg-whiteBlur rounded-xl relative right-10 shadow-custom-shadow h-fit">
              {/* <div className="info-block w-70cqw bg-custom-transp rounded-xl relative right-10 shadow-custom-shadow h-fit"> */}

                <div className="tittle h-14 border-b-2 border-black font-tangerine p-py-1cqh text-center" >
                  <span className='pl-16 text-4xl '>Alcohol Drink</span>
                </div>
                <div className="description w-47cqw mx-auto font-sans italic">
                  <p>Alcoholic cocktails are very diverse, represented by both one type of alcohol and several. 
                    There are cocktails with vodka, cocktails with rum, cocktails with martini, cocktails with whiskey, 
                    cocktails with tequila, cocktails with absinthe, cocktails with malibu, cocktails with cognac, 
                    cocktails with baileys, cocktails with gin, cocktails with liqueur, cocktails with sambuca, cocktails with champagne, 
                    cocktails with vermouth, cocktail sambuca, cocktails with bacardi. 
                    Coffee cocktails with the addition of alcohol harmoniously emphasize the taste of coffee. 
                    And the names of cocktails! Russian russians speak for themselves, usually implying what to expect 
                    from a person who has drunk such a cocktail: an orgasm cocktail, a sex cocktail on the beach, a blue lagoon cocktail,
                     a Hiroshima cocktail, a white Russian cocktail and a black Russian cocktail, a daiquiri cocktail, a cosmopolitan cocktail.
                    </p>
                </div>
                <div className="btn">
                {stateAlc && <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white m-left-item" 
                  onClick={() => {dispatch(fetchAlc()); dispatch(btnDisable("Alco"))}}>
                    <span className="relative pr-4 pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">All drinks</span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-violet-800">
                      <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                  </button>}
                  {!stateAlc && <button className='relative flex items-center m-left-item p-4' onClick={() => {dispatch(eraseData("Alco"));dispatch(btnActive("Alco"));}}>
                    <img className='w-2cqw ' src="close.png" alt="" />
                    </button>}
                </div>
              </div>}

              {!theme && <div className="info-block w-70cqw text-bisque rounded-xl relative right-10 shadow-custom-shadow h-fit">
              {/* <div className="info-block w-70cqw bg-custom-transp rounded-xl relative right-10 shadow-custom-shadow h-fit"> */}

                <div className="tittle h-14 border-b-2 border-stone-500 font-tangerine p-py-1cqh text-center" >
                  <span className='pl-16 text-4xl '>Alcohol Drink</span>
                </div>
                <div className="description w-47cqw mx-auto font-raleway italic p-2">
                  <p>Alcoholic cocktails are very diverse, represented by both one type of alcohol and several. 
                    There are cocktails with vodka, cocktails with rum, cocktails with martini, cocktails with whiskey, 
                    cocktails with tequila, cocktails with absinthe, cocktails with malibu, cocktails with cognac, 
                    cocktails with baileys, cocktails with gin, cocktails with liqueur, cocktails with sambuca, cocktails with champagne, 
                    cocktails with vermouth, cocktail sambuca, cocktails with bacardi. 
                    Coffee cocktails with the addition of alcohol harmoniously emphasize the taste of coffee. 
                    And the names of cocktails! Russian russians speak for themselves, usually implying what to expect 
                    from a person who has drunk such a cocktail: an orgasm cocktail, a sex cocktail on the beach, a blue lagoon cocktail,
                     a Hiroshima cocktail, a white Russian cocktail and a black Russian cocktail, a daiquiri cocktail, a cosmopolitan cocktail.
                    </p>
                </div>
                <div className="btn">
                {stateAlc && <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white m-left-item" 
                  onClick={() => {dispatch(fetchAlc()); dispatch(btnDisable("Alco"))}}>
                    <span className="relative pr-4 pb-1 text-bisque after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">All drinks</span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-stone-300 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-violet-800">
                      <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                  </button>}
                  {!stateAlc && <button className='relative flex items-center m-left-item p-4' onClick={() => {dispatch(eraseData("Alco"));dispatch(btnActive("Alco"));}}>
                    <img className='w-2cqw bg-stone-400 p-2 rounded-lg ' src="close.png" alt="" />
                    </button>}
                </div>
              </div>}
            </div>

            {theme && <div className="swiperAlc mx-0 my-10">
              <Swiper
                // autoplay={{ delay: 3000 }}
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
                {alc.map((item: ICocktails) => <SwiperSlide  
                  className='rounded-3xl border-2 border-violet-300 shadow-custom-shadow'
                  key={item.idDrink} >
                  <SwiperList cocktails={item}/>
                </SwiperSlide>)}   
              </Swiper>
            </div>}
            {!theme && <div className="swiperAlc mx-0 my-10">
              <Swiper
                // autoplay={{ delay: 3000 }}
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
                {alc.map((item: ICocktails) => <SwiperSlide  
                  className='bg-unsetImp rounded-3xl border-2 border-violet-300 shadow-custom-shadow'
                  key={item.idDrink} >
                  <SwiperList cocktails={item}/>
                </SwiperSlide>)}   
              </Swiper>
            </div>}

            {theme && <div className="non-alcohol flex items-center relative my-8">
              <div className="main-img relative z-10">
                <img className='w-40cqw h-35cqh' src="non-alco.jpeg" alt="" />
              </div>
              <div className="info-block w-70cqw bg-custom-transp rounded-xl relative right-10 shadow-custom-shadow h-fit">
                <div className="tittle h-14 border-b-2 border-black font-tangerine p-py-1cqh text-center" >
                  <span className='pl-16 text-4xl '>None Alcohol Drink</span>
                </div>
                <div className="description w-47cqw mx-auto font-sans italic">
                  <p>Making non-alcoholic cocktails at home is not only easy, but also fascinating. 
                    Some names are worth something: kobler, flip, phiz, sherbet, julep, eggnog, punch, bowl, cruchon, frappe... 
                    We have almost a thousand recipes for non-alcoholic cocktails, each of which will delight you with its taste.
                    If you prepare a non-alcoholic cocktail according to our recipe, take a photo of your non-alcoholic cocktail 
                    and place it under the recipe - treat everyone to your non-alcoholic cocktail. Everyone has learned to cook 
                    a delicious non-alcoholic cocktail!
                  </p>
                </div>
                <div className="btn">
                  {stateNoneAlc && <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white m-left-item" 
                  onClick={() => {dispatch(fetchNoneAlc()); dispatch(btnDisable("NoneAlc"))}}>
                    <span className="relative pr-4 pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">All drinks</span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-violet-800">
                      <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                  </button>}
                  {!stateNoneAlc && <button className='relative flex items-center m-left-item p-4' onClick={() => {dispatch(eraseData("NoneAlc"));dispatch(btnActive("NoneAlc"));}}>
                    <img className='w-2cqw ' src="close.png" alt="" />
                    </button>}
                </div>
              </div>
            </div>}

            {!theme && <div className="non-alcohol flex text-bisque items-center relative my-8">
              <div className="main-img relative z-10">
                <img className='w-40cqw h-35cqh' src="non-alco.jpeg" alt="" />
              </div>
              <div className="info-block w-70cqw rounded-xl relative right-10 shadow-custom-shadow h-fit">
                <div className="tittle h-14 border-b-2 border-stone-500 font-tangerine p-py-1cqh text-center" >
                  <span className='pl-16 text-4xl '>None Alcohol Drink</span>
                </div> 
                <div className="description w-47cqw mx-auto font-raleway italic p-2">
                  <p>Making non-alcoholic cocktails at home is not only easy, but also fascinating. 
                    Some names are worth something: kobler, flip, phiz, sherbet, julep, eggnog, punch, bowl, cruchon, frappe... 
                    We have almost a thousand recipes for non-alcoholic cocktails, each of which will delight you with its taste.
                    If you prepare a non-alcoholic cocktail according to our recipe, take a photo of your non-alcoholic cocktail 
                    and place it under the recipe - treat everyone to your non-alcoholic cocktail. Everyone has learned to cook 
                    a delicious non-alcoholic cocktail!
                  </p>
                </div>
                <div className="btn">
                  {stateNoneAlc && <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white m-left-item" 
                  onClick={() => {dispatch(fetchNoneAlc()); dispatch(btnDisable("NoneAlc"))}}>
                    <span className="relative pr-4 pb-1 text-bisque after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-600 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">All drinks</span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-stone-300 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-violet-800">
                      <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                  </button>}
                  {!stateNoneAlc && <button className='relative flex items-center m-left-item p-4' onClick={() => {dispatch(eraseData("NoneAlc"));dispatch(btnActive("NoneAlc"));}}>
                    <img className='w-2cqw bg-stone-400 p-2 rounded-lg  ' src="close.png" alt="" />
                    </button>}
                </div>
              </div>
            </div>}

            {theme && <div className="swiperNoneAlc mx-0 my-10">
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
                {noneAlc.map((item: ICocktails) => <SwiperSlide  
                  className='rounded-3xl border-2 border-violet-300 shadow-custom-shadow'
                  key={item.idDrink} >
                  <SwiperList cocktails={item}/>
                </SwiperSlide>)}   
              </Swiper>
            </div>}
            {!theme && <div className="swiperNoneAlc mx-0 my-10">
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
                {noneAlc.map((item: ICocktails) => <SwiperSlide  
                  className='bg-unsetImp rounded-3xl border-2 border-violet-300 shadow-custom-shadow'
                  key={item.idDrink} >
                  <SwiperList cocktails={item}/>
                </SwiperSlide>)}   
              </Swiper>
            </div>}

            <div className="findByFirstLetter pb-14">
              {theme && <div className="tittle border-b-2 border-black">
                <h2>Drinks by first letter</h2>
              </div>}
              {!theme && <div className="tittle border-b-2 border-stone-500 text-bisque">
                <h2 className='font-frederica text-2xl p-2'>Drinks by first letter</h2>
              </div>}
              <FirstsLetter/>
              {firstLetter && <button className='relative flex items-center m-left-item p-4' onClick={() => {dispatch(eraseData("FirstLetter"));dispatch(btnDisable("FirstLetter"));}}>
                    {theme && <img className='w-2cqw' src="close.png" alt="" />}
                    {!theme && <img className='w-2cqw bg-stone-400 p-2 rounded-lg ' src="close.png" alt="" />}

                    </button>}
              {/* {drinkByLetter.map((card: IDrinkByLetter) => console.log(card))} */}
              <div className="cardWrapper flex flex-wrap">
                {drinkByLetter?.map((card: IDrinkByLetter) => <DrinkByLetter key={card.idDrink} card={card}/>)}
              </div>
            </div>
          </div>

        </div>
        <Footer/>
    </>
  )
}
