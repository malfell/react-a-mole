// import useState and useEffect
import {useState, useEffect} from 'react';
//import Mole
import Mole from './Mole';
// import Empty Slot
import EmptySlot from './EmptySlot';

//MoleContainer
function MoleContainer(props){
    // mole set to display as false at first
    let [theMole, setTheMole] = useState(false)
    // function to handle mole being bopped
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    // ternary used to render mole or empty slot
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole}/>
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

// export
export default MoleContainer