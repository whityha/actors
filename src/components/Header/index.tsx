import { useState } from 'react';
import { LINK, LINKS, TELEPHONE } from '../../constants';
import BurgerMenu from '../BurgerMenu';
import Logo from '../Logo';
import './style.sass'
import { Link } from 'react-router-dom';

const Header = ({dark}: {dark?: boolean}) => {
    const [isOpenBurger, setIsOpenBurger] = useState(false);
    const handleCloseBurger = () => setIsOpenBurger(false)
    const handleOpenBurger = () => setIsOpenBurger(true)
    return (
    <>
        <header className={`${dark ? 'dark ' : ''}header wrapper`}>
            <div className={`${dark ? 'dark ' : ''}header_burger`} onClick={handleOpenBurger}></div>
            <div className='header_logo'>
                <Link to='/'><Logo dark={!dark} /></Link>
            </div>
            <nav className='header_nav'>
                <ul className='header_nav_list'>
                {LINKS.map(({id, link, name}: LINK) => {
                    return <li className='header_nav_item' key={id}><a href={`/${link}`} >{name}</a></li>
                })}
                </ul>
            </nav>
            <div className={`${dark ? 'dark ' : ''}header_phone_icon`}><a className="header_phone-link" href={`tel: ${TELEPHONE}`}></a></div>
            <div className="header_phone"><a className="header_phone-link" href={`tel: ${TELEPHONE}`}>{TELEPHONE}</a></div>
        </header>
        <BurgerMenu dark active={isOpenBurger} close={handleCloseBurger} />
    </>)};

export default Header;
