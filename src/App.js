import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [bidDefault, setBidDefault] = useState(0);
  const [timer, setTimer] = useState(0);

  const numbersBoxs = [];  
  for (let i = 1; i<=80; i++) {
    numbersBoxs.push(i)
  };
  
//*************************************************************************** */
  let demoUniqueNumberArr = [];
  for ( let i = 0; i<100; i++) {
    demoUniqueNumberArr[i]=Math.floor(Math.random() *80)
  }; 
  let demoUniqueNumberArrFilter = demoUniqueNumberArr.filter( (value, index) => demoUniqueNumberArr.indexOf(value) === index ); 
  let demoUniqueNumberArrSlice = demoUniqueNumberArrFilter.slice(0,20);
  let uniqueNumbers = demoUniqueNumberArrSlice.filter( (value, index) => demoUniqueNumberArrSlice.indexOf(value) === index);

  let demoSelected = Array.from(document.getElementsByClassName('click_num_li'));
  let selected = demoSelected.map( (value,index) => Number(value.textContent))
  console.log(selected);
  let demoUniqueNumbersArr = Array.from(document.getElementsByClassName('win_num_li'))
  let uniqueNumbersArr = demoUniqueNumbersArr.map( (value,index) => Number(value.textContent ) )
  console.log(uniqueNumbersArr);
  let demoWiningNmbers = [...uniqueNumbersArr, ...selected];
  let winingNmbers = demoWiningNmbers.filter((value,index) => demoWiningNmbers.indexOf(value) !== index)
  console.log(winingNmbers);

  function selectedFuu() {
    selected.map( (value,index) => <li>{value}</li>) 
  }

const [selectedNumAddCurrentBet,setSelectedNumAddCurrentBet]=  useState(selectedFuu  )
function winingNum() {
 setSelectedNumAddCurrentBet( selected.map( (value,index) => <li key={index} className='current_betting_li' >{value}</li>))
  
}
  //****************************************************************************** */
  const [run, setRun] = useState(uniqueNumbers.map( (value,index) => <li key={index} className="win_num_li">{}</li>));
useEffect (()=> {
      setTimeout (  () => {
        let elapsedTime = 0;
        let timerInterval = setInterval(() => {
          elapsedTime++;
          setTimer(elapsedTime);
          if (elapsedTime === 6) {
            document.getElementById('win_num_ul').style.opacity = '1'
            clearInterval(timerInterval);

            setRun(uniqueNumbers.map( (value,index) => <li key={index} className="win_num_li"><span className='win_num_span'>{value}</span></li> ))
          };
          if (elapsedTime ===1) {
            document.getElementById('win_num_ul').style.opacity = '0'
            document.getElementById('selctedUl').innerText = ' ';
          }
        
        
        }, 1000);
        return () => clearInterval(timerInterval);
      },2000)
},[run])
//*************************************************************************************** */
   

  return (
    <div className="App">
      <div className='console'>
      <h1 className='current_betting_h1'>Ընթացիկ խաղադրույք</h1>

      <div className='betting_console_conteiner' >
        <ul className='current_betting_ul' id='selctedUl'>
          {selectedNumAddCurrentBet} 
        </ul>
        <p>{`դրույք- ${bidDefault}`}</p>

      </div>
      </div>
       <div>
                                              {/* winSection */}
      <div className="win_div">  
        <ul className="win_num_ul" id='win_num_ul'> {run}</ul>
        <div className="winNumber" id='timer'>{timer}</div>
      </div>
                                           {/* numbersBoxSection */}
      <div>
            <ul className="num_ul">
                {numbersBoxs.map( (value, index) => {
                   return <li key={index} className="num_li"  onClick={ (event) => {                    
                   selected.length < 8 ? event.target.className="click_num_li": alert('թվերի քանակը 8 է');
                   
                   
                    }}>{value}</li>})}
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
                return  setBidDefault(bidDefault - 10)
            }}>-</button>
            <div className="bidDefault">{bidDefault}</div>
            <button className="bid_minus" onClick={() => {
                return setBidDefault( bidDefault +10)
            }} >+</button>
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
        <button className="start_btn" id='start' onClick={winingNum} >Կատարել խաղադրույք</button>
        <span className="material-symbols-outlined">
expand_circle_down
</span>
<span className="material-symbols-outlined">
info
</span>



      </div>
    </div>
       </div>
       <div className='console'  id='alert'>
         <h1 className='coin'>{`${5000-bidDefault} Fun` }</h1>
       </div>

    </div>
  );
}
export default App;

