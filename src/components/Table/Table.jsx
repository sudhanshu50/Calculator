import styles from "../Table/Table.module.css"

const Table = ({total, customer})=>{
    return(
        <>
        <table style={{textAlign:'center', width:'100%', border:"1px solid black" }}>
            <thead>
                <tr>
                    <th style={{border:"1px solid black"}}>Total Customer</th>
                    <th style={{border:"1px solid black"}}>Tip</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{border:"1px solid black"}}>{customer}</td>
                    <td style={{border:"1px solid black"}}>{total}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Table;