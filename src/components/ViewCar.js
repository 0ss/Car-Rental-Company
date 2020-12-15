import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import '../styles/main_styles.css'
import Footer from '../layout/Footer'
import * as Firestore from "../services/api/firestore"

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default function ViewCar() {
    const carId = getParameterByName("id")
    const [price, setPrice] = useState(0.0)
    const [error, setError] = useState(null);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [days, setDays] = useState(null);
    const [car, setCar] = useState(null);

    
    console.log('from' , from, 'to', to)



    function getCar(id) {

        if (id && id.length > 3)
            Firestore.getCar(id).then((result) => {
                console.log('resusssssslt', result )

                if (result && result.status === "ok") {
                    setCar(result.result)
                    console.log('resusssssslt', result )
                }
            })

    }


    const dateChange = e => {
        e.preventDefault()
        setError('')

        console.log(e.target.from.value, e.target.to.value)
        console.log('from' , from, 'to', to, car.price)

        if (!e.target.from.value || !e.target.to.value) {
            setError('Please put the dates before submit')
            return
        }
        setFrom(e.target.from.value)
        setTo(e.target.to.value)
        console.log('from' , from, 'to', to)
        setDays(((new Date(to) - new Date(from)) / (86400 * 1000)))



        if (days < 0) {  // if days in minus
            setError('Please fill the dates correctly')
            return
        }
        setError('')

        setPrice(parseInt(days * car.price * 24))
    }
    const handleSubmitData = e => {
        e.preventDefault()
        const price = e.target.price.value
        const method = e.target.method.value
        if (!price || !method) {
            setError('Please make sure to fill the form')
            return
        }
        setError('')
        const orderId = Firestore.getUuid();
        Firestore.addOrder(orderId, carId, price, days, from, to, method).then((result) => {
            console.log(result)
            if (result && result.status === "error") {
                setError(result.error)
                window.location.href = "/login"
            } else {
                window.location.href = "/viewReservation?id=" + orderId
            }
        })

    }

    if(!car)
    getCar(carId);
    if(car){
        console.log(car.price)

    }
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div class="card mx-auto mb-5" style={{ borderRadius: '30px' }} >
                            <div className="row">
                                <div className="col-12">
                                    
                                {
                                    car?.image ?
                                    <img class="card-img-top" src={car?.image} alt="Card cap" />: 
                                    <div class="loader text-center mt-3"></div>

                                    
                                    }
                                </div>
                            </div>
                            {
                                error &&
                                <div class="alert alert-danger text-center " style={{ 'fontSize': 13 }} role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                    {error}

                                </div>
                            }
                            <form onSubmit={dateChange}>
                                <div class="row mt-3  text-center">
                                    <div className="col-md-6">
                                        <p>
                                            <span>Rent from: </span>
                                            <input type="date" name="from"/>
                                        </p>
                                    </div>
                                    <div className="col-md-6 ">
                                        <p>
                                            <span>to: </span>
                                            <input type="date" name="to" />
                                        </p>
                                    </div>
                                </div>
                                <div class="row text-center mb-2">
                                    <div className="col-md-12">
                                        <button className="btn btn-sm" type="submit">
                                            click to see price
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <form onSubmit={handleSubmitData}>
                                <div class="row text-center">
                                    <div className="col-md-12">
                                        <p>
                                            <span>Total price : </span>
                                            <label
                                                style={{ color: 'green' }}
                                            >${price}
                                            </label>
                                            <input type="hidden" name="price" value={price} />
                                        </p>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div className="col-md-12">
                                        <p>
                                            <span>Payment method : </span>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="method" id="inlineRadio1" value="Paypal" />
                                                <label class="form-check-label" for="inlineRadio1">Paypal</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="method" id="inlineRadio2" value="Cash" />
                                                <label class="form-check-label" for="inlineRadio2">Cash</label>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div class="row m-3">
                                    <div className="col">
                                        <button className="btn btn-sm float-right" type="submit">
                                            order now
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5 mt-5">
                        <div class="card pt-3 mt-md-5" style={{ borderRadius: '50px' }}  >
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
                                            {car?.color}
                                        </span>
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
                                        <span className="font-weight-light font-italic">{car?.price}/hour</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Status: </span>
                                        <span className="font-weight-light font-italic">{car?.status}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Location: </span>
                                        <span className="font-weight-light font-italic">{car?.location}</span>
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
