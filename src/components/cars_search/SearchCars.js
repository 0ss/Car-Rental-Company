import React, { useState } from 'react'
import '../../styles/search_cars.css'
import '../../styles/main_styles.css'
import SearchItems from './SearchBar'
import SearchCarsUI from './SearchCarsUI'
import * as Controllers from './Controllers'

export default function SearchCars() {

    const [cars, setCars] = useState(null);
    const [shownCars, setShownCars] = useState(null);
    const [tempHash, setTempHash] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);

    if (isAdmin === null) Controllers.checkAdmin(setIsAdmin)

    Controllers.checkHash(cars, tempHash, setTempHash, setShownCars, setCars)

    const carsArray = shownCars?.length ? shownCars.map(car => {
        return (
            <div key={car.id} className="col-md-4 mb-4">
                <div class="card">
                    <img class="card-img-top car-img" src={car.image} alt="Card cap"
                        style={{ height: '200px' }}
                    ></img>
                    <div class="card-body" >
                        <h5 class="card-title text-center">
                            <span className="car-color float-right" style={{ background: car.color }}>
                            </span>
                            {car.name}
                        </h5>
                        <h5 class="car-price mb-3 mt-3 text-center">
                            {car.price}$/Day
                    </h5>
                        {
                            isAdmin ? Controllers.AdminButtons(car) : Controllers.ClientButtons(car)
                        }
                    </div>
                </div>
            </div>
        )
    }) : null

    return (
        <>
            <div className="container mt-3">
                <SearchItems />
                {
                    carsArray
                        ?
                        <SearchCarsUI cars={carsArray} />
                        :
                        <h1 className="text-center">Cars inventory is empty</h1>
                }
            </div>

        </>
    )
}
