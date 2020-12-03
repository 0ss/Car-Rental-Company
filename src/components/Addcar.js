import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function Addcar() {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Add new car</h2>
                    </div>
                </div>
                <form>
                    <div className="card mx-auto" style={{width:'60%'}}>
                        <div className="card-body">
                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Car name</h6>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Dodge Ram" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Color</h6>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Dark Red" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Model</h6>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="2015" />
                                </div>
                            </div>
                            
                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Size</h6>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Large SUV" />
                                </div>
                            </div>

                            <hr />


                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Status</h6>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Good, not damaged" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Location</h6>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Alkhobar" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Price</h6>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="$328/85" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1 text-center">Download image</h6>
                                <div class="col-sm-10">

                                    <input 
                                    type="file" 
                                    id="file" 
                                    style={{display:'none'}}
                                    />
                                    <label for="file" className="text-center">
                                        Click me to pull out an image 📁 !
                                    </label>

                                </div>
                            </div>
                            
                            <hr />

                            <div class="form-group row text-center">
                                <div class="col-12">
                                    <button  className="btn btn-sm" style={{width:'120px'}}>Add car</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </form>                        
            </div>
            <Footer />
        </>
    )
}
