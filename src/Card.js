import {useState} from "react";
function Card(props) {
    const [Counter, setCounter] = useState(Number(props.hourinput));
    function increaseBtn() {
        setCounter(Counter + 1);
    }
    function decreaseBtn() {
        if (Counter > 0) {
            setCounter(Counter - 1);
        }
    }
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <p style={{fontSize:"24px",margin:'10px'}}>{props.subjectinput}<span>-</span><span>{Counter}</span><span>Hours</span></p>
            <button style={{height:'30px',margin:'6px'}} onClick={increaseBtn} className="btn">+</button>
            <button style={{height:'30px',width:'24px',margin:'6px'}} onClick={decreaseBtn} className="btn">-</button>
        </div>
    );
}
export default Card;