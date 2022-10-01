import {HamburgerIcon} from "@chakra-ui/icons";
import "./AboutUs.css"
import {useState,useEffect} from "react"
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Footer/Copyright";
export default function AboutUs(){
    const [sticky,setSticky]=useState(false);
    const [head1,setHead1]=useState(false)
    const [head2,setHead2]=useState(false)
    const [head3,setHead3]=useState(false)
    const [head4,setHead4]=useState(false)
    const [head5,setHead5]=useState(false)
    const [head6,setHead6]=useState(false)
    useEffect(()=>{
        const  handleScroll=()=>{
            setSticky(window.scrollY>2)
            setHead1(window.scrollY>5 && window.scrollY<300)
            setHead2(window.scrollY>300 && window.scrollY<600)
            setHead3(window.scrollY>600 && window.scrollY<850)
            setHead4(window.scrollY>850 && window.scrollY<1000)
            setHead5(window.scrollY>1000 && window.scrollY<1300)
            setHead6(window.scrollY>1300 )
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

return (
    <div >
    <div className={sticky? "navbar sticky":"navbar"} >
        <div><button><HamburgerIcon/></button></div>
        <div> <img id="logo" src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt="web-logo" /></div>
          
    </div>
<div className="data-list" >
           <div className="data-list-item" >
            <h3 className={head1? "heading1 head1":"heading1"} >About us</h3>
            <h3 className={head2? "heading2 head2":"heading2"}>Our Review Board</h3>
            <h3 className={head3? "heading3 head3":"heading3"}>Editorial Policies</h3>
            <h3 className={head4? "heading4 head4":"heading4"}>Our Team</h3>
            <h3 className={head5? "heading5 head5":"heading5"}>Our Policies</h3>
            <h3 className={head6? "heading6 head6":"heading6"}>Contact Us</h3>
           </div>
           <div>
           <div className="data">
            <h2>Empower and inspire women of today to lead healthier and happier lives</h2>
            <p>StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty – we provide answers to women in all spheres to celebrate their unique needs and individuality. Our goal is to empower women from all walks of life and various intersections of identity to lead healthier and happier lives.

We have a highly engaged audience of 25 million (and counting!) across all platforms. We focus on Health & Wellness, Skin Care, Hair Care, Makeup, Hairstyles, Fashion, Relationships, and more. Whether it is advice from a trusted expert or a DIY tutorial, we have it all covered</p>
           </div>
           <div className="data">
            <h2>Our Review Board</h2>
            <p>StyleCraze’s review board consists of a team of board-certified doctors, registered dietitians and nutritionists, dermatologists, and beauty and wellness experts who ensure that our articles are medically and factually accurate, evidence-based, current, relevant, and reader-centric. These highly experienced professionals not only verify the content but also add their unique perspectives based on their diverse experience and backgrounds in research and applied clinical practice.

Know more about our medical review board and expert panel.</p>
           </div>
           <div className="data">
            <h2>Editorial Policies</h2>
            <p>StyleCraze’s articles are accurate, current, relevant, and actionable. They are written, edited, and fact-checked by qualified writers, editors, and other contributors who are experts in their areas. The articles are also fact-checked and reviewed by our team of reviewers to ensure the accuracy and relevancy of information provided in the articles.

Learn more about our editorial policy.</p>
           </div>
           <div className="data">
            <h2>Our Team</h2>
            <p>The editorial team is responsible for managing all of the content on our website. Our experienced and certified editors and writers are specialists in their areas of coverage and break down complex information in a clear, easy-to-understand format.

Know more about our editorial and management teams.</p>
           </div>
           
           <div className="data">
           <h1>Our Policies</h1>
            <h2>Privacy Policy</h2>
            <p>StyleCraze has a strict privacy policy to protect the interests and concerns of its readers. The Privacy Policy details how we collect, use, and disclose information collected through our platforms.

Read our Privacy Policy.</p>
           </div>
           <div className="data">
            <h2>Advertising Policy</h2>
            <p>StyleCraze aims to provide access to quality content to its readers. To help us maintain the resources needed to achieve this goal, we accept and display advertisements on the site. However, there is a clear demarcation between editorial and advertising content.

For more details, read our Advertising Policy.</p>
           </div>
           <div className="data">
            <h2>Terms of Use</h2>
            <p>Access to and use of StyleCraze is subjected to certain terms and conditions. Using our web platforms indicates that you agree to the Terms Of Use.</p>
           </div>
           <div className="data">
            <h2>Contact Us
</h2>
            <p>We highly value your feedback/queries/suggestions. You can send them to support@stylecraze.com or contact us here.</p>
           </div>
           </div>
           </div>
           <Footer/>
     <Copyright/> 
    </div>
    
)
}