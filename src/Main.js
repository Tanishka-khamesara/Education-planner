import { useState } from "react";
import Card from "./Card";

function Main() {
    const [Subject, setSubject] = useState("");
    const [Time, setTime] = useState(0);
    const [Cards, setCards] = useState([]);
    function subjectValue(e){
        const data = e.target.value;
        // console.log(subject);
        setSubject(data);
    }
    function hoursValue(e) {
        const hours = e.target.value;
        // console.log(hours);
        setTime(hours);
    }
    function updated() {
        if (Subject == "") {
            alert("please Enter Details");
        }
        else {
            setCards([...Cards, { subjectinput: Subject, hourinput:Time }])
        }
    }
    
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection:'column',width:'50%'}}>
            <h1>Geekster Education Planner</h1>
            <div>
            <input style={{widht:'30%',height:'30px',margin:'6px',border:"4px solid #906264"}} type='text' placeholder="Subject" onChange={subjectValue}></input>
                <input style={{ width: '10%',height:'30px',margin:'6px',border:"4px solid #906264" }} type="number" placeholder="Hours" onChange={hoursValue}></input>
                <button onClick={updated} style={{height:'35px',margin:'6px',backgroundColor:'#906264'}}>Add +</button>

                {Cards.map((value) => {
                    return <Card {...value} />
                })}
            </div>
            

        </div>
    )
}
export default Main;