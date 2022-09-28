import './Navbar.css'
import {SearchIcon} from "@chakra-ui/icons"
import Dropdown from './Dropdown'
import {HamburgerIcon} from "@chakra-ui/icons"
const Navbar=()=>{
    return (
        <div className='container'>
            <div className='menu-icon' >
                <HamburgerIcon style={{fontSize:"30px"}} />
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
        </div>
    )
}
export default Navbar