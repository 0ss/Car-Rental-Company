import React from 'react'
import '../styles/main_styles.css'
import { Link } from 'react-router-dom'
import img1 from '../assets/images/lamb.jpg'
import img2 from '../assets/images/bug.jpg'
import img3 from '../assets/images/mas.jpg'
import { SiteLocations } from '../constants/Constants'

export default function Home() {
    return (
        <>
            <div class="jumbotron text-center mt-3 bg-white" style={{ backgroundColor: '#e9e9e9' }} >
                <h1 class="display-4">Car Rental Company</h1>
                <p class="lead">A place where you can rental your dream car!</p>
                <hr class="my-4" />
                <p>Our mission is to provide to the costumers any cars they wish with the lowest prices in the market</p>
                <Link className="btn btn-primary btn-lg" to={SiteLocations.searchCars} style={{ border: '0' }}>
                    Show me awesome cars!
                </Link>
            </div>

            <div className="text-center mb-3">
                <h1>
                    Some of our cars!
                </h1>
            </div>
            <Link to={SiteLocations.searchCars}>
            <div class="card-deck w-100 text-center mx-auto">
                <div class="card mb-4">
                    <img class="card-img-top" src={img1} alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Lamborghini</h5>
                        <p class="card-text">
                            <h5 class="car-price mb-3 mt-3 text-center">
                                $699/Day
                            </h5>
                        </p>
                    </div>
                </div>
                <div class="card mb-4">
                    <img class="card-img-top" src={img2} alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Bugatti  </h5>
                        <p class="card-text">
                            <h5 class="car-price mb-3 mt-3 text-center">
                                $799/Day
                            </h5>
                        </p>
                    </div>
                </div>
                <div class="card mb-4">
                    <img class="card-img-top" src={img3} alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Maserati  </h5>
                        <p class="card-text">
                            <h5 class="car-price mb-3 mt-3 text-center">
                                $499/Day
                            </h5>
                        </p>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}
