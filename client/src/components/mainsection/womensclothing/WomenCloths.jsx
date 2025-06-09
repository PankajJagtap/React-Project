import { useState } from "react";
import { getWomenCloths } from "../../services/women cloths/women";

function WomenCloth(){

    const[cloths,setCloths]=useState([0]);

    const getCloths=()=>{
        getWomenCloths().then((response)=>{
            console.log(response.data);
            setCloths(response.data);
        }).catch((err)=>{
            console.log("error occured in fetching womens clothings..",err);
        })
    }
    return(
        <div>
            Women Clothings
            <button style={{marginLeft:'0.5rem'}} onClick={getCloths}>Cloths</button>
                {
                    cloths.length > 0 ?<div>

                        {cloths.map((cloth)=>{
                            return(
                                <div>
                                    <h2>{cloth.title}</h2>
                                    <img src={cloth.image}></img>
                                    <p>{cloth.description}</p>
                                </div>
                            )
                        })}
                    </div>: <h2>Womens clothing NOT FOUND...</h2>
                }
        </div>
);
}

export default WomenCloth