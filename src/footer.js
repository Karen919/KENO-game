
import { useState } from "react";

function Footer() {
    // const [name, setName] = useState("");
    let x = true;
    let y = true;
    const bg = ['bg1', 'bg2', 'bg3', 'bg4'];
    let z = 0;
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const username = event.target.username.value;
    //     sessionStorage.setItem("username", username);
    //     setName(username.toUpperCase().trim());
    //     document.getElementById('recuest_urerName').style.display = 'none'
    // }
    function toggleInfoMode () {
        x ? x = false : x = true
        x ? document.getElementById("info_mode").style.display = 'none' :
            document.getElementById("info_mode").style.display = 'inherit'
            document.getElementById("rules").style.display = 'none' 
    }

    function toggleMode() {
        document.getElementById('body').className = bg[z];
        z === 4 ? z = 0 : z++
    }

    function toggleRules () {
        y ? y = false : y = true;
        y ? document.getElementById("rules").style.display = 'none' : document.getElementById("rules").style.display = 'inherit'
    }
    return (
    <footer className="footer" id="footer">
        <div>
            <div className="username">
            {/* <span>{name}</span> */}
            <span className=" material-symbols-outlined" onClick={toggleInfoMode}>
                settings
            </span>
        </div>
        <div id="info_mode">
                <div className="settings">Settings</div>
                <div className=" material-symbols-outlined info"  onClick={toggleRules}>info <span className="kanon"></span></div>
                <div className=" material-symbols-outlined mode" onClick={toggleMode}>auto_mode <span className="kanon"></span></div>
            </div>
        </div>
        <div className="rules" id="rules">
        <p>The "Keno" game allows the player to select numbers from 1 to 80 among the available fields numbered from 1 to 8.</p>
        <p>During each game round, 20 random numbers are drawn from the numbers 1 to 80, which are numbered sequentially based on the random number generator.</p>
        <p>In the course of the game round, the fields selected by the player and the numbers drawn are highlighted above.</p>
        <ul>
            <li>If the player matches less than 3 numbers, they lose.</li>
            <li>If the player matches 3 numbers, the payout is multiplied by 5.</li>
            <li>If the player matches 4 numbers, the payout is multiplied by 10.</li>
            <li>If the player matches 5 numbers, the payout is multiplied by 20.</li>
            <li>If the player matches 6 numbers, the payout is multiplied by 40.</li>
            <li>If the player matches 7 numbers, the payout is multiplied by 80.</li>
            <li>If the player matches 8 numbers, the payout is multiplied by 160.</li>
        </ul>
        </div>
        {/* <div className="recuest_urerName" id="recuest_urerName">
        <div className="material-symbols-outlined close" onClick={()=>{ document.getElementById('recuest_urerName').style.display = 'none'}}>close</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div> */}
    </footer>
    );
}

export default Footer;
