import React,{useState} from "react"

function Counter(){
    const[count,setCount] = useState(0)

    return (
        <div className="card">
            <button onClick={()=>setCount(count =>count+1)}>Increment</button>
            <button onClick={() =>setCount(count =>count-1)}>Decrement</button>
            <p>{count}</p>
        </div>
    )
    
}

export default Counter