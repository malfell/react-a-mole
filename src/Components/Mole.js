// import useState and useEffect
import {useState, useEffect} from 'react';
//import mole image
import moleImg from '../assets/mole.png';

// Mole
function Mole(props){
        // sets moles on a random time limit
        useEffect(() => {
            //Math.ceil rounds number, Math.random gets random number
            // * 5000 will make the generated number be in the range of 1-5 seconds
            let randomSeconds = Math.ceil(Math.random() * 5000)
            // timer variable
            let timer = setTimeout(() => {
                //sets displayMole to true
                //needs to be "props.toggle" NOT "props.displayMole"
                    //instruction code inaccurate :(
                props.toggle(false)
            }, randomSeconds)
            // cleanup for useEffect
            return () => clearTimeout(timer)
        })
    return (
        <div>
            <img style={{'width': '10vw'}} 
            src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

// export
export default Mole