import { useState } from "react"
import Products from "./Products"

export default function Counter (){
    const[value,setValue]=useState(0)
    function handleClick(){
        setValue(value+1)
    }
    return(
       <div>
           <p>{value}</p>
           <button onClick={handleClick}>Submit</button>
           {/* <Products /> */}
       </div>
    )
}