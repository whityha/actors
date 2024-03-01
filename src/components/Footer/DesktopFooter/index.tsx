import { Link } from "react-router-dom"
import { EMAIL, LINKS, PDF_ALL_ACTORS, TELEPHONE, YOUTUBE_LINK } from "../../../constants"
import Logo from "../../Logo"

import './style.sass'

const DesktopFooter = () => {
    return <footer id='footer' className="footer">
        <div className='footer_container'>
            <div className='wrapper footer_content'>
                <div className="footer_top">
                    <Link to='/'><Logo /></Link>
                    <nav className="footer_nav">
                        <ul className="footer_nav-list">
                            {LINKS.map(({id, link, name}) => {
                                return <li className="footer_nav-item" key={id}><a href={`/${link}`}>{name}</a></li>
                            })}
                        </ul>
                    </nav>
                    <div className="footer_icon_phone"><a className="footer_phone-link" href={`tel: ${TELEPHONE}`}></a></div>
                    <a className="footer_phone" href={`tel: ${TELEPHONE}`}>{TELEPHONE}</a>
                </div>                
                <div className="footer_social">
                    <a href={YOUTUBE_LINK}>YouTube</a>
                    <button className="footer_button"><a href={PDF_ALL_ACTORS}>скачать шахматку на всех актеров</a></button>
                    <a href={`mailto: ${EMAIL}`}>{EMAIL}</a>
                </div>
            </div>            
        </div>
        <div className="footer_design">
            <p className="wrapper footer_design-text">сайт создан <a target="_blank" href='https://design-life.pro' className="footer_design-link">студией "design life"</a></p>
        </div>
    </footer>
}

export default DesktopFooter