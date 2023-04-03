import { useState } from 'react';

export default function Start() {
  const [bidDefault, setBidDefault] = useState(0);
  
  
  return (
    
    <div className="start">
      <div className="coin_conteiner">
        <p className="coins">{5000- bidDefault}</p>
      </div>
      <div className="startConteiner">
        <div className="bid">
          <div className="bid_plus_minus">
            <button className="bid_plus" onClick={() => {
                return setBidDefault( bidDefault + 100)
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
        <button className="start_btn" id='start'>START</button>
      </div>
    </div>
  );
}
