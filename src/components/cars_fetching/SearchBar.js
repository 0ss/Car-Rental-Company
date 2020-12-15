
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/search_cars.css'
import * as Auth from '../../services/api/auth'
import * as Firestore from '../../services/api/firestore'
import { auth } from 'reactfire'


function SearchBar() {

    const [isAdmin , setIsAdmin] = useState(null);


    function checkAdmin(){
        Auth.isVerifiedUser(Auth.getUser()) && Firestore.getUser(Auth.getUid()).then((result) =>{
           if(result.status === "ok"){
               setIsAdmin(result.result?.isAdmin === true)
           }
        })
    }




    function setHash(type, value) {
        var hash = window.location.hash;

        if (hash.includes(type)) {
            console.log(hash.split(type + "=")[1].split("&")[0])
            hash = value === "All" ? hash.replace(type + "=" + hash.split(type + "=")[1].split("&")[0], "") : hash.replace(type + "=" + hash.split(type + "=")[1].split("&")[0], `${type}=${value}`)
        } else {
            hash += `${type}=${value}&`
        }

        window.location.hash = hash;
    }

    const handleSubmit = e => {
        e.preventDefault() // prevent reloading the page

        window.location.hash = e.target.value

    }


    if(isAdmin === null)
    checkAdmin()

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
                Toggle to filter results!
            </button>

           {isAdmin ?   <Link className="float-right btn btn-sm" to="/admin/addcar">
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
                                        <select name="color" class="form-control form-control-sm" onChange={((e => setHash("color", e.target.value)))}>
                                            <option>All</option>
                                            <option>Red</option>
                                            <option>Yellow</option>
                                            <option>Black</option>
                                            <option>White</option>

                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label>Model</label>
                                        <select class="form-control form-control-sm" onChange={((e => setHash("model", e.target.value)))}>
                                            <option>All</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label>Size</label>
                                        <select class="form-control form-control-sm" onChange={((e => setHash("size", e.target.value)))}>
                                            <option>All</option>
                                            <option>Small</option>
                                            <option>medium</option>
                                            <option>big</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label>Price From</label>
                                        <input class="form-control form-control-sm" onChange={((e => setHash("priceFrom", e.target.value)))} />
                                    </div>
                                    <div class="col-md-2">
                                        <label>Price To</label>
                                        <input
                                            class="form-control form-control-sm"
                                            onChange={((e => setHash("priceTo", e.target.value)))}
                                        />
                                    </div>
                                    {/* <div class="col-md-2">
                                         <button
                                             type="submit"
                                             class="btn btn-sm filter-search-btn"
                                         >
                                             Search
                                         </button>
                                     </div> */}
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
