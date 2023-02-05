import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';







export default function Ingredient() {

  const [listIngredient, setListIngredient] = useState([])


  const getIngredient = async () => {

    const response: any = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    setListIngredient(response.data.drinks);
    




  }

console.log(listIngredient);






useEffect(() => {
  getIngredient()
  
}, [])



  return (
    // <div>Ingredient</div>

    <>
    {/* <!-- Card List Section --> */}
            <section  className="pb-10 pt-20 px-12">
                {/* <!-- Card Grid --> */}
                <div
                    className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {/* <!-- Card Item --> */}

                                {listIngredient.map((item: any) => <div key={item.idDrink} className='rounded-3xl border-2 border-violet-300 shadow-custom-shadow'>

<div  className="flex justify-between py-6 px-4  w-22cqw h-fit min-h-40cqh flex-col mx-auto ">
            <div className="flex items-center space-x-4 flex-col">
                <img src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Medium.png`} className='shadow-custom-shadow' alt=""/>
                <div className="flex flex-col space-y-1">
                    <span className="font-bold w-max pt-5">{item.strIngredient1}</span>
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



</div> )}
                    

                </div>
            </section>
        </>




  )
}
