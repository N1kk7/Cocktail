import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { eraseData, fetchByLetter } from '../redux/cocktailSlice';
import { btnActive } from '../redux/themeSlice';

export default function FirstsLetter() {
    const drinkByLetter = useSelector((state: any) => state.cocktail.drinkByLetter);
    const dispatch = useDispatch<any>();

    const checkData = (letter: string) => {

        if (drinkByLetter) {
            dispatch(fetchByLetter(letter));
            dispatch(btnActive("FirstLetter"));
        } else {
            eraseData("FirstLetter");
            dispatch(fetchByLetter(letter));
            dispatch(btnActive("FirstLetter"));
        }

    }


  return (
    <div className="alphabet text-center w-70cqw mx-auto">
        <div className="alhabet-tittle font-frederica space-x-24 text-2xl pt-5">
        <button>Find Name Of Drink By First Letter</button>
        </div>
        <button className='letter m-2cqw inline-block max-w-fit ' onClick={() => checkData("A")}>A</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('B')}>B</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('C')}>C</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('D')}>D</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('E')}>E</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('F')}>F</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('G')}>G</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('H')}>H</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('I')}>I</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('J')}>J</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('K')}>K</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('L')}>L</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('M')}>M</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('N')}>N</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('O')}>O</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('P')}>P</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('Q')}>Q</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('R')}>R</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('S')}>S</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('T')}>T</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('U')}>U</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('V')}>V</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('W')}>W</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('X')}>X</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('Y')}>Y</button>
        <button className='letter m-2cqw inline-block max-w-fit' onClick={() => checkData('Z')}>Z</button>


  </div>
  )
}
