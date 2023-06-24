const CustomerList = ({list}) =>{
    const listOfCustomer = list.map((ele, index)=>(<li key={index}>{ele}</li>))

    return(
        <ul>
            {listOfCustomer}
        </ul>
    )
}

export default CustomerList;