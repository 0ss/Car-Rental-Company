/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import '../footer.css'
import { SiteLocations } from '../../constants/Constants'

export default function Footer() {
    return (
        <>

            <div className="footer bg-white">
                <div className="icons-container">
                    <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/LuxuryCars" class="fa fa-facebook icon" />
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/LuxuryCars" class="fa fa-twitter icon"></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/LuxuryCars" class="fa fa-linkedin icon"></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/LuxuryCars" class="fa fa-instagram icon"></a>
                </div>
                <div className="footer-middle">
                    <a href={SiteLocations.privacyPolicy}>Privacy Policy</a>
                    <a href={SiteLocations.termsConditions}>Terms of Service</a>
                </div>
                <div className="footer-text">
                    Copyright © {new Date().getFullYear()} Luxury Cars Company. All Right Reserved.
            </div>
            </div>

        </>
    )
}