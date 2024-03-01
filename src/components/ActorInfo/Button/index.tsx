import './style.sass'

const ButtonWork = ({onclick}: {onclick?: () => void}) => {
  return (
    <span className='button_work' onClick={onclick}></span>
  )
}

export default ButtonWork