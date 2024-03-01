import Slider from "react-slick";

import { useRef } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Poster from "./Poster";

import './styled.sass'
import { getDataByAttributeGroup } from "@/utils/getDataByAttributeGroup";
import { ATTRIBUTES_GROUP_NAMES } from "@/types";

const Posters = ({ posters }:{posters: any[]}) => {
    const slider = useRef<Slider>(null)
    
    const windowWidth = useWindowWidth();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth >= 576 ? 2 : 1,
        slidesToScroll: 1,
        arrows: false
      };

    const next = () => {
        slider.current?.slickNext()
    }

    const prev = () => {
        slider.current?.slickPrev()
    }
    
    return <section id='posters' className='posters'>
        <div className="wrapper">
            <header className="posters_header">
                <button onClick={prev} className='posters_btn prev' type="button"></button>
                <h2 className="posters_header_title">АФИШИ</h2>
                <button onClick={next} className='posters_btn next' type="button"></button>
            </header>
            {posters.length > 0 ? <Slider ref={slider} {...settings}>
                {posters.map(({product_id, name, attribute_groups, thumb}) => {
                    const roles = getDataByAttributeGroup(attribute_groups, ATTRIBUTES_GROUP_NAMES.ROLES)
                    return <Poster key={product_id} name={name} poster={thumb} inRoles={roles?.attribute[0].text} />
                })}
            </Slider> : 'Loading...'}
        </div>
    </section>
}

export default Posters;
