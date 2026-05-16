import { useState,useEffect,React } from "react";

function DataBinding(){
    let [description,set_description]=useState("");
    return(
        <>
        <h4>Two-Way Data Binding</h4>
        <form action="">
        <label htmlFor="" className="description">Description:</label>
        <input type="text" name="description" value={description} onChange={(e)=>{
            set_description(e.target.value)
        }}
        />
        </form>

        </>
    )
}
export { DataBinding } ;

function PropDrilling({message}){
    return(
        <>
        <ChildComponent message={message}/>
        </>
    )
}
export  { PropDrilling };

function ChildComponent({message}){
    return(
        <>
        <h1>{message}</h1>
        </>
    )
}
export { ChildComponent };