import {useState,useEffect} from 'react';
import axios from 'axios';
// import { BsSuitHeart } from "react-icons/bs";
// import { BsSuitHeartFill } from "react-icons/bs";
// import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { IoBagCheck } from "react-icons/io5";
function Wishlist(){
    const [product,setProduct]=useState([]);
    const loginId = sessionStorage.getItem("loginId")
    useEffect(()=>{
        axios.get(`http://localhost:3000/bag/${loginId}`)
        .then(res =>{
            const productDetails = res.data.product_details;
            const productIds = productDetails.filter(item=>item.is_wishlisted).map(item=>item.product_id);
            const fetchProducts = async() =>{
                if(productIds.length>0){
                    const productDetails = await Promise.all(productIds.map(id =>{
                        return axios.get(`http://localhost:3000/products/${id}`)
                        .then(res =>res.data)
                        .catch(err =>{
                            console.log(err)
                        })
                    }))
                    console.log(productDetails);
                    setProduct(productDetails);
                }
            }
            fetchProducts();
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
        <div className="product-container">
            <div className="row">
            {product
            .map((u) => (
                <div key={u._id} className="product col-lg-4">
                <Link to={`/productdetails/${u._id}`}>
                <img
                    src={u.image_url}
                    alt={u.product_name}
                    className="product-image"
                />
                </Link>
                <div className="col-lg-12">
                    <h3 className="product-brand">{u.brand}</h3>
                    <div className="display:flex;">
                        {/* <button className={addedToBag[u._id]?"addedtobag":"addtobag"} onClick={()=>this.addToBag(u._id)}>{addedToBag[u._id] ? 'ADDED': 'ADD TO BAG'} {addedToBag[u._id] ? <IoBagCheck />:<BsHandbag/>}</button> */}
                        {/* <button className="heartsym" onClick={()=>this.toggleHeart(u._id)}>{isWishlisted[u._id]?<BsSuitHeartFill className="heartfill"/>:<BsSuitHeart className="heart"/>}</button> */}
                    </div>
                </div>
                <Link to={`/productdetails/${u._id}`}>
                <p className="product-name">{u.product_name}</p>
                <h6 className="product-price">Rs {(u.price-u.price*u.offer/100)} <span className="real-price">Rs {u.price}</span> <span className="offer-price">({u.offer}% OFF)</span></h6>
                </Link>
                </div>
            ))}
            </div>
        </div>
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