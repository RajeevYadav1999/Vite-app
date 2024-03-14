import { useState } from "react"

const Counter = () => {
    let [count, setCount] = useState(0)

    function incCount(){
        setCount(count+1)
    }

    function decCount(){
        if (count==0){
            return
        }
        
        setCount(count-1)
    }

    return (
      <div className="w-80 h-44 border-red-200 border-2 text-center">
          <h1 className="ml-10px mt-3">Count : {count}</h1>
          <div className="m-2">
              <button className="bg-red-200 w-36 p-2 m-4" onClick={incCount}>Increment</button>
              <button className="bg-red-500 w-36 p-2"  onClick={decCount}>Decrement</button>
          </div>
      </div>
    )
  }
  
  export default Counter

 