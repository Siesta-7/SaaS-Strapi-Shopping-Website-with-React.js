import { Link } from "react-router-dom"
import "./categories.scss"
import { CategoriesMobile } from "../CategoriesMobile/CategoriesMobile"

const Categories =()=> {
  return (
    <div className="categories">
        <div className="categoryPc">
            <div className="col">   
                <Link to="/products/1" className="row">
                    <img className="lower" src="/img/women.jpg" alt=""/>   
                    <span>Woman</span>
                </Link>         
                <Link to="/products/3" className="row">
                    <img className="lower" src="/img/sale.jpg" alt=""/>
                    <span>Sale</span>
                </Link>
            </div>
            <div className="col">
                <Link to="/products/4" className="row">
                    <img src="/img/newseason.jpg" alt=""/>
                    <span>New Season</span>
                </Link>
            </div>
            <div className="col col-lg">
                <div className="row">
                    <div className="col">
                        <Link to="/products/2" className="row">
                            <img className="lower" src="/img/man.jpg" alt=""/>
                            <span>Man</span>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/products/6" className="row">
                            <img src="/img/accessory.jpg" alt=""/>
                            <span>Accessories</span>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/products/5" className="row">
                            <img src="img/shoesCat.jpeg" alt=""/>
                            <span>Shoes</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <CategoriesMobile />
    </div>
  )
}

export default Categories