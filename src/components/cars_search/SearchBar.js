
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/search_cars.css'
import * as Controllers from './Controllers'
import { SiteLocations } from '../../constants/Constants'
import * as CarOptions from '../../constants/CarsOptions'

function SearchBar() {

    const [isAdmin, setIsAdmin] = useState(null);


    const handleSubmit = e => {
        e.preventDefault() // prevent reloading the page
        window.location.hash = e.target.value
    }


    if (isAdmin === null)
        Controllers.checkAdmin(setIsAdmin)

    return (
        <div id="accordion" className="search-container mb-3">
            <button
                class="btn btn-sm"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ width: '10' }}
            >
                Toggle to filter
            </button>

            {isAdmin ? <Link className="float-right btn btn-sm" to={SiteLocations.adminAddCar}>
                Add car
            </Link> : <></>}


            <div class="card mt-2" style={{ border: 0 }}>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <div className="search-container mb-3">
                            <form class="form mb-3" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div class="col-md-2">
                                        <label>Color</label>
                                        <select name="color" class="form-control form-control-sm" onChange={((e => Controllers.setHash("color", e.target.value)))}>
                                            <option>All</option>
                                            <CarOptions.CarsColorsOptions />

                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label>Model</label>
                                        <select class="form-control form-control-sm" onChange={((e => Controllers.setHash("model", e.target.value)))}>
                                            <option>All</option>
                                            <CarOptions.CarsModelsOptions />
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label>Size</label>
                                        <select class="form-control form-control-sm" onChange={((e => Controllers.setHash("size", e.target.value)))}>
                                            <option>All</option>
                                            <CarOptions.CarsSizesOptions />
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label>Price From</label>
                                        <input class="form-control form-control-sm" onChange={((e => Controllers.setHash("priceFrom", e.target.value)))} />
                                    </div>
                                    <div class="col-md-2">
                                        <label>Price To</label>
                                        <input
                                            class="form-control form-control-sm"
                                            onChange={((e => Controllers.setHash("priceTo", e.target.value)))}
                                        />
                                    </div>
                                </div>
                            </form>
                            <div className="row text-center">
                                <div className="col-12">
                                    <small>
                                        All prices are in us dollar.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SearchBar;
