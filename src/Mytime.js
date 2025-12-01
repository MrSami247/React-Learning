import React, { useState } from 'react'

const Mytime = () => {
    let Mytime = new Date().toLocaleTimeString()
    const[time,setime] = useState(Mytime)

    const updatetime = () =>{
        Mytime = new Date().toLocaleTimeString()
          setime(Mytime)
    }
    setInterval(updatetime,1000)
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={updatetime}>Update Time</button>
    </div>
  )
}

export default Mytime
