const Button = ({btnText ,clickHandler, isDisable, style}) => {
    return(
        <>
        <button onClick={clickHandler} disabled={isDisable} style={style}>{btnText}</button>
        </>
    )
}

export default Button;