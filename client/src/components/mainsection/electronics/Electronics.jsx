import React, { useState } from 'react';
import { electronicsService } from '../../services/electronics/electronicsServices';


function Electronics() {

let[electronics,setElectronics]=useState([0]);

const getElectronics =()=>{
    electronicsService().then((response)=>{
        console.log(response.data)
        setElectronics(response.data);
        
    }).catch((error)=>{
        console.log(error)
    })
}

  return (
    <div>Electronics
        <button style={{marginLeft:"0.5rem"}} onClick={getElectronics}>Click me </button>
        {
            electronics.length>0 ? <div>
                {electronics.map((element)=>{
                    return(
                        <div> 
                        <img src={element.image}></img>
                        <h2>{element.title}</h2>
                        <h3>{element.description}</h3>
                    </div>
                    )                    
                 })
                }
            </div>: <h2>There is nothing to display..</h2>
        }
    </div>
  )
}

export default Electronics