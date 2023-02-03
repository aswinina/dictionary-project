
import './App.css';
import Dictionary from "./dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        
      </header>
      <main>
        <Dictionary defaultKeyword="hello"/>
      </main>
      <footer className='App-footer'>
       This project was coded by <a href="https://aswinisureddy-profile.netlify.app/" >Aswini Sureddy</a> 
       and is <a href="https://github.com/aswinina/dictionary-project" >open-sourced on GitHub</a> and <a href="https://dictionary-app-project-build.netlify.app/">hosted on Netlify</a> 
      </footer>
    </div>
    </div>
  );
}

