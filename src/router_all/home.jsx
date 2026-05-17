import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home(){
    const navigate=useNavigate();
    const[name,setname]=useState();
    function gotouser(){
        navigate(`/user/${name}`)
    }
    return(
        <>
        <h1> welcome to home page</h1>
        <input type="text" placeholder="enter name" onChange={(e)=>{setname(e.target.value) }} value={name}/>
        <button onClick={gotouser}>Proceed</button>
        </>
    )
}
export default Home;