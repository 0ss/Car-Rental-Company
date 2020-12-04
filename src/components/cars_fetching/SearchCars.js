import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Car from '../../images/Dodge-Ram-2015.jpg'
import '../../styles/search_cars.css'
import '../../styles/main_styles.css'
import SearchItems from './SearchBar'
import Footer from '../../layout/Footer'
import SearchCarsUI from './SearchCarsUI'
export default function SearchCars() {

    
    const cars  = [
        
    ]
    /*
    above you should retreive all the object from the firebase and
    put them in cars array, then as you can see below, it dynamcilly going to take each object
    and put it on a column, and the whole array then is going to be passed to SearchCarsUI
    to add row, you dont really need to worry about this. just retrieve the object from firebase <3

    */


    const carsArray = cars.length ? cars.map(car=>{
        return(
        <div className="col-md-4 mb-4">
            <div class="card">
                <img class="card-img-top car-img" src={car.imageSrc} alt="Card cap"></img>
                <div class="card-body" >
                    <h5 class="card-title text-center">
                        <span className="car-color float-right">
                        </span>
                        {car.name}
                    </h5>
                    <h5 class="car-price mb-3 mt-3 text-center">
                        {car.price}
                    </h5>
                    <Link to="/">
                        <button className="btn float-right">
                            <span className="font-weight-bold">Buy now!</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        )
    }) : null
    
    return (
        <>
            <Navbar />
                <div className="container mt-3">
                    <SearchItems />

                    {
                        carsArray 
                        ? 
                        <SearchCarsUI  cars={carsArray} /> 
                        :
                        <h1 className="text-center">Cars inventory is empty</h1>
                    }

                </div>
            <Footer />
        </>
    )
}
