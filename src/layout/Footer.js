import React from 'react'
import '../styles/footer.css'
export default function Footer() {
    return (
        <div className="footer bg-white">
            <div className="icons-container">
                <a href="#" class="fa fa-facebook icon"></a>
                <a href="#" class="fa fa-twitter icon"></a>
                <a href="#" class="fa fa-linkedin icon"></a>
                <a href="#" class="fa fa-instagram icon"></a>
            </div>
            <div className="footer-middle">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a> 
            </div>
            <div className="footer-text">
                Copyright © 2020 CarRentalCompany. All Right Reserved.
            </div>
        </div>
    )
}
