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
import Favorite from '../pages/Favorite';
import Latest from '../pages/Latest';
import Drink from '../pages/Drink';
import { useDispatch, useSelector } from 'react-redux';
// import { dayTheme, nightTheme } from '../redux/reducers';
import { dayTheme, nightTheme, burgerBtn } from "../redux/themeSlice";
import FindElem from "./FindElem";
import moon from '../img/moon.png'
import sun from '../img/sun.png'
import burger from '../img/burger.png'
import closeBtn from '../img/close.png'
import { useState } from "react";

export default function Header() {
    // const [theme, setTheme] = useState(true)
    const [mobileMenu, setMobileMenu] = useState('');
    const theme = useSelector((state:any) => state.theme.theme);
    const burgerMenuState = useSelector((state:any) => state.theme.burgerMenu)
    const dispatch = useDispatch();



    const burgerMenu = ():any => {
        dispatch(burgerBtn())
        burgerMenuState ? setMobileMenu('menuActive') : setMobileMenu('');
        // console.log("click");



    }

    



  return (
    <Router>
        {theme && <div className='backgroundDay absolute'>
            <div className="headerDay border-b-2 w-full fixed">
                
                <div className="button-group flex justify-between px-5 ">
                    <div className="menuBtn hidden">
                        <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4" onClick={() => burgerMenu()}
                        >
                                    <div className="mx-auto max-w-md">
                                        <img className='burgerBtn w-2cqw border-2 border-white rounded-md' src={burger} alt="" />
                                    </div>
                                </div>
                    </div>
                <div className={`menu ${mobileMenu}`}>
                    <div className="mobileMenuClose hidden">
                        <div className="closeMenuBtn">
                            <div className="buttonClose relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4" onClick={() => burgerMenu()}
                            >
                                        <div className="mx-auto max-w-md">
                                            <img className='burgerBtn w-2cqw border-2 border-white rounded-md' src={closeBtn} alt="" />
                                        </div>
                                    </div>
                        </div>

                    </div>
                <ul className='list-none font-raleway tracking-widest text-2cqw text-center py-5 text-indigo-900'>
                    <li className='inline-block px-5'><Link to={'cocktail/build/'}> Home </Link></li>
                    <li className='inline-block px-5'><Link to={'cocktail/build/Cocktail'}> Cocktail </Link></li>
                    <li className='inline-block px-5'><Link to={'cocktail/build/Ingredient'}> Ingredient </Link></li>
                    <li className='inline-block px-5'><Link to={'cocktail/build/Favorite'}> Favorite </Link></li>
                    <li className='inline-block px-5'><Link to={'cocktail/build/Latest'}> Latest </Link></li>
                </ul>
                </div>
                <div className="themeBtns">
                    {theme && <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4"
                        onClick={() => dispatch(nightTheme())}>
                                <div className="mx-auto max-w-md">
                                    <img className='themeBtn w-2cqw border-2 border-white rounded-md' src={moon} alt="" />
                                </div>
                            </div>}
                        {!theme && <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4"
                        onClick={() => dispatch(dayTheme())}>
                                <div className="mx-auto max-w-md">
                                    <img className='themeBtn w-2cqw border-2 border-white rounded-md' src={sun} alt="" />
                                </div>
                            </div>}
                </div>
            </div>
            </div>
            
        <Routes>
            <Route path="cocktail/build/" element={<Home />}/>
            <Route path="cocktail/build/Cocktail" element={<Cocktail />}/>
            <Route path="cocktail/build/Ingredient" element={<Ingredient />}/>
            <Route path="cocktail/build/Drink/:id" element={<Drink />}/>
            <Route path="cocktail/build/Favorite" element={<Favorite />}/>
            <Route path="cocktail/build/Latest" element={<Latest />}/>

            
        </Routes>
        <FindElem/>
    </div>}
    {!theme && <div className='backgroundNight absolute'>
            <div className="headerNight border-b-2 w-full fixed">
                
                <div className="button-group flex justify-between px-5 ">
                    <div className="menuBtn ">
                        <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4" onClick={() => burgerMenu()}>
                            <div className="mx-auto max-w-md">
                                <img className='burgerBtn w-2cqw border-2 border-white rounded-md' src={burger} alt="" />
                            </div>
                        </div>
                    </div>
                <div className={`menu ${mobileMenu}`}>
                    <div className="mobileMenuClose hidden">
                            <div className="closeMenuBtn">
                                <div className="buttonClose relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4" onClick={() => burgerMenu()}
                                >
                                            <div className="mx-auto max-w-md">
                                                <img className='burgerBtn w-2cqw border-2 border-white rounded-md' src={closeBtn} alt="" />
                                            </div>
                                        </div>
                            </div>

                        </div>
                    <ul className='list-none font-raleway tracking-widest text-2cqw text-center py-5'>
                        <li className='inline-block px-5'><Link to={'cocktail/build/'}> Home </Link></li>
                        <li className='inline-block px-5'><Link to={'cocktail/build/Cocktail'}> Cocktail </Link></li>
                        <li className='inline-block px-5'><Link to={'cocktail/build/Ingredient'}> Ingredient </Link></li>
                        <li className='inline-block px-5'><Link to={'cocktail/build/Favorite'}> Favorite </Link></li>
                        <li className='inline-block px-5'><Link to={'cocktail/build/Latest'}> Latest </Link></li>
                    </ul>
                </div>
                <div className="themeBtns">
                    {theme && <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4 "
                    onClick={() => dispatch(nightTheme())}>
                            <div className="mx-auto max-w-md">
                                {/* <img className='w-2cqw border-2 border-white rounded-md' src="moon.png" alt="" /> */}
                                <img className='themeBtn w-2cqw border-2 border-white rounded-md' src={moon} alt="" />

                            </div>
                        </div>}
                    {!theme && <div className="relative rounded-2xl bg-white px-2 py-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-fit top-4"
                    onClick={() => dispatch(dayTheme())}>
                            <div className="mx-auto max-w-md">
                                {/* <img className='w-2cqw border-2 border-white rounded-md' src="sun.png" alt="" /> */}
                                <img className='themeBtn w-2cqw border-2 border-white rounded-md' src={sun} alt="" />

                            </div>
                        </div>}
                </div>
            </div>
            </div>
            
        <Routes>
            <Route path="cocktail/build//" element={<Home />}/>
            <Route path="cocktail/build//Cocktail" element={<Cocktail />}/>
            <Route path="cocktail/build//Ingredient" element={<Ingredient />}/>
            <Route path="cocktail/build//Drink/:id" element={<Drink />}/>
            <Route path="cocktail/build//Favorite" element={<Favorite />}/>
            <Route path="cocktail/build//Latest" element={<Latest />}/>

            
        </Routes>
        <FindElem/>
    </div>}
    </Router>
  )
}
