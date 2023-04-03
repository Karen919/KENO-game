import './App.css';
import { useState } from 'react';

function App() {
  let demoUniqueNumberArr = [];
  for ( let i = 0; i<100; i++) {
    demoUniqueNumberArr[i]=Math.floor(Math.random() *80)
  }; 
  let demoUniqueNumberArrFilter = demoUniqueNumberArr.filter( (value, index) => {
    return demoUniqueNumberArr.indexOf(value) === index;
  } ); 
  let demoUniqueNumberArrSlice = demoUniqueNumberArrFilter.slice(0,20);
  let uniqueNumbers = demoUniqueNumberArrSlice.filter( (value, index) => {
    return demoUniqueNumberArrSlice.indexOf(value) === index;})

  const numbersBoxs = [];  
  const [bidDefault, setBidDefault] = useState(0);
  const [run, setRun] = useState(uniqueNumbers.map( (value,index) => {
    return <li key={index} className="win_num_li">{}</li>
}) );
  function func() {
  return setRun(uniqueNumbers.map( (value,index) => {
    return <li key={index} className="win_num_li glow-on-hover">{value}</li>
}) )
}

  for (let i = 1; i<=80; i++) {
    numbersBoxs.push(i)
};
  
// function numsEfect (event) {
//     event.
// }
  let selectedNumbers = [];
  if (selectedNumbers.length === 10) {
    selectedNumbers.shift()
  }
  return (
    <div className="App">
                                             {/* winSection */}
     <div className="win_div">  
                <ul className="win_num_ul  "> 
                {run}
                </ul>
                <div className="winNumber">{23}</div>
                
      </div>
                                           {/* numbersBoxSection */}
      <div>
            <ul className="num_ul">
                {numbersBoxs.map( (value, index) => {
                   return <li key={index} className="num_li"  onClick={(event) => {
                    event.target.className = 'glow-on-hover';
                   selectedNumbers.push(Number (event.target.textContent)) ;
                   console.log(selectedNumbers);
                   }}>{value}</li>
                } )}
            </ul>
        </div>
                                           {/* startSection */}
        <div className="start">
      <div className="coin_conteiner">
        <p className="coins">{5000- bidDefault}</p>
      </div>
      <div className="startConteiner">
        <div className="bid">
          <div className="bid_plus_minus">
            <button className="bid_plus" onClick={() => {
                return  setBidDefault(bidDefault + 100)
            }}>+</button>
            <div className="bidDefault">{bidDefault}</div>
            <button className="bid_minus" onClick={() => {
                return setBidDefault( bidDefault -100)
            }} >-</button>
          </div>
          <div className="bids_all_conteiner">
            <button className="bids_all" onClick={() => {
                return setBidDefault( bidDefault*2)
            }}>x2</button>
            <button className="bids_all" onClick={() => {
                return setBidDefault( bidDefault +50 )
            }}>+50</button>
            <button className="bids_all" onClick={() => {
                return setBidDefault( bidDefault + 250)
            }}>+250</button>
          </div>
        </div>
        <button className="start_btn" id='start'  onClick={func}>START</button>




      </div>
    </div>
    </div>
  );
}
export default App;

