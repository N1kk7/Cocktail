import React from 'react'
import { useSelector } from 'react-redux'
import DrinkByLetter from '../components/DrinkByLetter';
import Footer from '../components/FooterBlock';
import { IDrinkByLetter } from '../models/firstLetterModel';

export default function History() {

const historyDrink = useSelector((state: any) => state.cocktail.historyDrinks)


  return (
    <>
      <div className="Latest-view pb-14 mt-28 min-h-inherit">
        <div className="tittle text-center">
          <h2>Latest view</h2>
        </div>
        <div className="cardWrapper flex flex-wrap mt-12">
          {historyDrink?.map((card: IDrinkByLetter) => <DrinkByLetter key={card.idDrink} card={card}/>)}
        </div>
      </div>
      <Footer/>
    </>
    
  )
}
