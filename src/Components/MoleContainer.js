// import useState and useEffect
import {useState, useEffect} from 'react';
//import Mole
import Mole from './Mole';
// import Empty Slot
import EmptySlot from './EmptySlot';

//MoleContainer
function MoleContainer(props){
    return (
        <div>
            <h2>Mole Container</h2>
            <Mole />
            <EmptySlot />
        </div>
    )
}

// export
export default MoleContainer