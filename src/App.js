import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const numbersBoxs = [];  
  for (let i = 1; i<=80; i++) {numbersBoxs.push(i)};
  const demoUniqueNumberArr = [];
  for ( let i = 0; i<100; i++) { demoUniqueNumberArr[i]=Math.floor(Math.random() *80)}
  let returnUiqueNumber = null; 
  let returnSelected = null;
  const [bidDefault, setBidDefault] = useState(0);
  const [selectedNumAddCurrentBet,setSelectedNumAddCurrentBet]=  useState()
  const [box,SetBox] = useState(numbersBoxs.map((value,index)=><li key={index} className='num_li'  onClick={ (event) =>event.target.className="click_num_li"}>{value}</li>))

function start() {
  const demoUniqueNumberArrFilter = demoUniqueNumberArr.filter( (value, index) => demoUniqueNumberArr.indexOf(value) === index ); 
  const demoUniqueNumberArrSlice = demoUniqueNumberArrFilter.slice(0,20);
  const uniqueNumbers = demoUniqueNumberArrSlice.filter( (value, index) => demoUniqueNumberArrSlice.indexOf(value) === index);
  const demoSelected = Array.from(document.getElementsByClassName('click_num_li'));
  const selected = demoSelected.map( (value,index) => Number(value.textContent))
  const selcetedSliece = selected.slice(0,8)
  const demoWiningNumbers = [...uniqueNumbers, ...selcetedSliece];
  const winingNumbers = demoWiningNumbers.filter((value,index) => demoWiningNumbers.indexOf(value) !== index)

  SetBox(numbersBoxs.map( (value, index) => {
    if (uniqueNumbers.some(num=> num === value)) {
      returnUiqueNumber =< li key={index} className='glow-on-hover'>{value}</li>;
        } else if (uniqueNumbers.some(num=> num !== value)){
      returnUiqueNumber =< li key={index} className='reset_num_li' >{value}</li>; }
      return returnUiqueNumber
      }));

  setSelectedNumAddCurrentBet( 
    selcetedSliece.map( (value,index) => {
      if (winingNumbers.some(num => num === value)) {
        returnSelected = <li key={index} className='glow-on-hover' >{value}</li>;
          } else {
            returnSelected =  <li key={index} className='current_betting_li' >{value}</li>;
                  }
        return returnSelected
      }))}
  useEffect(()=>{
    setTimeout(()=>{
      setSelectedNumAddCurrentBet(0)
      SetBox(numbersBoxs.map((value,index)=>{
        return <li key={index} className='num_li'  onClick={ (event) => { event.target.className="click_num_li"}}>{value}</li>;
          }))
        },4000)
  },[selectedNumAddCurrentBet])
  
  return (
    <div className="App">
      <div className='console'>
        <h1 className='current_betting_h1'>Ընթացիկ խաղադրույք</h1>
        <div className='betting_console_conteiner' >
          <ul className='current_betting_ul' id='selctedUl'>{selectedNumAddCurrentBet}</ul>
          <p>{`դրույք- ${bidDefault}`}</p>
        </div>
      </div>
  <div>
                                           {/* numbersBoxSection */}
    <div>
      <ul className="num_ul">{box}</ul>
    </div>
                                           {/* startSection */}
    <div className="start">
      <div className="coin_conteiner">
        <p className="coins">{5000- bidDefault}</p>
      </div>
      <div className="startConteiner">
        <div className="bid">
          <div className="bid_plus_minus">
            <button className="bid_plus" onClick={() => setBidDefault(bidDefault - 10)}>-</button>
            <div className="bidDefault">{bidDefault}</div>
            <button className="bid_minus" onClick={() => setBidDefault( bidDefault +10)} >+</button>
          </div>
          <div className="bids_all_conteiner">
            <button className="bids_all" onClick={() => setBidDefault( bidDefault * 2)}>x2</button>
            <button className="bids_all" onClick={() => setBidDefault( bidDefault +50)}>+50</button>
            <button className="bids_all" onClick={() => setBidDefault( bidDefault +250)}>+250</button>
          </div>
        </div>
        <button className="start_btn" id='start' onClick={start} >Կատարել խաղադրույք</button>
      </div>
    </div>
  </div>
  <div className='console'  id='alert'>
    <h1 className='coin'>{`${ bidDefault} Fun` }</h1>
  </div>
</div>
  );
}
export default App;

