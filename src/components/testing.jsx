import { useState } from "react"
import "./testing.css"

export default function Testing(){
   
    const [count,setCount] = useState(0)
    const [name,setName] = useState("student")

    function increment(){
        console.log("incrementing")
        if(count < 10){
            setCount(count + 1)
        }
       
    }
    
    function decrement(){
        console.log("decrementing")
        setCount(count - 1)
    }

    function changeName(value){
        setName(value)
    }

    return(
        <div className="background">
            <h1>{name}</h1>
            <button className="val" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="val" onClick={increment}>+</button>

            <div className="button-Panel">
                <button onClick={
                    ()=>{changeName("Students")
                }}>students</button>
                <button onClick={
                    ()=>{changeName("Teachers")
                }}>Teachers</button>
                <button onClick={
                    ()=>{changeName("Admin")
                }}>Admin</button>
            </div>
        </div>
    )
}