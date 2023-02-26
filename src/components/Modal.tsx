import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IDrinkByLetter } from '../models/firstLetterModel';
import { closeModal } from '../redux/cocktailSlice';
// import { checkHistory } from '../constants/constants';

export default function Modal() {
  const stateDrinkName = useSelector((state: any) => state.cocktail.drinkByName);
//   const stateHistory = useSelector((state: any) => state.cocktail.historyDrinks);

  const dispatch = useDispatch<any>();


//   const checkHistory = (elem:IDrinkByLetter) => {
//     let match: boolean = false;
//     if (stateHistory.length) {
//         stateHistory.forEach((i: IDrinkByLetter) => {
//             if (i.idDrink === elem.idDrink) {
//                 match = true
//             }
//         })
//         if (!match) {
//             dispatch(addHistory(elem));
//         }
//     } else {
//         dispatch(addHistory(elem));
//     }
//   }

  return (
    <>
        <div className="modalBg  w-100cqw h-100cqh top-0 z-30 fixed backdrop-blur-md">
                    <div className="closeBtn ">
                        <div className="rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 max-w-fit top-4 cursor-pointer absolute right-6"
                        onClick={() => dispatch(closeModal())}
                        >
                                    <div className="mx-auto max-w-md">
                                        <img className='w-2cqw border-2 border-white rounded-md' src="/close.png" alt="" />
                                    </div>
                                </div>
                    </div>
            <div className="modal w-65cqw border-2 rounded-3xl h-70cqh overflow-auto mx-auto relative top-36 bg-whiteBlur">
                <div className="modalItem overflow-hidden">
                    <div className="topBg w-65cqw h-5cqh fixed backdrop-blur-sm rounded-t-3xl"></div>
                    <div className="itemsWrapper pt-10">
                    {stateDrinkName.map((elem: IDrinkByLetter) => <div className="py-6 m-auto" key={elem.idDrink}>
                    <div className="flex w-40cqw bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                        <div className="w-1/3 bg-cover" style={{backgroundImage: `url(${elem.strDrinkThumb})`}}>
                        </div> 
                        <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl border-b-2 border-black">{elem.strDrink}</h1>
                        <div className="description overflow-auto h-12cqh">
                            <p className="mt-2 text-gray-600 overflow-hidden">{elem.strInstructions}</p>


                        </div>
                        <div className="flex item-center mt-2">
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                            </svg>
                        </div>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">$220</h1>


                            <Link to={`/Drink/${elem.idDrink}`}>
                                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                                // onClick={() => dispatch(addHistory(elem))}
                                // onClick={() => checkHistory(elem)}

                                >
                                    View More
                                </button>
                        
                            </Link>



                                
                        </div>
                        </div>
                    </div>
                </div>)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
