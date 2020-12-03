import React from 'react'
import '../../Styles/searchcars.css'


function Searchbar() {
    return (
        <div id="accordion" className="search-container mb-3">
            <button 
            class="btn btn-sm" 
            data-toggle="collapse" 
            data-target="#collapseOne" 
            aria-expanded="true" 
            aria-controls="collapseOne"
            style={{width:'10'}}
            >
                    Toggle to filter results!
                </button>
            <div class="card mt-2" style={{border:0}}>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <div className="search-container mb-3">
                            <form class="form mb-3">
                                <div className="row">
                                        <div class="col-md-2">
                                            <label>Color</label>
                                            <select class="form-control form-control-sm">
                                                    <option>Red</option>
                                                    <option>Yellow</option>
                                                    <option>Black</option>
                                                    <option>White</option>

                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <label>Model</label>
                                            <select class="form-control form-control-sm">
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
                                            <select class="form-control form-control-sm">
                                                <option>Small select</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <label>Price From</label>
                                        <input class="form-control form-control-sm"  />
                                        </div>
                                        <div class="col-md-2">
                                            <label>Price To</label>
                                            <input 
                                            class="form-control form-control-sm"   
                                            />
                                        </div>
                                        <div class="col-md-2">
                                            <button 
                                            type="submit" 
                                            class="btn btn-sm filter-search-btn"
                                            >
                                            Search
                                        </button>
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
  
export default Searchbar;
