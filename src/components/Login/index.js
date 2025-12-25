import { Component } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
 
class Login extends Component {
    state ={showPopup:false,message:'',emailError:'',passwordError:''}
    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if(data.email === '' && !emailRegex.test(data.email)){
            this.setState({emailError:'Enter valid email.'})
        }
         else if(data.password === '' && !passwordRegex.test(data.password)){
            this.setState({passwordError:'Enter valid password.'})
        }else{
            this.setState({emailError:'',passwordError:''})
            axios.post('http://localhost:3000/users/login',data, {
                headers:{
                    "Content-Type": "application/json",
                }
            })
            .then(res =>{
                console.log(res.data.user._id)
                sessionStorage.setItem("loginId", res.data.user._id);
                window.location = '/'
            })
            .catch(err =>{
                this.setState({message:err.response.data.message,showPopup:true})
                console.log(err)
            })
        }
    }
    render() {
        const {showPopup,message,emailError,passwordError} = this.state
        return (
            <div>
                <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center h-100">
                    <form onSubmit={this.handleSubmit}>
                        <div className="border p-5 d-flex flex-column">
                            <h1>Login</h1>
                            <label className="me-5">Email<span className="text-danger">*</span></label>
                            <input type="email" name='email' />
                            <p className="regError">{emailError}</p>
                            <label className="me-5">Password<span className="text-danger">*</span></label>
                            <input type="password" name='password' />
                            <p className="regError">{passwordError}</p>
                            <div className="d-flex justify-content-center mt-2">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div style={{textAlign:'end'}}>
                                <Link to="/registration" style={{color:'black',marginTop:"2px"}}>Not yet registered? <span style={{color:"#0d6efd"}}>Sign Up</span></Link>
                            </div>
                        </div>
                    </form>
                </div>
                {showPopup && (
                    <div className="popup" style={{right: '20%',background: 'red'}}>
                        <p>{message}</p>
                    </div>
                )}
            </div>
        )
    }
}
export default Login