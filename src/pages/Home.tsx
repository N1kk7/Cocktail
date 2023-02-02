import axios from 'axios';
import React, { useEffect } from 'react'

export default function Home() {


  // const getInfo = () => {
  //   const info = axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  //   console.log(info);
    
  // }

  async function getInfo() {
    
    const response: any = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
    console.log(response);
    
   
        // response.data.map((elem: IFilms) => {
  
        //   if (elem.id < 20) {
            
        //     topFilms.push(elem)
        //   }  
        // })
        // setFilms(topFilms)
        
  }
  
    useEffect(() => {
      getInfo()
    },[])



  return (
    <div className='text-3xl'>Home</div>
  )
}
