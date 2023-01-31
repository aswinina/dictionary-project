import React,{useState} from "react";
import axios from "axios";
import Results from "./results";
import  "./dictionary.css";


export default function Dictionary(){
    let[keyWord,setKeyWord] = useState("");
    let[results,setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    function Search(event){
 event.preventDefault();
 alert(`Searching for ${keyWord} definition`);
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
 axios.get(apiUrl).then(handleResponse);
    }



    function handleKeyWordChange(event){
        //*console.log(event.target.value);
        setKeyWord(event.target.value);
    }
return (<div className="Dictionary">
    <form onSubmit={Search}>
        <input type="search" onChange={handleKeyWordChange}/>
    </form>
    <Results results={results}/>
</div>);
}