import React from 'react'
import Navbar from '../layout/Navbar'
import '../styles/main_styles.css'
import Footer from '../layout/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <h1>Car Reservation Company!</h1>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
