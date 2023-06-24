const Input = ({style, type, placeholder, inputHandler, value}) =>{
    return (
        <>
        <input style={style} type={type} placeholder={placeholder} onChange={inputHandler} value={value}/>
        </>
    )
}

export default Input;