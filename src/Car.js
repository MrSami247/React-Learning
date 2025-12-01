import React from "react";
import Carservice from "./Carservice";
import './Cars.css'

const Car = ()=>{
    return (
        <>
    <h1 className="text-primary text-center">
        Car Page
    </h1>
    <h2 className="myCar">My car</h2>
    <Carservice/>    
        </>
    )
}

export default Car