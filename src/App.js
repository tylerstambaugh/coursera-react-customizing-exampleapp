import './App.css';
import InputComponent from './components/examples/InputComponent';
import Child from "./components/examples/Child"
import Nav from './components/Nav.js';
import Example from './components/examples/Example.js';
import Card from './components/examples/Card.js';
import Btn from './components/examples/btn';
import ModeToggler from './components/examples/ModeToggler';



function App() {
  
  return (
    <div>      
      <InputComponent />
    </div>
  );
}


export default App;



// function App() {
//   return (
//     <ModeToggler />
//   );
// }

/////////////////////////////////////////

// function App() {
  
//   function handleClick() { 
//     let randomNum = Math.floor(Math.random() * 3) + 1;
//     console.log(randomNum);
//     let userInput = prompt('type a number'); 
//     alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//   }
  
//   return (
//     <div>
//       <h1>Task: Add a button and handle a click event</h1>
//       <button onClick={handleClick}>Guess a number between 1 and 3</button>
//     </div>
//   );
// }