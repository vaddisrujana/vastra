import { Component } from "react";
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { Link } from "react-router-dom";
class Registration extends Component {
  state = { showPopup: false, nameError: '', emailError: '', phoneError: '', dobError: '', passwordError: '' }
 
  handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data)
    if (data.name === '' || data.email === '' || data.phone === '' || data.password === '' || data.DOB === '') {
      this.setState({ nameError: '', emailError: '', phoneError: '', dobError: '', passwordError: '' })
      if (data.name === '') {
        this.setState({ nameError: 'Name is required' })
      } else if (data.email === '') {
        this.setState({ emailError: 'Email is required' })
      } else if (data.phone === '') {
        this.setState({ phoneError: 'Phone is required' })
      } else if (data.password === ''&& !passwordRegex.test(data.password)) {
        this.setState({ passwordError: 'Min 6 chars, include a letter and number.' })
      } else if (data.DOB === '') {
        this.setState({ dobError: 'Date of Birth is required' })
      }
    } else {
      this.setState({ nameError: '', emailError: '', phoneError: '', dobError: '', passwordError: '' })
      axios.post("http://localhost:3000/users", data, {
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(res => {
          // window.location.href = "/";
          console.log(res)
          sessionStorage.setItem("loginId", res.data._id);
          // e.target.reset();
          this.showPopup("Success! User created", "green");
        })
        .catch(err => {
          this.showPopup(err.response.data.message, "red");
        });
    }
  }
  showPopup = (message, color) => {
    this.setState({ showPopup: true, message, color })
  }
  cancelPopup = () => {
    this.setState({ showPopup: false })
  }
  render() {
    const { nameError, emailError, phoneError, passwordError, dobError } = this.state
    return (
      <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center h-100">
        <form onSubmit={this.handleSubmit}>
          <div className="border p-5 d-flex flex-column">
            <h1>Registration</h1>
            <label className="me-5">Name<span className="text-danger">*</span></label>
            <input type="text" name='name' />
            <span className="regError">{nameError}</span>
            <label className="me-5">Email<span className="text-danger">*</span></label>
            <input type="email" name='email' />
            <span className="regError">{emailError}</span>
            <label className="me-5">Phone<span className="text-danger">*</span></label>
            <input type="number" name='phone' />
            <span className="regError">{phoneError}</span>
            <label className="me-5">Password<span className="text-danger">*</span></label>
            <input type="password" name='password' />
            <span className="regError">{passwordError}</span>
            <label className="me-5">Date of Birth<span className="text-danger">*</span></label>
            <input type="date" name='DOB' />
            <span className="regError">{dobError}</span>
            <label className="me-5">Registering as admin <i className="bi bi-info-circle"></i></label>
            <div>
              <label className="me-1"><input type="radio" value="true" name='admin' />Yes</label>
              <label><input type="radio" value="false" name='admin' />No</label>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
             <div style={{textAlign:'end'}}>
                <Link to="/login" style={{color:'black',marginTop:"2px"}}>Already registered? <span style={{color:"#0d6efd"}}>Log In</span></Link>
            </div>
          </div>
        </form>
        <div>
          {this.state.showPopup && (
            <div className="popup" style={{ backgroundColor: this.state.color }} >
              <p>{this.state.message} <button className="cross" onClick={this.cancelPopup}>x</button></p>
            </div>
          )}
        </div>
      </div >
    )
  }
}
 
export default Registration