import React, { useState } from 'react'
import { getJewelaryProduct } from '../../services/jewelery/jewelary';

function Jwellery() {

let [jwellery,setJwellery]=useState([]);

const jwelleryProduct=()=>{
    alert('clicked jwelleryProduct')
    getJewelaryProduct().then((response)=>{
        console.log(response.data);
        setJwellery(response.data);
    }).catch((error)=>{
        console.log('error occured during a Jwellery service calling...')
    })    
}
    
  return (
    <div>Jwellery
        <button style={{marginLeft:'0.5em'}} onClick={jwelleryProduct}>Jwellery products</button>
        {
            jwellery.length>0 ? <div>
                {jwellery.map((product)=>{
                    return (
                        <div>
                            <h2>{product.title}</h2>
                            <img src={product.image}></img>
                            <p>{product.description}</p>

                        </div>
                    );
                })}
            </div> : <h2> Jwellery product NOT FOUND..</h2>
        }
    </div>
    
  )
}

export default Jwellery
