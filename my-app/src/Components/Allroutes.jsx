import {Route,Routes} from "react-router-dom"
import HomePage from "../Pages/homepage"
import AboutUs from "../Pages/About Us/AboutUs"
export default function  Allroutes(){

    return (
        <Routes>
        <Route path="/"  element={<HomePage></HomePage>} ></Route>
        <Route  path="/AboutUs" element={<AboutUs></AboutUs>} >  </Route>
        </Routes>
    )

}