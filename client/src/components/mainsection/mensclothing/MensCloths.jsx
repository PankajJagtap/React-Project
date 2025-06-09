import { useState } from "react";
import { getMensCloths } from "../../services/mens cloths/mens";

function MensCloths(){

    const[cloths,setCloths]=useState([]);

    const clothsProduct=()=>{
        getMensCloths().then((res)=>{
            console.log(res.data);
            setCloths(res.data);
        }).catch((err)=>{
            console.log('error in calling a mens clothing service----');
        });
    }

    return(
        <div>Mens Clothing
            <button style={{marginLeft:'0.5em'}} onClick={clothsProduct}>Mens's Clothing</button>
            {
                cloths.length>0 ?
                    <div>
                        {cloths.map((cloth)=>{
                            return(
                                <div>
                                    <h2>{cloth.title}</h2>
                                    <img src={cloth.image}></img>
                                    <p>{cloth.description}</p>
                                </div>
                            )
                        })}
                    </div> 
                    : <h2>Clothing product didn't Found..</h2> 
            }
        </div>
    )
}
export default  MensCloths;