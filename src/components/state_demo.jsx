import React, { use } from "react";
import { useState } from "react";
function State(){
    let [likes,set_likes]=useState(0)
    return (
        <>
        <button onClick={()=>set_likes(likes+1)}>{likes}</button>
        {
            // likes>5 && <p>reached 5 likes cunt</p>
            likes>5?<p>people are liking video</p>:<p>people are disliking video </p>  //conditional formatting 
        }
        <button onClick={()=>set_likes(likes-1)}>minus</button>
        </>
    )
}
export default State