import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';

  const items = [
    {
        src: slide1,
        altText: 'Slide 1',
        caption: 'Proyectos Puertas y ventanas',
        captionText: 'algo descriptivo'
    },
    {
        src: slide2,
        altText: 'Slide 2',
        caption: 'Muros Cortinas',
        captionText: 'algo descriptivo'
    },
    {
        src: slide3,
        altText: 'Slide 3',
        caption: 'Aberturas Especiales',
        captionText: 'algo descriptivo'
    }
  ];

export const MainCarousel = (props) => {
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
                <CarouselCaption captionText={item.captionText} captionHeader={item.caption} />
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
