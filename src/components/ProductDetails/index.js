import { Component } from "react";
import './index.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
class ProductDetails extends Component{
    state = {product : [],isWishlisted:false}
    componentDidMount(){
     const { id } = this.props.params;
    axios
    .get(`http://localhost:3000/products/${id}`)
    .then((res)=>{
      this.setState({ product:res.data})
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  heart=()=>{
    this.setState((prevState)=>({isWishlisted:!prevState.isWishlisted}))
  }
    render(){
        const {product,isWishlisted} = this.state
        return(
            <div>
                <div className="product-details-container">
                    <p><Link to='/' className="backLink">Home</Link> / <Link className="backLink" to={`/${product.category}`}>{product.category}</Link> / <Link className="backLink" to={`/${product.type}`}>{product.type}</Link></p>
                    <div className="row">
                        <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
                            <img src={product.image_url} alt={product.product_name} className="col-lg-4 d-flex"/>
                            <h1 className="brand">{product.brand}</h1>
                            <p className="product-name">{product.product_name}</p>
                            <h6 className="product-price">Rs {product.price} <span className="real-price">Rs {(product.price*(product.offer/100))*10}</span> <span className="offer-price">({product.offer}% OFF)</span></h6>
                            <div className="col-lg-2 d-flex justify-content-between">
                              <button className="size">XS</button>
                              <button className="size">S</button>
                              <button className="size">M</button>
                              <button className="size">XL</button>
                              <button className="size">XXL</button>
                            </div>
                            <div className="display:flex;">
                              <button className="addtobag">ADD TO BAG <BsHandbag/></button>
                              <button className="heartsym" onClick={this.heart}>{isWishlisted?<BsSuitHeart className="heart"/>:<BsSuitHeartFill className="heartfill"/>}</button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default function ProductDetailsWrapper() {
  const params = useParams();
  return <ProductDetails params={params} />;
}