import React,{useState} from "react";
import axios from "axios";
import Results from "./results";
import  "./dictionary.css";


export default function Dictionary(props){
    let[keyWord,setKeyWord] = useState(props.defaultKeyword);
    let[results,setResults] = useState(null);
    let [loaded, setLoaded] =  useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function Search(){
    
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
 axios.get(apiUrl).then(handleResponse);
    }

function  handleSubmit(event){
    event.preventDefault();
    Search();
}

    function handleKeyWordChange(event){
       
        setKeyWord(event.target.value);
    }
    function load(){
        setLoaded(true);
        Search();
    }
if (loaded){
    return (<div className="Dictionary">
       
    <section>
    <h1>
        What word do you want to look up?
    </h1>
    <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeyWordChange} defaultValue={props.defaultKeyword}/>
    </form>
    <div className="hint">
        suggested Words: sunset,Wine, yoga,plant....
    </div>
    </section>
    <Results results={results}/>
</div>
);
} else{
    load();
    return"Loading";
}


}