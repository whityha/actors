import { useCallback, useEffect, useRef, useState } from "react";

import './styled.sass'
import { ActorList } from "../../types";
import { Link } from "react-router-dom";

const ActorsListMobile = ({actors}: ActorList) => {
    const [currentActor, setCurrentActor] = useState(0);
    const refArray = useRef<HTMLLIElement[]>([]);
   
    const addToRefs = useCallback((el: HTMLLIElement | null, index: number) => {
        if (!el || refArray.current.includes(el)) return;
        refArray.current.splice(index, 0, el);
    }, []);

    const onScroll = () => {
        const index = refArray.current.findIndex((el) => {
            const { top } = el.getBoundingClientRect();
            if (top > 350) return true;
            return false;
        });
        if (index !== -1) setCurrentActor(index);
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return <ul className="actors_mobile_list">{actors.map(({product_id, name, images}, index) => {
            if(currentActor === index) return <li 
                    className='actors_mobile_person active' 
                    ref={(ele: HTMLLIElement) => addToRefs(ele, index)} 
                    key={product_id}>
                        <Link to={`/${product_id}`} className="actors_mobile_link">
                            <img className='actors_mobile_image' src={images[0].thumb} alt='actor image' />
                            <span>{name}</span>
                        </Link>
                    </li>
            return <li ref={(ele: HTMLLIElement) => addToRefs(ele, index)} className='actors_mobile_person' key={product_id}><span>{name}</span></li>
        })}
    </ul>
}

export default ActorsListMobile;