import { useState,useEffect } from "react";

function Wishlist(){
    const [wishlist,setWishlist] = useState([])
    useEffect(()=>{
    })
    return(
        <div>hdjsk</div>
    )
}

export default Wishlist;













// import {useState, useEffect, useRef} from 'react'
// function Wishlisted(){
//   const [data, setData] =  useState(0)
//   const interval=useRef(null)
//   useEffect (()=>{
//     interval.current = setInterval(() => {
//       setData(t => t + 1);
//     }, 1000);
 
//      return () => clearInterval(interval.current);
//   },[])
// const stop = () =>{
//   console.log('jnhj')
//   clearInterval(interval.current)
// }
//   return<div>
//     <p>time {data}</p>
//      <button onClick={stop}>Stop</button>
//   </div>
  
// }
 
// export default Wishlisted