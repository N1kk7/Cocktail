import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { IDrinkByLetter } from '../models/firstLetterModel'
import { likeActive, likeDisable } from '../redux/themeSlice'

interface drinkProps {
    card : IDrinkByLetter
}

export default function DrinkByLetter({card}: drinkProps) {
    const [like, setLike] = useState(false)
    const stateFavorite = useSelector((state: any) => state.theme.favoriteDrinks);
    const dispatch = useDispatch();

/////////////////////////////////
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
        dispatch(likeDisable(elem.idDrink))
    }



    const stateBtn = (elem: IDrinkByLetter) => {
        stateFavorite.forEach((i:IDrinkByLetter) => {
            if (i.idDrink === card.idDrink) {
                setLike(true);
                return
            }
        })
    };



    useEffect(() => {
        stateBtn(card);
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  return (
        <div className="py-6 m-auto">
            <div className="flex w-40cqw bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/3 bg-cover" style={{backgroundImage: `url(${card.strDrinkThumb})`}}>
                </div> 
                <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl border-b-2 border-black">{card.strDrink}</h1>
                <div className="description overflow-auto h-12cqh">
                    <p className="mt-2 text-gray-600 overflow-hidden">{card.strInstructions}</p>


                </div>
                <div className="flex justify-between mt-2">
                    <div className="rate">
                        <svg className="w-5 h-5 fill-current text-gray-700 inline-block" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                        <svg className="w-5 h-5 fill-current text-gray-700 inline-block" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                        <svg className="w-5 h-5 fill-current text-gray-700 inline-block" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                        <svg className="w-5 h-5 fill-current text-gray-500 inline-block" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                        <svg className="w-5 h-5 fill-current text-gray-500 inline-block" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                    </div>
                    <div className="favoriteBtn">
                        {!like && <button
                            onClick={() => {
                                setLike(true);
                                checkFavorite(card);
                            }}
                            ><img src="/heart.png" alt="heart"  className='w-3cqw'/>
                        </button>}
                        {like &&<button
                            onClick={() => {
                                setLike(false);
                                removeFavorite(card)
                            }}
                            ><img src="/activeHeart.png" alt="heart"  className='w-3cqw'/>
                        </button>}
                    </div>
                    
                </div>
                <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">$220</h1>


                    <Link to={`/Drink/${card.idDrink}`}>
                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        >
                            View More
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
  )
}
