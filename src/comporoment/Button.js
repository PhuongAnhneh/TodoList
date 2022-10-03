
function Button (prop) {
   
    return (
        <button onClick={prop.onClick}>{prop.value}</button>
    )
}
export default Button