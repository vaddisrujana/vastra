import { Component } from "react";
import './index.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoBagCheck } from "react-icons/io5";
class Products extends Component{
  
  state = {isWishlisted:{},addedToBag:{},product : [],category : this.props.params.category}
  componentDidMount(){
    this.callByCategory()
  }
  callByCategory(){
    axios
    .get('http://localhost:3000/products/')
    .then((res)=>{
      const data=res.data.filter(u => u.category === this.props.params.category)
      this.setState({ product:data, category : this.props.params.category})
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  componentDidUpdate(prevProps){
    if(prevProps.params.category !== this.props.params.category){
        this.callByCategory()
    }
  }
    toggleHeart=(id)=>{
    this.setState((prev)=>({isWishlisted:{
      ...prev.isWishlisted,[id]:!prev.isWishlisted[id]
    }}))
    }
    addToBag=(id)=>{
      this.setState((prev)=>({addedToBag:{
        ...prev.addedToBag,[id]:!prev.addedToBag[id]
      }
      }))
    }
    render(){
      const {product,isWishlisted,addedToBag} = this.state
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
                          <button className={addedToBag[u._id]?"addedtobag":"addtobag"} onClick={()=>this.addToBag(u._id)}>{addedToBag[u._id] ? 'ADDED': 'ADD TO BAG'} {addedToBag[u._id] ? <IoBagCheck />:<BsHandbag/>}</button>
                          <button className="heartsym" onClick={()=>this.toggleHeart(u._id)}>{isWishlisted[u._id]?<BsSuitHeartFill className="heartfill"/>:<BsSuitHeart className="heart"/>}</button>
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
}

// export default Products
export default function ProductDetailsWrapper() {
  const params = useParams();
  return <Products params={params} />;
}