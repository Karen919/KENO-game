
import { useState } from "react";

function Footer() {
    const [name, setName] = useState("");
    let x = true;
    let y = true;
    const bg = ['bg1', 'bg2', 'bg3', 'bg4'];
    let z = 0;
    function handleSubmit(event) {
        event.preventDefault();
        const username = event.target.username.value;
        sessionStorage.setItem("username", username);
        setName(username.toUpperCase().trim());
        document.getElementById('recuest_urerName').style.display = 'none'
    }
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
            <span>{name}</span>
            <span className=" material-symbols-outlined" onClick={toggleInfoMode}>
                settings
            </span>
        </div>
        <div id="info_mode">
                <div className="settings">կարգավորումներ</div>
                <div className=" material-symbols-outlined info"  onClick={toggleRules}>info <span className="kanon">-կանոններ</span></div>
                <div className=" material-symbols-outlined mode" onClick={toggleMode}>auto_mode <span className="kanon">-ռեժիմ</span></div>
            </div>
        </div>
        <div className="rules" id="rules">
            <p>«Կենո» խաղը խաղացողին հնարավորություն է տալիս է խաղադրույք կատարել 1-80 համարակալված դաշտերից,  1-ից մինչև 8-ը  համարակալված դաշտերի համակցություն ընտրելու միջոցով:</p>
            <p>Յուրաքանչյուր խաղափուլի ժամանակ պատահական թվերի գեներատորի հիման վրա խաղարկվում են 1-ից 80-ը հերթականությամբ համարակալված գնդակներից 20-ը:</p>
            <p>Խաղափուլի ընթացքում դուրս եկող և խաղացողի կողմից ընտրված թվերի հետ համընկնող դաշտերը գունավորվում են վերևում:</p>
            <ul>
                <li>3 թիվից պակաս համընկնելու դեպքում խաղացողը պարտվում է </li>
                <li>3 թիվ համընկնելու դեպքում խաղադրույքը բազմապատկվում է — 5 անգամ </li>
                <li>4 թիվ համընկնելու դեպքում խաղադրույքը բազմապատկվում է — 10 անգամ </li>
                <li>5 թիվ համընկնելու դեպքում խաղադրույքը բազմապատկվում է — 20 անգամ </li>
                <li>6 թիվ համընկնելու դեպքում խաղադրույքը բազմապատկվում է — 40 անգամ </li>
                <li>7 թիվ համընկնելու դեպքում խաղադրույքը բազմապատկվում է — 80 անգամ </li>
                <li>8 թիվ համընկնելու դեպքում խաղադրույքը բազմապատկվում է — 160 անգամ </li>
            </ul>
        </div>
        <div className="recuest_urerName" id="recuest_urerName">
        <div className="material-symbols-outlined close" onClick={()=>{ document.getElementById('recuest_urerName').style.display = 'none'}}>close</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div>
    </footer>
    );
}

export default Footer;
