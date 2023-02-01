import React,{useState} from "react";
import axios from "axios";
import Results from "./results";
import  "./dictionary.css";


export default function Dictionary(){
    let[keyWord,setKeyWord] = useState("");
    let[results,setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function Search(event){
     event.preventDefault();
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
 axios.get(apiUrl).then(handleResponse);
    }



    function handleKeyWordChange(event){
       
        setKeyWord(event.target.value);
    }


return (<div className="Dictionary">
    <form onSubmit={Search}>
        <input type="search" onChange={handleKeyWordChange}/>
    </form>
    <Results results={results}/>
</div>
);
}