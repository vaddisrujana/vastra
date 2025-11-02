import {Component} from 'react'
import './index.css';
// import {Link} from 'react-router-dom';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FaChildren } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            isHidden: false
         };
    }
    sidebarClick = () =>{
        console.log("clicked");
        this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
    }
    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };
     handleMenMouseEnter = () => {
        this.setState({ isMenHovered: true });
    };

    handleMenMouseLeave = () => {
        this.setState({ isMenHovered: false });
    };
    handleKidsMouseEnter = () => {
        this.setState({isKidsHovered:true})
    }
    handleKidsMouseLeave = () => {
        this.setState({isKidsHovered:false})
    }
    render(){
        const { isHovered } = this.state;
        const { isMenHovered } = this.state;
        const { isKidsHovered } = this.state;
        const { isHidden } = this.state;
        return(
            <div className={isHidden ? 'sidebar-hide':'sidebar'}>
                <div style={{ position: "relative", display: "inline-block" }}>
                    {isHovered && (
                    <div 
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        style={{
                            position: "fixed",
                            top: "40%",
                            left:isHidden ? "8%" : "15%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#B2BEB5",
                            // color:"#001861",
                            // fontFamily:'Lucida Handwriting',
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "4px",
                            padding: "5px",
                            zIndex: 1000,
                        }}
                    >
                        <h4>Women</h4>
                            <p className='product'>Sarees</p>
                            <p className='product'>Dress</p>
                            <p className='product'>Kurta</p>
                            <p className='product'>Top</p>
                            <p className='product'>Jeans & Jeggings</p>
                    </div>
                    )}
                </div>
                <div style={{ position: "relative", display: "inline-block" }}>
                    {isMenHovered && (
                    <div 
                        onMouseEnter={this.handleMenMouseEnter}
                        onMouseLeave={this.handleMenMouseLeave}
                        style={{
                            position: "fixed",
                            top: "50%",
                            left:isHidden ? "8%" : "15%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#B2BEB5",
                            // color:"#001861",
                            // fontFamily:'Lucida Handwriting',
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "4px",
                            padding: "5px",
                            zIndex: 1000,
                        }}
                    >
                        <h4>Men</h4>
                            <p className='product'>Shirts</p>
                            <p className='product'>T-Shirt</p>
                            <p className='product'>Jeans</p>
                            <p className='product'>Formal Wear</p>
                            <p className='product'>Hoddies & Sweatshirts</p>
                    </div>
                    )}
                </div>
                <div style={{ position: "relative", display: "inline-block" }}>
                    {isKidsHovered && (
                    <div 
                        onMouseEnter={this.handleKidsMouseEnter}
                        onMouseLeave={this.handleKidsMouseLeave}
                        style={{
                            position: "fixed",
                            top: "60%",
                            left:isHidden ? "8%" : "15%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#B2BEB5",
                            // color:"#001861",
                            // fontFamily:'Lucida Handwriting',
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "4px",
                            zIndex: 1000,
                            padding: "0 50px 0 10px"
                        }}
                    >
                        <h4>Girls</h4>
                            <p className='product'>Frocks</p>
                            <p className='product'>T-Shirt</p>
                            <p className='product'>Jeans</p>
                        <h4>Boys</h4>
                            <p className='product'>T-Shirt</p>
                            <p className='product'>Jeans</p>
                    </div>
                    )}
                </div>
                {isHidden ? <IoIosArrowDropright className='sidebar-right-arrow' onClick={this.sidebarClick}/>:<IoIosArrowDropleft className='sidebar-arrow' onClick={this.sidebarClick}/>}
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'><MdOutlineHome className='sidebar-icon' /><span className={isHidden ? 'sidebar-item':''}><Link to='/' className='sidebar-list-item'>Home</Link></span></li>
                    <li className='sidebar-list-item'  onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave} 
                    style={{
                        cursor: "pointer",
                    }}><FcBusinesswoman className='sidebar-icon' /><span className={isHidden ? 'sidebar-item':''}><Link to='/women' className='sidebar-list-item'>Women</Link></span></li>
                     <li className='sidebar-list-item'  onMouseEnter={this.handleMenMouseEnter}
                    onMouseLeave={this.handleMenMouseLeave} 
                    style={{
                        cursor: "pointer",
                    }}><FcBusinessman className='sidebar-icon' /><span className={isHidden ? 'sidebar-item':''}><Link to='/men' className='sidebar-list-item'>Men</Link></span></li>
                     <li className='sidebar-list-item'  onMouseEnter={this.handleKidsMouseEnter}
                    onMouseLeave={this.handleKidsMouseLeave} 
                    style={{
                        cursor: "pointer",
                    }}><FaChildren className='sidebar-icon' /><span className={isHidden ? 'sidebar-item':''}><Link to='/kids' className='sidebar-list-item'>Kids</Link></span></li>
                    <li className='sidebar-list-item'><FcAbout className='sidebar-icon' /><span className={isHidden ? 'sidebar-item':''}><Link to='/aboutUs' className='sidebar-list-item'>About Us</Link></span></li>
                    <li className='sidebar-list-item'><FcContacts className='sidebar-icon'/><span className={isHidden ? 'sidebar-item':''}><Link to='/contactUs' className='sidebar-list-item'>Contact Us</Link></span></li>
                    <li className='sidebar-list-item'><IoPersonCircle className='sidebar-icon' /><span className={isHidden ? 'sidebar-item':''}><Link to='/admin' className='sidebar-list-item'>Admin</Link></span></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar