import './style.sass'
const DotForSlider = ({slickGoTo, i}: {i: number; slickGoTo?: (i: number) => void}) => {
    const slickToGo = () => {slickGoTo ? slickGoTo(i) : null}
  return (
    <button onClick={slickToGo} className='dot-slider'></button>
  )
}

export default DotForSlider