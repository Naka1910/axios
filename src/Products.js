import { useEffect, useState } from "react"
import axios from 'axios'


export default function Products(){
    const[products,setProducts]=useState([])
    function getData(){
        axios.get('https://retoolapi.dev/FNoduP/products')
        .then(response => {
            setProducts(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    useEffect(()=>{
     getData();
    },[])
    return(
        <div>
  {
      products.map((item,index)=>(
          <div key={index}>
              <h1>{item.title}</h1>
              <img className="img" src={item.image} alt={item.image} />

          </div>
      ))
  }
        </div>
    )
}