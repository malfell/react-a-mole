// import useState and useEffect
import {useState, useEffect} from 'react';
//import molehill image
import MoleHill from '../assets/molehill.png'

// Empty Slot
function EmptySlot(props) {
    // sets moles on a random time limit
    useEffect(() => {
        //Math.floor rounds number, Math.random gets random number
        // * 5000 will make the generated number be in the range of 1-5 seconds
        let randomSeconds = Math.ceil(Math.random() * 5000)
        // timer variable
        let timer = setTimeout(() => {
            //sets displayMole to true
            //needs to be "props.toggle" NOT "props.displayMole"
                //instruction code inaccurate :(
            props.toggle(true)
        }, randomSeconds)
        // cleanup for useEffect
        return () => clearTimeout(timer)
    })
    return(
        <div>
            {/* displays molehill */}
            <img style={{'width': '10vw'}} src={MoleHill}/>
        </div>
    )
}

// export
export default EmptySlot