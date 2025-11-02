import { Component } from "react";
import './index.css';
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa";

class Products extends Component{
  constructor(props){
    super(props)
    this.state = {
      women : [],
    }
  }
  componentDidMount(){
    axios
    .get('http://localhost:3000/products/')
    .then((res)=>{
      this.setState({ women:res.data})
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
    render(){
      const {women} = this.state
        return(
            <div className="product-container">
                <div className="row">
                {women.map((u) => (
                  <div key={u._id} className="product col-lg-4">
                    <img
                      src={u.image_url}
                      alt={u.product_name}
                      className="product-image"
                    />
                    <div className="row">
                      <h3 className="product-brand">{u.brand}</h3>
                      <FaRegHeart className="wishlist"/>
                    </div>
                    <p className="product-name">{u.product_name}</p>
                    <h6 className="product-price">Rs {u.price} <span className="real-price">Rs {(u.price*(u.offer/100))*10}</span> <span className="offer-price">({u.offer}% OFF)</span></h6>
                  </div>
                ))}
              </div>
            </div>
        )
    }
}

export default Products