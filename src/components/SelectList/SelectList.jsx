const SelectList = ({optionClick, style}) => {
    return(
        <select onChange={optionClick} style={style}>
            <option value=''>Choose..</option>
            <option value='20'>Excellent (20%)</option>
            <option value='10'>Moderate (10%)</option>
            <option value='5'>Bad (5%)</option>
        </select>
    )
}

export default SelectList;