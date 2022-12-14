import React from "react";
import NavComp from "./Nav";

import logo from "../logo.svg"
import {HiOutlineShoppingCart } from "react-icons/hi"
import {AiOutlineGlobal } from "react-icons/ai"
import Udemylogo from "../logo-udemy.svg"

const Header = () => {
    return(
        <div className="Header">
         
          <img src={Udemylogo} alt="" height={80} width={80} className="udemy-logo"></img>
          
    
        <NavComp />
        <div class="boxes">
          <a href="" class="nav-text two">Udemy Business</a>
          <a href="" class="nav-text three">Udemy on Tech</a>
         <HiOutlineShoppingCart 
         />
        <button class="signin">Log in</button>
        <button class="signin dark">Sign up</button>
        <button class="signin box"><AiOutlineGlobal /></button>
        
        </div>
        </div>
    )
}
export default Header