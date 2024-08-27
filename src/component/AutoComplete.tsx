import { useState } from "react"

export function Autocomplete () {

const [count, setCount] = useState(0)     // useState = temporally remember

    function handleMinus() {
       setCount(count-1) 
    } 
  
    function handlePlus() {
      setCount(count+1)
   }
return (
<>  
     <h1> Sandahansi </h1>
     
     <div>
      {
        count
      }
     </div>
     <button onClick={handleMinus}>-</button>
     <button onClick={handlePlus}>+</button>  
    </>
)
}    




