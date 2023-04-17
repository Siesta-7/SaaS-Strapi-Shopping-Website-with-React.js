import "./slider.scss"

import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export const Slider = () => {

    const [currentSlider, setCurrentSlider] = useState(0)
    const data = [
    "/img/firstSlider.jpg",
    "/img/secondSlider.jpg",
    "/img/test3.jpeg",    
] 

const prevSlider = ()=>{
    setCurrentSlider(currentSlider === 0 ? 2 : prev=>prev-1)
}
const nextSlider = ()=>{
    setCurrentSlider(currentSlider === 2 ? 0 : prev=>prev+1)
}

    return(
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlider*100}vw)`}}>
                <img src={data[0]} />
                <img src={data[1]} />
                <img src={data[2]} />
            </div>      
                <div className={"icons left "+ (currentSlider == 0 && "invisible")}>
                    <ArrowBackIosNewIcon  className="icon" onClick={prevSlider}/>    
                </div>
                <div className={"icons right"}>
                    <ArrowForwardIosIcon  className="icon" onClick={nextSlider}/>
                </div>                         
        </div>
    )
}