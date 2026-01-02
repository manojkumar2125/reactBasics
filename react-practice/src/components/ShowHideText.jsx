import React, { useState } from "react";

function ShowHideText(){
    const[text,setText] =useState(true)

    return(
        <div>
        <button onClick={() =>setText(prev => !prev)}>Text</button>
        {text && <p>Text is visable</p>}
        </div>
    )

}

export default ShowHideText