import React, { useRef } from 'react'

const Myref = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()

    const handleClick = () => {
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }

    return (
        <div>
            <input type='text' ref={nameRef} placeholder="Name" />
            <input type='email' ref={emailRef} placeholder="Email" />
            <input type='password' ref={passRef} placeholder="Password" />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Myref
