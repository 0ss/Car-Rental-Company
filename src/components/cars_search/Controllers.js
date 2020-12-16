import * as Auth from '../../services/api/auth'
import * as Firestore from '../../services/api/firestore'
import { SiteLocations } from '../../constants/Constants'
import { Link } from 'react-router-dom'

/** Checks if the user is admin **/
export function checkAdmin(callBack) {
    Auth.isVerifiedUser(Auth.getUser()) && Firestore.getUser(Auth.getUid()).then((result) => {
        if (result.status === "ok") {
            callBack(result.result?.isAdmin === true)
        }
    })
}

/** Sets url hash(used to handel the user inputs without refreshing the page) **/
export function setHash(type, value) {
    var hash = window.location.hash;
    if (hash.includes(type)) {
        console.log(hash.split(type + "=")[1].split("&")[0])
        hash = value === "All" ? hash.replace(type + "=" + hash.split(type + "=")[1].split("&")[0], "") : hash.replace(type + "=" + hash.split(type + "=")[1].split("&")[0], `${type}=${value}`)
    } else if (value !== "All") {
        hash += `${type}=${value}&`
    }
    window.location.hash = hash;
}

/** Get url hash items **/
export function getHashItem(hash, type) {
    return hash?.split(type + "=")[1]?.split("&")[0];
}

/** Check if the user change the search values **/
export function checkHash(cars, tempHash, setTempHashCallback, setShownCarsCallback, setCarsCallback) {
    if (tempHash !== window.location.hash) {
        setTempHashCallback(window.location.hash);
        if (!cars)
            getCars(setCarsCallback, setShownCarsCallback);
        else {
            setShownCarsCallback(filterCars(cars))
        }
        console.log("change in hash!")
    }
}

export function getSearchOptions() {
    const hash = window.location.hash

    var searchOptions = {};

    searchOptions.color = getHashItem(hash, "color")
    searchOptions.size = getHashItem(hash, "size")
    searchOptions.model = getHashItem(hash, "model")
    searchOptions.priceFrom = getHashItem(hash, "priceFrom")
    searchOptions.priceTo = getHashItem(hash, "priceTo")

    return searchOptions;
}

/** Filters array of car objects  **/
export function filterCars(cars) {
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

    return [...new Set(filteredCars)]; // Remove any duplications


}

/** Get cars array from firestore **/
function getCars(setCarsCallback, setShownCarsCallback) {
    Firestore.getCars().then((result) => {
        console.log(result)
        if (result.status === "ok") {
            setCarsCallback(result.result)
            setShownCarsCallback(filterCars(result.result))
        }
    })
}

/** Deletes a car from firestore **/
export function deleteCar(car) {
    if (window.confirm(`Are sure you want to delete ${car.name} car?\n\nNOTE:YOU CAN NOT UNDO THIS ACTION`)) {
        Firestore.deleteCar(car.id).then((result) => {
            if (result.status === "ok") {
                window.location.href = SiteLocations.searchCars
            } else {
                window.alert(result.result)
            }
        })
    }
}

function getCarToEdit(car) {
    car.locationUrl = ""
    return car;
}

export function AdminButtons(car) {
    return (
        <>
            <Link to={`${SiteLocations.adminAddCar}?car=${JSON.stringify(getCarToEdit(car))}`}>
                <button className="btn float-right ml-3">
                    <span className="font-weight-bold">Edit</span>
                </button>
            </Link>

            <button className="btn float-right" onClick={() => deleteCar(car)} >
                <span className="font-weight-bold">Delete</span>
            </button>
        </>
    )
}

export function ClientButtons(car) {
    return (
        <Link to={`${SiteLocations.viewCar}?id=${car.id}`}>
            <button className="btn float-right">
                <span className="font-weight-bold">Buy now!</span>
            </button>
        </Link>
    )
}