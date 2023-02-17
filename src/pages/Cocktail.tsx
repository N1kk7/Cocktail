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




export default function Cocktail() {

  SwiperCore.use([Autoplay])
  const noneAlc = useSelector((state: any) => state.cocktail.noneAlc);
  const alc = useSelector((state: any) => state.cocktail.alc);
  const stateAlc = useSelector((state: any) => state.theme.stateAlc);
  const stateNoneAlc = useSelector((state: any) => state.theme.stateNoneAlc);
  const firstLetter = useSelector((state: any) => state.theme.stateFirstLetter);

  const drinkByLetter = useSelector((state: any) => state.cocktail.drinkByLetter);
  const dispatch = useDispatch<any>();




  return (
    <>
        <div className="main mt-40 ">

{/* <div style={{backgroundImage: `url("bar.jpeg")`}} className="flex items-center justify-center bg-gradient-to-t h-screen p-6 bg-no-repeat bg-center"> */}

          <div className="container w-full my-0 mx-auto">

            <div className="alcohol flex items-center relative my-8">
              <div className="main-img relative z-10">
                <img className='w-40cqw' src="alcohol.jpeg" alt="" />

              </div>
              <div className="info-block w-70cqw bg-custom-transp rounded-xl relative right-10 shadow-custom-shadow h-fit">
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
              </div>
            </div>

            <div className="swiperAlc mx-0 my-10">
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
                {alc.map((item: ICocktails) => <SwiperSlide  
                  className='rounded-3xl border-2 border-violet-300 shadow-custom-shadow'
                  key={item.idDrink} >
                  <SwiperList cocktails={item}/>
                </SwiperSlide>)}   
              </Swiper>
            </div>

            <div className="non-alcohol flex items-center relative my-8">
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
            </div>

            <div className="swiperNoneAlc mx-0 my-10">
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
            </div>

            <div className="findByFirstLetter pb-14">
              <div className="tittle border-b-2 border-black">
                <h2>Drinks by first letter</h2>
              </div>
              <FirstsLetter/>
              {firstLetter && <button className='relative flex items-center m-left-item p-4' onClick={() => {dispatch(eraseData("FirstLetter"));dispatch(btnDisable("FirstLetter"));}}>
                    <img className='w-2cqw ' src="close.png" alt="" />
                    </button>}
              {/* {drinkByLetter.map((card: IDrinkByLetter) => console.log(card))} */}
              <div className="cardWrapper flex flex-wrap">
                {drinkByLetter?.map((card: IDrinkByLetter) => <DrinkByLetter key={card.idDrink} card={card}/>)}
              </div>
            </div>
          </div>

          {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 p-6 sm:py-12"> */}
            
          {/* </div> */}




        </div>
    </>
  )
}
