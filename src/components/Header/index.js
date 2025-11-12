import {Component} from 'react'
import './index.css';
import vastra_logo from '../../assets/vastra.png';
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <div className='nav-background d-flex justify-content-between align-items-around'>
                <img src={vastra_logo} className="logo" alt="logo"/>
                <div className="col-lg-4 d-flex justify-content-between align-items-center">
                    <div className="col-lg-9 d-flex">
                        <input type="text" className="search-input mb-2 col-lg-12" placeholder=' search for products......'/>
                        <IoIosSearch className='search-icon'/>
                    </div>
                    <div className="d-flex justify-content-between align-items-around col-lg-2">
                        <Link to='/wishlist'><FaRegHeart className="icon-size"/></Link>
                        <Link to='/bag'><BsHandbag className="icon-size"/></Link>
                        <Link to='/registration'><CgProfile className="icon-size"/></Link>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Header