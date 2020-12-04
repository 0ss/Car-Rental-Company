import React from 'react'
import Navbar from '../layout/navbar'
import Car from '../images/Car.jpg'
import '../styles/main_styles.css'
import Footer from '../layout/footer'

export default function SuccessfulReservation() {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row mb-3">
                    <div className="col-12 text-center">
                        <h2>Your reservation has been placed successfully! </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div class="card mx-auto mb-5"
                            style={{ borderRadius: '30px' }}
                        >
                            <div className="row">
                                <div className="col-12">
                                    <img class="card-img-top" src={Car} alt="Card cap" />
                                </div>
                            </div>
                            <div class="row mt-3  text-center">
                                <div className="col-md-4 mb-3 ">
                                    <button className="btn btn-sm" >View Car Password</button>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn-sm">Pick-up Location</button>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => window.print()}
                                    >
                                        Print receipt </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5 mt-4">
                        <div class="card"
                            style={{ borderRadius: '50px' }}
                        >
                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <h2>Your receipt</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Car: </span>
                                        <span className="font-weight-light font-italic">Dodge ram</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Color: </span>
                                        <span className="font-weight-light font-italic">
                                            Red</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Model: </span>
                                        <span className="font-weight-light font-italic">2019</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Price: </span>
                                        <span className="font-weight-light font-italic">$385.87</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>From: </span>
                                        <span className="font-weight-light font-italic">21/09/2020</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>To: </span>
                                        <span className="font-weight-light font-italic">30/09/2020</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Payment method: </span>
                                        <span className="font-weight-light font-italic">Paypal</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Order number: </span>
                                        <span className="font-weight-light font-italic">000001</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
