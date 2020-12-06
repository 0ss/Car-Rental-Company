import React, {useState} from 'react'
import { Redirect } from "react-router-dom";
import Navbar from '../layout/Navbar'
import Car from '../images/Car.jpg'
import '../styles/main_styles.css'
import Footer from '../layout/Footer'

export default function ViewCar() {

    const [price, setPrice ] = useState(385.85)
    const [error, setError] = useState(null);

    const dateChange = e => {
        e.preventDefault()
        const from = e.target.from.value
        const to = e.target.to.value

        if(!from || !to){
            setError('Please put the dates before submit')
            return
        }
        const days = (new Date(to) - new Date(from) )/ (86400*1000)

        if(days<0){  // if days in minus
            setError('Please fill the dates correctly')
            return
        }
        setError('')
        
        setPrice(parseInt(days*385.85))
    }
    const handleSubmitData = e =>{
        e.preventDefault()
        const price = e.target.price.value
        const method = e.target.method.value
        if(!price || !method){
            setError('Please make sure to fill the form')
            return
        }
        setError('')
        console.log(e.target.price.value , e.target.method.value)
        return (<Redirect from="/viewcar" to="/successfulreservation"  />)

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
                                    <img class="card-img-top" src={Car} alt="Card cap" />
                                </div>
                            </div>
                            {
                            error &&
                            <div class="alert alert-danger text-center " style={{'fontSize':13}} role="alert">
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
                                                <input type="date" name="from"  />
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
                                        style={{color:'green'}}
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
                                        <span className="font-weight-light font-italic">Dodge ram</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Color: </span>
                                        <span className="font-weight-light font-italic">
                                            Red
                                        </span>
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
                                        <span>Status: </span>
                                        <span className="font-weight-light font-italic">New</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Location: </span>
                                        <span className="font-weight-light font-italic">Khobar</span>
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
