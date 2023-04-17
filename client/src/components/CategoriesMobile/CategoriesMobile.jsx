import { Link } from "react-router-dom"
import "./categoriesMobile.scss"

export const CategoriesMobile = () =>{

    return (
    <div className="categoryMobile">
        <div className="cat">
            <div >
                <Link to="/products/1" className="row">
                    <img src="/img/women1.png" alt=""/>   
                    <span>Woman</span>
                </Link>
                <Link to="/products/3" className="row">
                    <img src="/img/sale1.png" alt=""/>
                    <span>Sale</span>
                </Link>   
            </div>
           <div >
            <Link to="/products/4" className="row">
                <img src="/img/newseason.jpg" alt=""/>
                <span>New Season</span>
            </Link>
            <Link to="/products/2" className="row">
                <img  src="/img/man.jpg" alt=""/>
                <span>Man</span>
            </Link>       
           </div>
            <div>
                <Link to="/products/6" className="row">
                    <img src="/img/accessory.jpg" alt=""/>
                    <span>Accessories</span>
                </Link>
                <Link to="/products/5" className="row">
                    <img src="img/shoesCatMobile.jpeg" alt=""/>
                    <span>Shoes</span>
                </Link>
            </div>
        </div>
    </div>
    )
}