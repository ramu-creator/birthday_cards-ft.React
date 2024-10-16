import { useState } from "react";
import user from "../db";
import "../styles/style.css"

function BirthdayCards(){
    const [api,setApi] = useState(user);
    return(
        <>
        <div id="cardapi-container">
            {api.map((res,idx)=>{
                return(
                   <div id="img-content" key={idx}>
                        <div id="img-set">
                            <img id="img-logo" src={res.image} alt={res.name}/>
                        </div>
                        <div id="details">
                            <h2>{res.name}</h2>
                            <h2>{res.birth}</h2>
                        </div>
                   </div>
                )
            })}
            <button id="reset" onClick={()=>setApi([])}>Reset</button>  
        </div>
        </>

    )
}
export default BirthdayCards; 