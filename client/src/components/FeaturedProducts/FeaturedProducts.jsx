import "./featuredProducts.scss"
import Card from "../Card/Card"
import useFetch from "../../Hooks/useFetch"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";

const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () =>{
        setCurrentSlide(prev => prev === 0 ? 0: prev-1)
    }

    const nextSlide = () =>{
        setCurrentSlide(prev => prev === 1 ? 0 : prev+1)
    }

  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p> 
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
        </div>
        <div className={"bottom " + (currentSlide == 1 && "secondPage")}>
            <ArrowBackIosNewIcon className="backIcon icon" onClick={prevSlide} />         
            <div className="container" style={{transform:`translateX(-${currentSlide*80}vw)`}}>
                {error ? "Something is wrong" : (loading ? "Loading" :  
                data.map(item=>(         
                <Card item={item} key={item.id} />)
                ))} 
            </div>
            <ArrowForwardIosIcon  className="forwardIcon icon" onClick={nextSlide} />
        </div>
        
    </div>
  )
}

export default FeaturedProducts