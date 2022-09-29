import './Navbar.css'
import {SearchIcon} from "@chakra-ui/icons"
import Dropdown from './Dropdown'
import {HamburgerIcon} from "@chakra-ui/icons";

import { useState,useEffect } from 'react';

import { useState } from 'react';


import Items from './Dropdown-items';

const Navbar=()=>{
    const [state,setState]=useState(false)

    const [sticky,setSticky]=useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setSticky(window.scrollY > 2);
          console.log(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      });

    return (
        <div className={sticky? "container sticky":"container"}>
            <div className='menu-icon' >
                <HamburgerIcon style={{fontSize:"30px",color:"#ff3755"}} onClick={()=>setState(!state)} />
                </div>
         <div id="nav-div-first" >
            <img id="logo" src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt="web-logo" />
            <div id="search-function" >
            <input type="text" id="search-input" placeholder='Search'/>
            <button id="search-btn" ><SearchIcon/></button> 
            </div>
         </div>
         <div id="list-items" >
          <Dropdown/>
         </div>
         {state && <Items className="burgerr" />}
        </div>
    )
}
export default Navbar