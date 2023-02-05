import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Home from '../pages/Home';
import Cocktail from '../pages/Cocktail';
import Ingredient from '../pages/Ingredient';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Drink from '../pages/Drink';

export default function Header() {
    const [theme, setTheme] = useState(true)



  return (
    <Router>
        <div className='background absolute'>
            <div className="header border-b-2 w-full fixed">
                
                <div className="button-group flex justify-between px-5 ">
                <div className="menuBtn ">
                    <div className="burger relative top-4 cursor-pointer">
                        <img className='w-4cqw border-2 border-black rounded-md p-1' src="/burger.png" alt="" />
                    </div>
                </div>
                <div className="menu">
                <ul className='list-none font-Raleway tracking-widest text-2cqw text-center py-5'>
                    <li className='inline-block px-5'><Link to={'/'}> Home </Link></li>
                    <li className='inline-block px-5'><Link to={'/Cocktail'}> Cocktail </Link></li>
                    <li className='inline-block px-5'><Link to={'/Ingredient'}> Ingredient </Link></li>
                    <li className='inline-block px-5'><Link to={'/About'}> About </Link></li>
                    <li className='inline-block px-5'><Link to={'/Contact'}> Contacts </Link></li>
                </ul>
                </div>
                <div className="themeBtns">
                    {theme && <div className="nightBtn relative top-4 cursor-pointer" onClick={() => setTheme(false)}>
                        <img className='w-4cqw border-2 border-black rounded-md p-1' src="/moon.png" alt="" />
                    </div>}
                    {!theme &&<div className="dayBtn relative top-4 cursor-pointer" onClick={() => setTheme(true)}>
                        <img className='w-4cqw border-2 border-black rounded-md p-1' src="/sun.png" alt="" />
                    </div>}
                </div>
            </div>
            </div>
            
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Cocktail" element={<Cocktail />}/>
            <Route path="/Ingredient" element={<Ingredient />}/>
            <Route path="/Drink/:id" element={<Drink />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>

            
        </Routes>
    </div>
    </Router>
  )
}
