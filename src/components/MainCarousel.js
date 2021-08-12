import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import slider from '../data/slider';

export const MainCarousel = (props) => {
    const items = slider;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.altText}
                
                >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption className="bg-secondary px-5 bg-opacity-50" captionText={item.captionText} captionHeader={item.caption} />
            </CarouselItem>
      );
    });
  
    return (
        <div className="container" id="scrollWorks">
            <h2 className="text-center my-5" style={{color:"#d0eaff"}}>NUESTRAS OBRAS</h2>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="main-carousel"
                >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
                <CarouselControl direction="next" directionText=" " onClickHandler={next} />
                
            </Carousel>

        </div>
    );
  }
