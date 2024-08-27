import { useState } from "react";
import "./Slider.css"

const Slider = ({images}) => {
    const [imageIndex, setImageIndex] = useState(null)

    return (
        <div className="slider">
            {imageIndex !== null && (
            <div className="fullSlider">
                <div className="arrow">
                    <img src="/arrow.png" alt="" onClick={()=>setImageIndex(prev=>(prev===0?3:prev-1))}/>
                </div>
                <div className="Container">
                    <img src={images[imageIndex]} alt="" />
                </div>
                <div className="arrow">
                    <img src="/arrow.png" alt="" className="rotate" onClick={()=>setImageIndex(prev=>(prev===3?0:prev+1))} />
                </div>
                <div className="close" onClick={()=>setImageIndex(null)} >X</div>
            </div>
            )}
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={()=>setImageIndex(0)} />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img src={image} alt="" key={index} onClick={()=>setImageIndex(index+1)}/>
                ))}
            </div>
        </div>
    )
}

export default Slider;