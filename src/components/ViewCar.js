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
    const [car, setCar] = useState(null);

    var fromDate = from, toDate = to, days


    console.log('from', from, 'to', to)



    function getCar(id) {

        if (id && id.length > 3)
            Firestore.getCar(id).then((result) => {
                console.log('resusssssslt', result)

                if (result && result.status === "ok") {
                    setCar(result.result)
                    console.log('resusssssslt', result)
                }
            })

    }

    //    function changePrice(){
    //     const pr = (parseInt(car.price) * days)
    //     console.log(pr)
    //     setPrice(pr)
    //     }


    // const dateChange = e => {
    //     e.preventDefault()
    //     setError('')

    //     console.log(e.target.from.value, e.target.to.value)
    //     console.log('from' , from, 'to', to, car.price)

    //     if (!e.target.from.value || !e.target.to.value) {
    //         setError('Please put the dates before submit')
    //         return
    //     }
    //     // setFrom(e.target.from.value)
    //     // setTo(e.target.to.value)
    //     console.log('from' , from, 'to', to)
    //     setDays(((new Date(to) - new Date(from)) / (86400 * 1000)))



    //     if (days < 0) {  // if days in minus
    //         setError('Please fill the dates correctly')
    //         return
    //     }
    //     setError('')

    //     // changePrice()
    // }
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

    const DateInput = ({ type, placeholder, ...props }) => (
        <input
            type={type}
            spellCheck="false"
            autoComplete="false"
            placeholder={placeholder}
            defaultValue={placeholder}
            onChange={props.Onchange}
            {...props}
        />
    )

    function changeFrom(e) {
        fromDate = (e.target.value)
        //    setFrom(e.target.value)
        if ((fromDate && toDate) || (from && to))
            calculatePrice()
    }

    function changeTo(e) {
        toDate = (e.target.value)
        // setTo(e.target.value)
        if ((fromDate && toDate) || (from && to))
            calculatePrice()
    }


    function calculatePrice() {

        days = (Math.floor((Date.parse(toDate) - Date.parse(fromDate)) / 86400000))

        if (days <= 0) {  // if days in minus
            setError('Please fill the dates correctly')
            setFrom(null)
            setTo(null)
            return
        } else {
            setPrice(car.price * days)
            setTo(toDate)
            setFrom(fromDate)

        }


    }

    if (!car)
        getCar(carId);

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
                                            <img class="card-img-top" src={car?.image} alt="Card cap" /> :
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
                            <div class="row mt-3  text-center">
                                <div className="col-md-6">
                                    <p>
                                        <span>Rent from: </span>
                                        <DateInput
                                            type="date"
                                            name="from"
                                            placeholder={from}
                                            Onchange={changeFrom}
                                        />
                                    </p>
                                </div>
                                <div className="col-md-6 ">
                                    <p>
                                        <span>to: </span>
                                        <DateInput
                                            type="date"
                                            name="to"
                                            placeholder={to}
                                            Onchange={changeTo}
                                        />
                                    </p>
                                </div>
                            </div>
                            {/* <div class="row text-center mb-2">
                                    <div className="col-md-12">
                                        <button className="btn btn-sm" type="submit">
                                            click to see price
                                        </button>
                                    </div>
                                </div> */}
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
                                        <span className="font-weight-light font-italic">{car?.price}/Day</span>
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
