import React, { useState } from 'react'
import Navbar from '../../styles/layout/Navbar'
import '../../styles/main_styles.css'
import Footer from '../../styles/layout/Footer'
import * as Firestore from "../../services/api/firestore"
import { getParameterByName } from '../admin/Controllers'
import { SiteLocations } from '../../constants/Constants'
import Controller from './Controllers'
import { getSetCar } from '../order/Controllers'
import { DateInput } from '../../constants/Constants'

export default function ViewCar() {
    const carId = getParameterByName("id")
    const [price, setPrice] = useState(0.0)
    const [error, setError] = useState(null);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [car, setCar] = useState(null);

    const controller = new Controller(car?.price);

    const handleSubmitData = e => {
        e.preventDefault()
        const price = e.target.price.value
        const method = e.target.method.value
        if (!price) {
            setError('Please select rent dates')
            return
        }
        if (!method) {
            setError('Please select a payment method')
            return
        }
        if (!from || !to) {
            setError('Please select a correct dates')
            return
        }
        setError('')

        const orderId = Firestore.getUuid();
        Firestore.addOrder(orderId, carId, price, controller.days, from, to, method).then((result) => {
            if (result && result.status === "error") {
                setError(result.error)
                window.location.href = SiteLocations.login
            } else {
                window.location.href = `${SiteLocations.viewReservation}?id=${orderId}`
            }
        })

    }

    if (!car)
        getSetCar(carId, setCar);


    return (
        <>
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
                                            Onchange={(e) => controller.changeFrom(e, from, to, setError, setFrom, setTo, setPrice)}
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
                                            Onchange={(e) => controller.changeTo(e, from, to, setError, setFrom, setTo, setPrice)}
                                        />
                                    </p>
                                </div>
                            </div>
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
                                                <input class="form-check-input" type="radio" name="method" id="inlineRadio1" value="PayPal" />
                                                <label class="form-check-label" for="inlineRadio1">PayPal</label>
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

        </>
    )
}
