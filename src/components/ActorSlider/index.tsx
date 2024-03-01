import Slider from 'react-slick'
import './style.sass'
import { useRef } from 'react';
import DotForSlider from './Dot';
import useWindowWidth from '@/hooks/useWindowWidth';
import { MEDIA_QUERY } from '@/constants';

const ActorSlider = ({images}: {images: {popup: string; thumb: string}[]}) => {
    const slider = useRef<Slider>(null)
    const prev = () => slider.current?.slickPrev();
    const next = () => slider.current?.slickNext();
    const width = useWindowWidth();
    const sliderCountToShow = (width: number) => {
        if( width <= MEDIA_QUERY.mobile) return 1
        if (width <= MEDIA_QUERY.medium) return 2
        return 3
    }
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: sliderCountToShow(width),
        slidesToScroll: 1,
        centerPadding: '100px',
        arrows: false,
        dotsClass: 'slider_dots',
        customPaging: (i: number) => <DotForSlider i={i} slickGoTo={slider.current?.slickGoTo} />
      };
  return (
    <section className='slider' >
        <div className='wrapper slider_container'>
            <button onClick={prev} className='slider_prev'></button>
            <div className='slider_container_slider'>            
                <Slider ref={slider} {...settings}>
                    {images.slice(1).map(({thumb}) => <div key={thumb} className='slider_image_block'><img className='slider_image' src={thumb} alt='omar3' /></div>)}
                </Slider>
            </div>
            <button onClick={next} className='slider_next'></button>
        </div>
    </section>
  )
}

export default ActorSlider