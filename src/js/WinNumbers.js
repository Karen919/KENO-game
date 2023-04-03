
export default function WinNumbers () {
    const winNumbers = ['','33','','','','34','','','67','','','65','','','','','','','',''];

    return (
        <div className="win_div">
                <ul className="win_num_ul"> 
                { winNumbers.map( (value,index) => {
                    return <li key={index} className="win_num_li">{value}</li>
                } ) }
                </ul>
                <div className="winNumber">{23}</div>
                
            </div>

            
    )
}

