import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        
    <footer className="mt-5 pt-4 pb-2" style={{backgroundColor:"#343a40", color:"#f8f9fa"}}>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h5>About Us</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><Link to="/home" className="text-white">Home</Link></li>
                    <li><Link to="/about" className="text-white">About</Link></li>
                    <li><Link to="/contect" className="text-white">Contact</Link></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h5>Contact Us</h5>
                <p>123 Street Name, City, State, 12345</p>
                <p>Email: minahil7776@gmail.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center mt-3">
                &copy; 2024 Storyify
            </div>
        </div>
    </div>
</footer>
    )
}
