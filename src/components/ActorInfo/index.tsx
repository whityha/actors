import { ACTOR } from "@/types";
import { ACTOR_INFO } from "./config"
import './styled.sass'
import { getDataByAttribute } from "@/utils/getDataFromAttribute";
import { NEW_LINE_DELIMITER } from "@/constants";
import ButtonWork from "./Button";
import Popup from "../Popup";
import { useState } from "react";
import PopupContent from "../PopupContent";

interface INFO {
    name: string;
    description: string;
    image: string;
    info: ACTOR['attribute_groups'][number];
}

const ActorInfo = ({ information }: {information: INFO}) => {
    const [isOpenPopup, setOpenPopup] = useState(false);
    const { info: { attribute }} = information
    const {options, filmtoolz, kinolift, pdf } = getDataByAttribute(attribute)
    return <>
        <Popup isOpen={isOpenPopup} closePopup={() => {setOpenPopup(false)}}><PopupContent /></Popup>
        <section className="actor">
        <div className='wrapper actor_container'>
            <h1 className="actor_title">{information.name}<ButtonWork onclick={() => setOpenPopup(true)} /></h1>
            <p className="actor_subtext">{information.description}</p>        
            <div className="actor_content">
                <div className="actor_image"><ButtonWork onclick={() => setOpenPopup(true)} /><img alt='imagePhoto' src={information.image} /></div>
                <div className='actor_info'>                
                    <ul className="actor_list">
                        {ACTOR_INFO.map(({id, title}) => {
                        return <li key={id} className="actor_item">
                            <p className="actor_item-title">{title}</p>
                            <ul className="actor_item-list">
                                {options.find(({name}) => name === title)?.text.split(NEW_LINE_DELIMITER).map((item) => <span key={item} className="actor_item-subtext">{item}</span>)}
                            </ul>
                        </li>
                        })}
                    </ul>
                    <div className="actor_buttons">
                        <button className="actor_buttons-portfolio"><a href={`/assets/PDF/${pdf}`} target="_blank">Скачать портфолио</a></button>
                        <div className="actor_buttons_links">
                            {kinolift && <button className="actor_buttons-link"><a href={kinolift} target="_blank">Кинолифт</a></button>}
                            {filmtoolz && <button className="actor_buttons-link"><a href={filmtoolz} target="_blank">FilmToolz</a></button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default ActorInfo