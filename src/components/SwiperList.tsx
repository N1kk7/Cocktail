import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { ICocktails } from '../models/cocktailsModel';



interface cocktailsProps {
  cocktails: ICocktails
}

export default function swiperList ({cocktails}: cocktailsProps ) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useSelector((state:any) => state.theme.theme)





console.log(theme)

  return (
        <>
            {theme && <div  className="flex justify-between py-6 px-4  w-22cqw h-fit min-h-40cqh flex-col mx-auto ">
                <div className="flex items-center space-x-4 flex-col">
                    <img src={cocktails.strDrinkThumb} className='shadow-custom-shadow' alt=""/>
                    <div className="flex flex-col space-y-1">
                        <span className="font-bold w-max pt-5 font-frederica">{cocktails.strDrink}</span>
                    </div>
                </div>
              <img className='absolute bottom-0 left-0 -z-10 h-webkit rounded-3xl opacity-30' src="bg1.png" alt="" />

              <Link to={`/cocktail/build/Drink/${cocktails.idDrink}`}>
                <div className="flex flex-col justify-center items-center">
                            <button
                                className="relative text-center h-4cqh w-11cqw transition-all duration-500
                                    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r from-pink-500 via-yellow-400 to-emerald-300 before:transition-all
                                    before:duration-300 before:opacity-50 before:hover:opacity-0 before:hover:scale-50
                                    after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                                    after:border after:border-sky-600 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
                                    // onClick={() => checkHistory(cocktails)}
                            >
                                <span className="relative text-black uppercase italic font-frederica font-thin">Read more</span>
                            </button>
                  </div>
              </Link>
            </div>}


            {!theme && <div  className="flex justify-between py-6 px-4  w-22cqw h-fit min-h-40cqh flex-col mx-auto ">
                <div className="flex items-center space-x-4 flex-col">
                    <img src={cocktails.strDrinkThumb} className='shadow-custom-shadow' alt=""/>
                    <div className="flex flex-col space-y-1">
                        <span className="font-bold w-max pt-5 font-frederica text-bisque">{cocktails.strDrink}</span>
                    </div>
                </div>
              {/* <img className='absolute bottom-0 left-0 -z-10 h-webkit rounded-3xl opacity-30' src="bg1.png" alt="" /> */}

              <Link to={`/cocktail/build/Drink/${cocktails.idDrink}`}>
                <div className="flex flex-col justify-center items-center">
                            <button
                                className="relative text-center h-4cqh w-11cqw transition-all duration-500
                                    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r from-pink-500 via-yellow-400 to-emerald-300 before:transition-all
                                    before:duration-300 before:opacity-50 before:hover:opacity-0 before:hover:scale-50
                                    after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                                    after:border after:border-sky-600 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
                                    // onClick={() => checkHistory(cocktails)}
                            >
                                <span className="relative text-black uppercase italic font-frederica font-thin">Read more</span>
                            </button>
                  </div>
              </Link>
            </div>}
          </>
    
  )
}
