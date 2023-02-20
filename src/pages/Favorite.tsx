import React from 'react'
import { useSelector } from 'react-redux'
import DrinkByLetter from '../components/DrinkByLetter'
import Footer from '../components/FooterBlock'
import { IDrinkByLetter } from '../models/firstLetterModel'









export default function About() {
  const favorite = useSelector((state: any) => state.theme.favoriteDrinks)












  return (
    <>
      <div className="Favorite pb-14 mt-28 min-h-inherit">
        <div className="tittle text-center">
          <h2>Favorite Drinks</h2>
        </div>
        <div className="cardWrapper flex flex-wrap mt-12">
          {favorite?.map((card: IDrinkByLetter) => <DrinkByLetter key={card.idDrink} card={card}/>)}
        </div>
      </div>
      <Footer/>
    </>
  )
}
