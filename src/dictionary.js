import React,{useState} from "react";
import  "./dictionary.css";


export default function Dictionary(){
    let[keyWord,setKeyWord] = useState("");
    function Search(event){
 event.preventDefault();
 alert(`Searching for ${keyWord} definition`);
    }
    function handleKeyWordChange(event){
        //*console.log(event.target.value);
        setKeyWord(event.target.value);
    }
return (<div className="Dictionary">
    <form onSubmit={Search}>
        <input type="search" onChange={handleKeyWordChange}/>
    </form>
</div>);
}