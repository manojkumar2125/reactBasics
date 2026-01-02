import React, { useState } from "react";

function ToggleButton(){
    const[toggle,setToggle] = useState("OFF")

    return(
        <button onClick={()=>setToggle(toggle ==="ON"? "OFF":"ON")}> Switch value is {toggle}</button>
    )

}

export default ToggleButton