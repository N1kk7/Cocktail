// import React, { useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
// import { dayTheme, nightTheme } from '../redux/reducers';
import { dayTheme, nightTheme } from "../redux/themeSlice";
import FindElem from "./FindElem";

export default function Header() {
    // const [theme, setTheme] = useState(true)
    const theme = useSelector((state:any) => state.theme.theme);
    const dispatch = useDispatch();



  return (
    <Router>
        {theme && <div className='backgroundDay absolute'>
            <div className="headerDay border-b-2 w-full fixed">
                
                <div className="button-group flex justify-between px-5 ">
                    <div className="menuBtn ">
                        <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4">
                                    <div className="mx-auto max-w-md">
                                        <img className='w-2cqw border-2 border-white rounded-md' src="/burger.png" alt="" />
                                    </div>
                                </div>
                    </div>
                <div className="menu">
                <ul className='list-none font-Raleway tracking-widest text-2cqw text-center py-5'>
                    <li className='inline-block px-5'><Link to={'/'}> Home </Link></li>
                    <li className='inline-block px-5'><Link to={'/Cocktail'}> Cocktail </Link></li>
                    <li className='inline-block px-5'><Link to={'/Ingredient'}> Ingredient </Link></li>
                    <li className='inline-block px-5'><Link to={'/Favorite'}> Favorite </Link></li>
                    <li className='inline-block px-5'><Link to={'/Latest'}> Latest view </Link></li>
                </ul>
                </div>
                <div className="themeBtns">
                    {theme && <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4"
                        onClick={() => dispatch(nightTheme())}>
                                <div className="mx-auto max-w-md">
                                    <img className='w-2cqw border-2 border-white rounded-md' src="/moon.png" alt="" />
                                </div>
                            </div>}
                        {!theme && <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4"
                        onClick={() => dispatch(dayTheme())}>
                                <div className="mx-auto max-w-md">
                                    <img className='w-2cqw border-2 border-white rounded-md' src="/sun.png" alt="" />
                                </div>
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
        <FindElem/>
    </div>}
    {!theme && <div className='backgroundNight absolute'>
            <div className="headerNight border-b-2 w-full fixed">
                
                <div className="button-group flex justify-between px-5 ">
                    <div className="menuBtn ">
                        <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4">
                            <div className="mx-auto max-w-md">
                                <img className='w-2cqw border-2 border-white rounded-md' src="/burger.png" alt="" />
                            </div>
                        </div>
                    </div>
                <div className="menu">
                <ul className='list-none font-Raleway tracking-widest text-2cqw text-center py-5'>
                    <li className='inline-block px-5'><Link to={'/'}> Home </Link></li>
                    <li className='inline-block px-5'><Link to={'/Cocktail'}> Cocktail </Link></li>
                    <li className='inline-block px-5'><Link to={'/Ingredient'}> Ingredient </Link></li>
                    <li className='inline-block px-5'><Link to={'/Favorite'}> Favorite </Link></li>
                    <li className='inline-block px-5'><Link to={'/Latest'}> Latest view </Link></li>
                </ul>
                </div>
                <div className="themeBtns">
                    {theme && <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4"
                    onClick={() => dispatch(nightTheme())}>
                            <div className="mx-auto max-w-md">
                                <img className='w-2cqw border-2 border-white rounded-md' src="/moon.png" alt="" />
                            </div>
                        </div>}
                    {!theme && <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4"
                    onClick={() => dispatch(dayTheme())}>
                            <div className="mx-auto max-w-md">
                                <img className='w-2cqw border-2 border-white rounded-md' src="/sun.png" alt="" />
                            </div>
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
        <FindElem/>
    </div>}
    </Router>
  )
}
