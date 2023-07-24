import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IDrinkByLetter } from '../models/firstLetterModel';
import { addHistory } from '../redux/cocktailSlice';
import {likeActive, likeDisable, } from '../redux/themeSlice';
// import { useCookies } from 'react-cookie';
import heart from '../img/heart.png'
import activeHeart from '../img/activeHeart.png'

export default function Drink() {
    const params = useParams();
    const [drinkImg, setDrinkImg] = useState('');
    const [titleDrink, setTitleDrink] = useState('');
    const [strAlcoholic, setStrAlcoholic] = useState('');
    const [infoEng, setInfoEng] = useState('');
    const [likeBtn, setLikeBtn] = useState(false);
    // const [id, setId] = useState<string>('');

    const [ingrImg, setIngrImg] = useState([]);
    const [drink, setDrink] = useState<any>([]);
    const stateHistory = useSelector((state: any) => state.cocktail.historyDrinks);
    // const stateLikeBtn = useSelector((state: any) => state.theme.stateLikeBtn);
    const stateFavorite = useSelector((state: any) => state.theme.favoriteDrinks);
    const theme = useSelector((state: any) => state.theme.theme);

    // const stateDetail = useSelector((state: any) => state.theme.detailDrink);


    // const [cookies, setCookie] = useCookies(['drink']);
    const dispatch = useDispatch<any>();

    let drinkElem:any;

    const checkFavorite = (elem:IDrinkByLetter) => {
      let match: boolean = false;
      if (stateFavorite.length) {
          stateFavorite.forEach((i: IDrinkByLetter) => {
            // console.log(i.idDrink)
              if (i.idDrink === elem.idDrink) {
                  match = true;
              }
          })
          if (!match) {
              dispatch(likeActive(elem));
          }
      } else {
          dispatch(likeActive(elem));
      }
    }

    const removeFavorite = (elem:IDrinkByLetter) => {
        // console.log(elem)
        dispatch(likeDisable(elem.idDrink))
    }


    const checkHistory = (elem:IDrinkByLetter) => {
        // console.log(elem)
        let match: boolean = false;

      if (stateHistory.length) {
          stateHistory.forEach((i: IDrinkByLetter) => {

              if (i.idDrink === elem.idDrink) {
                  match = true
              }
          })
          if (!match) {
              dispatch(addHistory(elem));
          }
      } else {
          dispatch(addHistory(elem));
      }
    }


    const stateBtn = (elem: IDrinkByLetter) => {
        stateFavorite.forEach((i:IDrinkByLetter) => {
            if (i.idDrink === elem.idDrink) {
                setLikeBtn(true);
                return
            }
        })
    };

    const getDrink = async () => {

        
        const response: any = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`);
        // setDrinkElem(response.data.drinks));
        // dispatch(getDetailDrink(response.data.drinks));
            // drinkElem = response.data.drinks;


        response.data.drinks.forEach((drink: any) => {
            drinkElem = drink;
            // console.log(drink)
            // setDrinkElem(drink)
            // setId(drink.idDrink)
            setDrinkImg(drink.strDrinkThumb);
            setTitleDrink(drink.strDrink);
            setStrAlcoholic(drink.strAlcoholic);
            setInfoEng(drink.strInstructions)
            setDrink(drink)

            // setInfoDe(drink.strInstructionsDE)
            // setInfoIt(drink.strInstructionsIT)


            const  ingredient = [
                drink.strIngredient1,
                drink.strIngredient2,
                drink.strIngredient3,
                drink.strIngredient4,
                drink.strIngredient5,
                drink.strIngredient6,
                drink.strIngredient7,
                drink.strIngredient8,
                drink.strIngredient9,
                drink.strIngredient10,
                drink.strIngredient11,
                drink.strIngredient12,
                drink.strIngredient13,
                drink.strIngredient14,
                drink.strIngredient15
            ];
            let findIngredient: any = [];

            ingredient.forEach((elem:any) => {
                if(elem) {
                    findIngredient.push(elem);
                } 
            

        })
            setIngrImg(findIngredient)

        });
        // console.log(drinkElem)
        checkHistory(drinkElem);    
        stateBtn(drinkElem);

        // checkHistory(drink);

    }



    // console.log(drinkElem)

    // const addToCookies = (drink:IDrinkByLetter) => {
    //     // console.log(drink)
    //     // console.log(drink.idDrink.toString())
    //     setCookie('drink', drink.idDrink.toString(), {path: '/'})
    // }
    // const removeCookies = (drink:IDrinkByLetter) => {
    //     // console.log(drink)
    //     // console.log(drink.idDrink.toString())
    //     setCookie('drink', drink.idDrink.toString())
    // }


useEffect(() => {
  getDrink();
  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <>
        {theme && <div className="bg-gradient-to-b from-pink-100 to-purple-200 h-auto min-h-100cqh">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
            <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
                <h2 className="text-2xl text-pink-900 font-bold md:text-4xl font-frederica pt-8">Information of drink prepare</h2>
            </div>
            <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">

                <div className="relative group md:w-6/12 lg:w-7/12">
                    <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>
                        <div className="relative  md:rounded-r-2xl">
                        </div>
                        <div className="ingredientWWrap text-start py-24 px-10">
                            { ingrImg.map((elem: any) => <div className='card inline-block px-5 py-1 align-top font-tangerine text-4xl' key={elem}><img className='ingredientImg relative z-20 flex hover:transition hover:duration-500 hover:scale-110' src={`https://www.thecocktaildb.com/images/ingredients/${elem}-Small.png`} alt=''></img>
                            <span className='relative block text-center max-w-min mx-auto pt-5'>{elem}</span>
                            </div>)}
                        </div>
                    </div> 
                <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                    <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                    <div className="relative p-6 space-y-6 lg:p-8">

                        <div className="mainImg">
                            <img src={drinkImg} alt="" />
                        </div>
                        <div className="titleDrink">
                            <h2 className='font-frederica text-4xl text-center'>{titleDrink}</h2>
                        </div>


                        <ul className="w-max space-y-4 py-6 m-auto text-gray-600 max-w-fit">
                            <li className="space-x-2">
                                <span className="text-purple-500 font-semibold">Alc;</span>
                                <span>{strAlcoholic}</span>
                            </li>
                            <li className="space-x-2 ">
                                <span className="text-purple-500 font-semibold">Eng;</span>
                                <span>{infoEng}</span>
                            </li>
                        
                            {!likeBtn && <li className="space-x-2 text-end">
                                <button
                                onClick={() => {
                                    setLikeBtn(true)
                                    checkFavorite(drink);
                                }}
                                // onClick={() => {dispatch(likeActive()); addToCookies(drinkElem)}}

                                ><img src={heart} alt="heart"  className='w-3cqw'/></button>
                            </li>}
                            {likeBtn && <li className="space-x-2 text-end">
                                <button
                                onClick={() => {
                                    setLikeBtn(false)
                                    removeFavorite(drink)
                                    // dispatch(likeDisable())
                                }}
                                // onClick={() => {dispatch(likeDisable()); removeCookies(drinkElem)}}

                                ><img src={activeHeart} alt="heart"  className='w-3cqw'/></button>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>}
        {!theme && <div className="">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
            <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
                <h2 className="text-2xl text-bisque font-frederica pt-8 md:text-4xl">Information of drink prepare</h2>
            </div>
            <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">

                <div className="relative group md:w-6/12 lg:w-7/12">
                    <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl border-2 border-stone-500 shadow-lg transition duration-500 group-hover:scale-105 "></div>
                        <div className="relative  md:rounded-r-2xl">
                        </div>
                        <div className="ingredientWWrap text-start py-24 px-10">
                            { ingrImg.map((elem: any) => <div className='card inline-block px-5 py-1 align-top' key={elem}><img className='ingredientImg relative z-20 flex hover:transition hover:duration-500 hover:scale-110' src={`https://www.thecocktaildb.com/images/ingredients/${elem}-Small.png`} alt=''></img>
                            <span className='relative block text-center max-w-min mx-auto pt-5 font-tangerine text-4xl text-bisque'>{elem}</span>
                            </div>)}
                        </div>
                    </div> 
                <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12 bg-customDark">
                    <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl border-2 border-stone-500 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                    <div className="relative p-6 space-y-6 lg:p-8">

                        <div className="mainImg">
                            <img src={drinkImg} alt="" />
                        </div>
                        <div className="titleDrink">
                            <h2 className='font-frederica text-4xl text-center text-bisque'>{titleDrink}</h2>
                        </div>


                        <ul className="w-max space-y-4 py-6 m-auto text-gray-600 max-w-fit">
                            <li className="space-x-2">
                                <span className="text-purple-500 font-semibold">Alc;</span>
                                <span>{strAlcoholic}</span>
                            </li>
                            <li className="space-x-2 ">
                                <span className="text-purple-500 font-semibold">Eng;</span>
                                <span>{infoEng}</span>
                            </li>
                        
                            {!likeBtn && <li className="space-x-2 text-end">
                                <button className='bg-stone-400 rounded-xl'
                                onClick={() => {
                                    setLikeBtn(true)
                                    checkFavorite(drink);
                                }}
                                // onClick={() => {dispatch(likeActive()); addToCookies(drinkElem)}}

                                ><img src={heart} alt="heart"  className='w-3cqw'/></button>
                            </li>}
                            {likeBtn && <li className="space-x-2 text-end">
                                <button
                                onClick={() => {
                                    setLikeBtn(false)
                                    removeFavorite(drink)
                                    // dispatch(likeDisable())
                                }}
                                // onClick={() => {dispatch(likeDisable()); removeCookies(drinkElem)}}

                                ><img src={activeHeart} alt="heart"  className='w-3cqw'/></button>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>}
    </>
    
  )
}

