import React, { useRef } from 'react';

import './Slider.scss';

const scroll = (direction, ref) => {
    if (ref.current) {

        let far = ref.current.getBoundingClientRect().width / (2 * direction);
        let pos = ref.current.scrollLeft + far;
        if(ref.current.scrollLeft===ref.current.getBoundingClientRect().width){
            pos=0;
        }
        ref.current.scrollLeft = pos;
    }
}

const Slider = ({ children }) => {
    const sliderContRef = useRef(null);

    return (
        <div className="slider-rt">
            {/* <a className="slider-prev" onClick={() => scroll(-1, sliderContRef)}>&#10094;</a> */}
            <div className="slider-content" ref={sliderContRef}>
                {children}
            </div>
            {/* <a className="slider-next" onClick={() => scroll(1, sliderContRef)}>&#10095;</a> */}
        </div>
    )
}

export default Slider;