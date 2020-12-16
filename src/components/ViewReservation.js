import React, {useState} from 'react'
import Navbar from '../layout/Navbar'
import Car from '../images/Car.jpg'
import '../styles/main_styles.css'
import Footer from '../layout/Footer'
import * as Firestore from "../services/api/firestore"
import {SiteLocations} from '../constants/Constants'


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


export default function ViewReservation() {

    const id = getParameterByName("id")
    const [car , setCar] = useState(null);
    const [order , setOrder] = useState(null);


    function getCar(id){        
        if(id)
        Firestore.getCar(id).then((result)=>{
            if(result && result.status === "ok"){
                setCar(result.result)
            }
        })

    }

    function getOrder(id){
        
        Firestore.getOrder(id).then((result)=>{
            if(result && result.status === "ok" && result.result?.carId){
                setOrder(result?.result)
                getCar(order?.carId)
            }
        })

    }

    function CancelReservation(){
        if(window.confirm('Are sure you want to cancel this reservation?\n\nYOU CAN NOT UNDO THIS ACTION')){
            Firestore.cancelOrder(order.id).then((result)=>{
                if(result.status === "ok"){
                    window.location.href = SiteLocations.searchCars
                }else{
                    window.alert(result.result)
                }
            })
        }
    }

    if(!car)
    getOrder(id)

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row mb-3">
                    <div className="col-12 text-center">
                        <h2>Reservation details</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div class="card mx-auto mb-5"
                            style={{ borderRadius: '30px' }}
                        >
                            <div className="row">
                                <div className="col-12">
                                    <img class="card-img-top" src={car?.image ? car.image : Car} alt="Card cap" />
                                </div>
                            </div>
                            <div class="row mt-3  text-center">
                                <div className="col-md-4 mb-3">
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => window.print()}
                                    >
                                        Print Receipt </button>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <button
                                        className="btn btn-sm"
                                        onClick={CancelReservation}
                                    >
                                        Cancel Reservation</button>
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
                                    <h2>{order?.clientName}'s receipt</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Car: </span>
    <span className="font-weight-light font-italic">{car?.name}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Color: </span>
                                        <span className="font-weight-light font-italic">
                                        {car?.color}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Model: </span>
                                        <span className="font-weight-light font-italic">{car?.model}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Price: </span>
    <span className="font-weight-light font-italic">{order?.price}$</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>From: </span>
                                        <span className="font-weight-light font-italic">{order?.dateFrom}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>To: </span>
    <span className="font-weight-light font-italic">{order?.dateTo}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Payment method: </span>
                                        <span className="font-weight-light font-italic">{order?.paymentMethod}</span>
                                    </p>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Order number: </span>
                                        <span className="font-weight-light font-italic">000001</span>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
