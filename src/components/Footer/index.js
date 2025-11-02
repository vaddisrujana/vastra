import React, { Component } from 'react';
import vastra from '../../assets/vastra.png';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-section">
                <div className="row footer">
                    <div className="col-lg-3 mb-4">
                        <img src={vastra} alt="Vastra logo" className="footer-logo" />
                    </div>
                    <div className="col-lg-3 mb-4 footer-items">
                        <h5 className="footer-heading">MENU</h5>
                        <p>Women</p>
                        <p>Men</p>
                        <p>Kids</p>
                    </div>
                    <div className="col-lg-3 mb-4 footer-items">
                        <h5 className="footer-heading">LEGAL POLICIES</h5>
                        <p>Privacy Policy</p>
                        <p>Returns</p>
                        <p>Terms & Conditions</p>
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                    <div className="col-lg-3 mb-4 footer-items">
                        <h5 className="footer-heading">CONTACT US</h5>
                        <p>YouTube</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
