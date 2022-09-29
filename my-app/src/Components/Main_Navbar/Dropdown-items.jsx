import "./Dropdown.css"
import {ChevronRightIcon} from "@chakra-ui/icons"
let data=[
    {title:"Makeup",data:[
    {title:"Bridal Makeup"},
    {title:"Celebrity Makeup"},
    {title:"Eye Make up"},
    {title:"Face Makeup"},
    {title:"Lip Make up"},
    {title:"Makeup ideas"},
    {title:"Mehandi Designs"},
    {title:"Nail Art"}
    ]},
    {title:"Hair Care",data:[{title:"Basic Hair Care"},
    {title:"Dandruff"},
    {title:"Dry Hair Care"},
    {title:"Hair Care Ideas"},
    {title:"Hair Care Solutions"},
    {title:"Hair Colour"},
    {title:"Hair Fall"},
    {title:"Hair Growth"}]},
    {title:"Skin Care",data:[{title:"Acne"},
    {title:"Anti Ageing"},
    {title:"Beauty Secrets"},
    {title:"Dry Skin"},
    {title:"Face Care Tips"},
    {title:"Face Packs and Masks"},
    {title:"Glowing skin"},
    {title:"Homemade Tips"}]},
    {title:"Hairstyles",data:[{title:"Bob Hairstyles"},
    {title:"Braid hairstyle"},
    {title:"Bridal Hairstyle"},
    {title:"Bun Hairstyle"},
    {title:"Celebrity Hairstyle"},
    {title:"Curly Hairstyle"},
    {title:"Different Hairstyle"},
    {title:"Hairstyle Trends"}]},
    {title:"Health & Wellness",data:[{title:"Fitness"},
    {title:"Health devices"},
    {title:"Ayurveda"},
    {title:"Diet Tips"},
    {title:"Health Conditions and Deceases"},
    {title:"Healthy Food"},
    {title:"Home Remedies"},
    {title:"Nutrition"}]},
    {title:"News",data:[{title:"Collaboration"},
    {title:"Women Empoerment"},
    {title:"Relationships"},
    {title:"Celebrity News"},
    {title:"Fashion"},
    {title:"Inspiration"},
    {title:"Tops 10's"},
    {title:"Trends"}]},
    {title:"Tools"},
    {title:"Products"},
    {title:"About Us",data:[{title:"Our Team"},
    {title:"Editorial Policy"},
    {title:"Medical Review Board"},
    {title:"Expert Panel"},
    {title:"Contact Us"},]},
]
export default function Items(){
console.log(data.data)
return (
    <div id="Dropdown-div-item-burger" >
   <div className="burger-list" >
    {data.map((item)=>(
        <div >{item.title}<ChevronRightIcon style={{fontSize:"20px"}} />
        </div>
    ))}
   </div>
    </div>
)


}

}


