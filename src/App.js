import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const demoUniqueNumberArr = [];
  const numbersBoxs = [];  
  for (let i = 1; i<=80; i++) {numbersBoxs.push(i)};
  let x = null;
  const [start,setStart] =useState(<button className="start_btn" id='start' onClick={addBet} >START</button> );
  const [bidDefault, setBidDefault] = useState(0);
  const [selectedNumAddCurrentBet,setSelectedNumAddCurrentBet]=  useState();
  const [box,SetBox] = useState(numbersBoxs.map((value,index)=> <li key={index} className='num_li'  onClick={ (event) => {x++;x < 9 ? event.target.className='click_num_li' : alertInfo('#A93226','warning Առավելագույն քանակն է 8')} }>{value}</li>))
  function alertInfo (color, text) {
    document.getElementById('alerInfo').style.background = color
    document.getElementById('alerInfo').style.transform = 'translateX(-550px)';
    document.getElementById('alerInfo').innerText = text
    setTimeout(()=>{document.getElementById('alerInfo').style.transform = 'translateX(0px)'},1300);
  }

  function addBet() {
  x = null;
  for ( let i = 0; i<100; i++) { demoUniqueNumberArr[i]=Math.floor(Math.random() *79)+1};
  const demoUniqueNumberArrFilter = demoUniqueNumberArr.filter( (value, index) => demoUniqueNumberArr.indexOf(value) === index ); 
  const demoUniqueNumberArrSlice = demoUniqueNumberArrFilter.slice(0,20);
  const uniqueNumbers = demoUniqueNumberArrSlice.filter( (value, index) => demoUniqueNumberArrSlice.indexOf(value) === index);
  const demoSelected = Array.from(document.getElementsByClassName('click_num_li'));
  const selected = demoSelected.map( (value,index) => Number(value.textContent));
  const selcetedSliece = selected.slice(0,8);
  const demoWiningNumbers = [...uniqueNumbers, ...selcetedSliece];
  const winingNumbers = demoWiningNumbers.filter((value,index) => demoWiningNumbers.indexOf(value) !== index);
  setStart(<button className="start_btn" id='start'>START</button> );
  localStorage.setItem('i', winingNumbers.length);

  setTimeout(()=>{
      setSelectedNumAddCurrentBet()
      SetBox(numbersBoxs.map((value,index)=>{
        return <li key={index} className='num_li' onClick={ (event) => {x++; x < 9 ? event.target.className='click_num_li' : alertInfo('#A93226','warning Առավելագույն քանակն է 8')}}>
          {value}</li>;}))
      setStart(<button className="start_btn" id='start' onClick={addBet}>START</button> )
      document.getElementById('alerInfo').style.transform = 'translateX(0px)'
    },8000);
  SetBox(numbersBoxs.map( (value, index) => uniqueNumbers.some(num=> num === value) ? < li key={index} className='glow-on-hover'>{value}</li> : < li key={index} className='reset_num_li' >{value}</li>));
  setSelectedNumAddCurrentBet(selcetedSliece.map( (value,index) => winingNumbers.some(num => num === value) ? <li key={index} className='glow-on-hover' >{value}</li> : <li key={index} className='reset_num_li' >{value}</li>))};
  useEffect(()=>{
    if ( localStorage.getItem('i') < '3' ) {
      alertInfo('#1C2833','Կրկին Փորձել')
      } else if (localStorage.getItem('i') >= '3' ) {
        alertInfo('green',` military_tech  Դուք շահեցիք  ${5 * bidDefault}`)
      }else if (localStorage.getItem('i') >= '4' ) {
        alertInfo('green',` military_tech  Դուք շահեցիք  ${10 * bidDefault}`)
      }else if (localStorage.getItem('i') >= '5' ) {
        alertInfo('green',` military_tech  Դուք շահեցիք  ${20 * bidDefault}`)
      }else if (localStorage.getItem('i') >= '6' ) {
        alertInfo('green',` military_tech  Դուք շահեցիք  ${40 * bidDefault}`)
      }else if (localStorage.getItem('i') >= '7' ) {
        alertInfo('green',` military_tech  Դուք շահեցիք  ${80 * bidDefault}`)
      }else if (localStorage.getItem('i') >= '8' ) {
        alertInfo('green',` military_tech  Դուք շահեցիք  ${160 * bidDefault}`)
      }
  },[selectedNumAddCurrentBet])

  return (
    <div className="App">
      <div className='console'>
      <h1 id='alerInfo' className='alert_lose material-symbols-outlined'> </h1>
        <div className='betting_console_conteiner' >
          <ul className='current_betting_ul' id='selctedUl'>{selectedNumAddCurrentBet}</ul>
        </div>
      </div>
    <div>
      <ul className="num_ul">{box}</ul>
    </div>
    <div className="start">
      <div className="coin_conteiner">
        <p className="coins">{localStorage.getItem('name')}</p>
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
        {start}
      </div>
    </div>
  </div>
  );
}
export default App;

