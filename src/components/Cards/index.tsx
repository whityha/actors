import Slider from 'react-slick';
import { LazyLoadTypes } from 'react-slick';
import { useRef } from 'react';
import ActorCard from './ActorCard';
import { ACTOR_IN_ACTORS } from '@/types';

import './style.sass'

const Cards = ({actors}: {actors: ACTOR_IN_ACTORS[]}) => {
    const slider = useRef<Slider>(null)

    const lazyLoad: LazyLoadTypes = 'ondemand'
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: '200',
        lazyLoad
      };
    const prev = () => slider.current?.slickPrev();
    const next = () => slider.current?.slickNext();
    return <section className="cards" id='cards'>
        <div className="wrapper">
            <header className='cards_header'>
                <h3 className="cards_title">ВИЗИТКИ</h3>
                <button onClick={prev} className='cards_btn prev' type="button"></button>
                <button onClick={next} className='cards_btn next' type="button"></button>
            </header>
            <div className='cards_slider'>
                <Slider ref={slider} {...settings}>
                    {actors.length && actors.map(({product_id, attribute_groups, name, description, images}) => {
                        return <ActorCard key={product_id} id={product_id} attributes={attribute_groups} name={name} description={description} image={images[0].thumb} />
                    })}
                </Slider>
            </div>
        </div>
    </section>
}

export default Cards;
