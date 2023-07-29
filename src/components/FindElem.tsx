import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrinkByName } from '../redux/cocktailSlice';

export default function FindElem() {
    // const inputEl = useRef(null)

    // let nameRequest:string = '';
    const [inputValue, setValueInput] = useState('');
    const [menuClass, setMenuClass] = useState('');
    const burgerMenuState = useSelector((state:any) => state.theme.burgerMenu)
    const dispatch = useDispatch()

    // const getEpisodes = (name?:any) => {
        
      
    //     async function fetchName(name?:any) {
    //       const response: any = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');

    //       console.log(response)
          console.log(menuClass);
          
      
    //     }
    //   fetchName(name)
    //   }
   

const getBtn = (event: any) => {
    // console.log(event)
    setValueInput(event.target.value)


    // event.key === 'Enter' ? console.log('ok') : nameRequest = nameRequest.concat(event.key); 
//     const value = event.key
  
//   if(value.length === 0){
//     setValueInput(value.trim())
//     // setActiveBtn(false)
//   } else{
//     setValueInput(value);
//     if (value[0] !== ' ') {
//     // setActiveBtn(true)
//     }
//   }

    // if (event.key === 'Enter' && nameRequest.length !== 0) {
    //     console.log('ok')
    //     nameRequest = '';
    //     // setValueInput('');

    // } else if (event.key.length > 1) {
    //     // console.log("value more than 1");
    //     // setValueInput('')
    //     nameRequest = '';
    //     return
    // } else {
    //     nameRequest = nameRequest.concat(event.key)
    //     // setValueInput(nameRequest)


    // }
    // console.log( nameRequest === event.target.value)
    // console.log( inputValue)

    // setValueInput(nameRequest)
    
    // console.log(nameRequest);

}
const getEnter = (event:any) => {
    // console.log(event.target.value);
    if (event.key === 'Enter' && inputValue.length !== 0) {
            // console.log(inputValue)
            dispatch(fetchDrinkByName(inputValue))

            // nameRequest = '';

            setValueInput('');
            // console.log('input was erased')


            // getEpisodes()
        }
}

// const getMenuClass = () => {


// }

useEffect(() => {
    burgerMenuState ? setMenuClass("searchActive") : setMenuClass('');

    // getMenuClass();
}, [burgerMenuState]);

  return (


    <div className="searchBlock rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5  max-w-fit m-0 h-fit my-auto z-10">
        <div className="mx-auto max-w-md flex">

                <form 
                // action="" 
                onSubmit={(event) => event.preventDefault()}
                className="relative mx-auto w-max">
                <input type="search" 
                placeholder='Find drink by name'
                        className="peer cursor-pointer relative z-10 h-8 w-8 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" 
                        value={inputValue}

                onKeyDown={(event:any) => {getEnter(event)}}
                onChange={(event:any) => {getBtn(event)}}

                        
                        />

                

                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
                </svg>
                </form>

        </div>
    </div>







    // <div className="rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit fixed top-28 right-4 z-20">
    //     <div className="mx-auto max-w-md">


    //     <form 
    //     action="search" 
    //     className="relative mx-auto w-max"
    //     // onSubmit={(event) => event.preventDefault()}
    //     >
        
    //         <input 
    //         type="text" 
    //         placeholder='Search drink by name'
    //             className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" 
    //             // onInputCapture={(event) =>  {getDrinkByName(event)}}
    //             onKeyDown={(event: any) => console.log(event.target.value)}
                
                
            
                
                
    //             />

    //         <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500 peer-focus:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //         </svg>
    //     </form>


    //     </div>
    //     {/* <img src="forward.png" alt="" className='hidden absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent active:block'/> */}


    // </div>

  )
}


// function dispatch(arg0: any) {
//     throw new Error('Function not implemented.');
// }

