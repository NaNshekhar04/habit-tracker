const Button = ({ color, text, onClick }) => {
    return (
        //A SINGLE BUTTON COMPONENT

        <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>
    )
}
export default Button