import React,{useState} from "react";

function ColurCounter(){
    const[colur,setColur] = useState()

    function handleColur(colur){
        setColur(colur)
    }

    return(
        <>
        <button onClick={() => handleColur('red')}>Colur to Red</button>
        <button onClick={() => handleColur('blue')}>Colur to Blue</button>
        <button onClick={() => handleColur('yellow')}>Colur to Yellow</button>
        <div className={colur}>

        </div>
        </>
    )

}

export default ColurCounter