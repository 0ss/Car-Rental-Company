import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import Car from '../../images/Dodge-Ram-2015.jpg'
import '../../styles/search_cars.css'
import '../../styles/main_styles.css'
import SearchItems from './SearchBar'
import Footer from '../../layout/Footer'
import SearchCarsUI from './SearchCarsUI'
import * as Firestore from '../../services/api/firestore'




function getSearchOptions() {
    const hash = window.location.hash


    var searchOptions = {};

    searchOptions.color = getHashItem(hash, "color")
    searchOptions.size = getHashItem(hash, "size")
    searchOptions.model = getHashItem(hash, "model")
    searchOptions.priceFrom = getHashItem(hash, "priceFrom")
    searchOptions.priceTo = getHashItem(hash, "priceTo")

    return searchOptions;
}

function getHashItem(hash, type) {
    return hash?.split(type + "=")[1]?.split("&")[0];
}

function filterCars(cars) {
    const options = getSearchOptions();
    var filteredCars = [];

    const isColorMatch = ((car) => car.color?.toLowerCase() === options.color?.toLowerCase());
    const isModelMatch = ((car) => car.model?.toLowerCase() === options.model?.toLowerCase());
    const isSizeMatch = ((car) => car.size?.toLowerCase() === options.size?.toLowerCase());
    const isPriceMatch = ((car) => parseFloat(car.price) >= parseFloat(options.priceFrom) && parseFloat(car.price) <= parseFloat(options.priceTo));


    if (options.color && options.model && options.size && options.priceTo && options.priceFrom) {
        for (const car of cars) {
            if (isColorMatch(car) && isModelMatch(car) && isSizeMatch(car) && isPriceMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.color && options.model && options.size) {
        for (const car of cars) {
            if (isColorMatch(car) && isModelMatch(car) && isSizeMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.color && options.model) {
        for (const car of cars) {
            if (isColorMatch(car) && isModelMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.size && options.model) {
        for (const car of cars) {
            if (isSizeMatch(car) && isModelMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.color && options.size) {
        for (const car of cars) {
            if (isColorMatch(car) && isSizeMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.color && options.priceFrom && options.priceTo) {
        for (const car of cars) {
            if (isColorMatch(car) && isPriceMatch(car)) {
                filteredCars.push(car);
            }

        }
    }
    else if (options.model && options.priceFrom && options.priceTo) {
        for (const car of cars) {
            if (isModelMatch(car) && isPriceMatch(car)) {
                filteredCars.push(car);
            }
        }
    } else if (options.size && options.priceFrom && options.priceTo) {
        for (const car of cars) {
            if (isSizeMatch(car) && isPriceMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.color) {
        for (const car of cars) {
            if (isColorMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.model) {
        for (const car of cars) {
            if (isModelMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.size) {
        for (const car of cars) {
            if (isSizeMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else if (options.priceFrom && options.priceTo) {
        for (const car of cars) {
            if (isPriceMatch(car)) {
                filteredCars.push(car);
            }

        }
    } else {
        filteredCars = cars;
    }

    return [...new Set(filteredCars)];


}

export default function SearchCars() {
    
    const [cars, setCars] = useState(null);
    const [shownCars, setShownCars] = useState(null);
    const [tempHash, setTempHash] = useState(null);

    function getCars() {
        Firestore.getCars().then((result) => {
            console.log(result)
            if (result.status === "ok") {
                setCars(result.result)
                setShownCars(filterCars(result.result))
            }
        })
    }

    function checkHash() {
        if (tempHash !== window.location.hash) {
            setTempHash(window.location.hash);
            if (!cars)
                getCars();
            else {
                setShownCars(filterCars(cars))
            }
            console.log("change in hash!")
        }
    }


    checkHash()

    const carsArray = shownCars?.length ? shownCars.map(car => {
        return (
            <div className="col-md-4 mb-4">
                <div class="card">
                    <img class="card-img-top car-img" src={car.image} alt="Card cap"></img>
                    <div class="card-body" >
                        <h5 class="card-title text-center">
                            <span className="car-color float-right">
                            </span>
                            {car.name}
                        </h5>
                        <h5 class="car-price mb-3 mt-3 text-center">
                            {car.price}$
                    </h5>
                        <Link to={`/viewcar?id=${car.id}`}>
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
                        <SearchCarsUI cars={carsArray} />
                        :
                        <h1 className="text-center">Cars inventory is empty</h1>
                }

            </div>
            <Footer />
        </>
    )
}
