import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/navbar'
import Car from '../../images/Dodge-Ram-2015.jpg'
import '../../styles/search_cars.css'
import '../../styles/main_styles.css'
import SearchItems from './search_bar'
import Footer from '../../layout/footer'

export default function SearchCars() {

    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <SearchItems />
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top car-img" src={Car} alt="Card cap"></img>
                            <div class="card-body" >
                                <h5 class="card-title text-center">
                                    <span className="car-color float-right">
                                    </span>
                                    Dodge Ram , 2015
                                </h5>
                                <h5 class="car-price mb-3 mt-3 text-center">
                                    $328.85
                                </h5>
                                <Link to="/">
                                    <button className="btn float-right">
                                        <span className="font-weight-bold">Buy now!</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top car-img" src={Car} alt="Card cap"></img>
                            <div class="card-body" >
                                <h5 class="card-title text-center">
                                    <span className="car-color float-right">
                                    </span>
                                    Dodge Ram , 2015
                                </h5>
                                <h5 class="car-price mb-3 mt-3 text-center">
                                    $328.85
                                </h5>
                                <Link to="/">
                                    <button className="btn float-right"  >
                                        <span className="font-weight-bold">Buy now!</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top car-img" src={Car} alt="Card cap"></img>
                            <div class="card-body" >
                                <h5 class="card-title text-center">
                                    <span className="car-color float-right">
                                    </span>
                                    Dodge Ram , 2015
                                </h5>
                                <h5 class="car-price mb-3 mt-3 text-center">
                                    $328.85
                                </h5>
                                <Link to="/">
                                    <button className="btn float-right" >
                                        <span className="font-weight-bold">Buy now!</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top car-img" src={Car} alt="Card cap"></img>
                            <div class="card-body" >
                                <h5 class="card-title text-center">
                                    <span className="car-color float-right">
                                    </span>
                                    Dodge Ram , 2015
                                </h5>
                                <h5 class="car-price mb-3 mt-3 text-center">
                                    $328.85
                                </h5>
                                <Link to="/">
                                    <button className="btn float-right"  >
                                        <span className="font-weight-bold">Buy now!</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top car-img" src={Car} alt="Card cap"></img>
                            <div class="card-body" >
                                <h5 class="card-title text-center">
                                    <span className="car-color float-right">
                                    </span>
                                    Dodge Ram , 2015
                                </h5>
                                <h5 class="car-price mb-3 mt-3 text-center">
                                    $328.85
                                </h5>
                                <Link to="/">
                                    <button
                                        className="btn float-right"
                                    >
                                        <span className="font-weight-bold">Buy now!</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div class="card">
                            <img class="card-img-top car-img" src={Car} alt="Card cap"></img>
                            <div class="card-body" >
                                <h5 class="card-title text-center">
                                    <span className="car-color float-right">
                                    </span>
                                    Dodge Ram , 2015
                                </h5>
                                <h5 class="car-price mb-3 mt-3 text-center">
                                    $328.85
                                </h5>
                                <Link to="/">
                                    <button
                                        className="btn float-right"
                                    >
                                        <span className="font-weight-bold">Buy now!</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
