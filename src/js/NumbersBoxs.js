

export default function NumbersBoxs () {
    let x = '';
    const numbersBoxs = [];
    for (let i = 0; i<80; i++) {
        x++;
        numbersBoxs.push(x)
    };

    return (
        <div>
            
            <ul className="num_ul">
                {numbersBoxs.map( (value, index) => {
                   return <li key={index} className="num_li">{value}</li>
                } )}
            </ul>

        </div>
    )
}