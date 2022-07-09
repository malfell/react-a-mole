// import useState and useEffect
import {useState, useEffect} from 'react';
import MoleContainer from './Components/MoleContainer'

import './App.css';

function App() {
  // useState for changing score, score starts at 0
  let [score, setScore] = useState(0)

  // create Mole Hills
  const createMoleHill = () => {
    // empty array for the hills
    let hills = []
    // for loop for generating hills
    for(let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer 
        key={i}
        setScore={setScore}
        score={score}/>
      )
    }
    // return hills array
    return(
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
        <h1>React-a-Mole!</h1>
        {score}
        {createMoleHill()}
    </div>
  );
}

export default App;
