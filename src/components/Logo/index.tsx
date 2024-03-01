import './style.sass'

const Logo = ({dark}: {dark?: boolean}) => {
    return <div className={dark ? "logo_dark": "logo_light"}></div>
}

export default Logo;
