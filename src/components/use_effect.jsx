import {React,useEffect,useState} from "react";

function Effect(){
    let [age,set_age]=useState(18);
    useEffect(()=>{
        console.log("ren-render successfull");
    },[age])
    return(
        <>
        <h1>UseEffect</h1>
        <button onClick={()=>set_age(age+1)}>{age}</button>
        {
            age>20?<p>you are fucked up bro </p>:<p>winter is coming for you</p>
        }
        </>
    )
}
export default Effect;