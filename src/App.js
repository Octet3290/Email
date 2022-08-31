import "./App.css";
import Email from "./components/Email";
import Video from "../src/components/Video";
function App() {
  return (
    
    <div className="App">
      <Video />
      <header>
            <h2 class="logo" >OCTET</h2>
            <div class="toggle"></div>        
      </header>
      
      <div className="scene">
      <Email />  
      </div>
        <div class="text">
            <a href="https://octet3290.github.io/OctetLearnings/Explore1.html">Explore</a>
        </div>
    </div>
    
  );
}

export default App;