import "./Dropdown.css"
import {Link} from "react-router-dom"
import Dropdown_div from "./Dropdown-div"
export default function  Dropdown(){

  let data=[
    {title:"Bridal Makeup",
    data:[
      {image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/10/Look-Perfect-For-Your-Special-Day-Bridal-Makeup-Tips-For-Dry-Skin-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
      {image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/10/Look-Perfect-For-Your-Special-Day-Bridal-Makeup-Tips-For-Dry-Skin-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
      {image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/10/Look-Perfect-For-Your-Special-Day-Bridal-Makeup-Tips-For-Dry-Skin-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
      {image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/10/Look-Perfect-For-Your-Special-Day-Bridal-Makeup-Tips-For-Dry-Skin-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
    ]
  },{title:"Celebrity Makeup",
  data:[
    {image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/06/The-Ultimate-Blake-Lively-Makeup-Guide-1-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
    {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
    {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
    {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  ]
},{title:"Eye Make up",
data:[
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/02/20-Amazing-Eye-Makeup-Pictures-To-Inspire-You-2-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
]
},{title:"Face Makeup",
data:[
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/11/3900-Top-10-Cheek-Makeup-Tips-And-Tricks-SS-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
]
},{title:"Lip Makeup",
data:[
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Wear-Red-Lipstick-3-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
]
},{title:"Makeup Ideas",
data:[
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/07/717-280674155-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
]
},{title:"Mehandi Design",
data:[
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/12/1221_Top-10-Ways-To-Entertain-Your-Guests-During-Mehndi-Ceremony_102231016.jpg_1-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
]
},{title:"Nail Art",
data:[
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/03/1425-60-Trendy-Nail-Art-Designs-For-Short-Nails-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
  {image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",title:"Look Perfect For Your Special Day-Bridal Makeup Tips For D"},
]
}]

    return (
        <div>
          <div id="list-items">
            <ul id="list-item" >
                <li>MAKEUP
                <Dropdown_div data={data} />
                
                </li>
                <span class="divider">|</span>
                <li>HAIR CARE
                <Dropdown_div data={data} />
                </li>
                <span class="divider">|</span>
                <li>SKIN CARE
                <Dropdown_div data={data} />
                </li>
                <span class="divider">|</span>
                <li>HAIRSTYLES
                <Dropdown_div data={data} />
                </li>
                <span class="divider">|</span>
                <li>HEALTH & WELLNESS
                <Dropdown_div data={data} />
                </li>
                <span class="divider">|</span>
                <li>NEWS</li>
                <span class="divider">|</span>
                <li>TOOLS</li>
                <span class="divider">|</span>
                <li>PRODUCTS</li>
                <span class="divider">|</span>
                < li>ABOUT US</li>
            </ul>
          </div>
          
          <div></div>
        </div>
    )

}


