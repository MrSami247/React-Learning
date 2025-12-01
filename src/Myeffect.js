import React, { useEffect, useState } from 'react'

const Myeffect = () => {
    const [num,setNum] = useState(0)
    const [count,setCount] = useState(0)
    useEffect(()=>{
        alert("button clicked")
},[num])
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>setNum(num+1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Myeffect
