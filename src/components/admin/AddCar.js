import React, { useState } from 'react'
import * as Firestore from '../../services/api/firestore'
import * as Controllers from './Controllers'
import * as CarsOptions from '../../constants/CarsOptions'
import { SiteLocations } from '../../constants/Constants'
import MapPicker from 'react-google-map-picker'
import {googleMapsApiKey} from '../../constants/Constants'

export default function AddCar() {

    const [locationData, setLocationData] = useState({ lat: 26.307216, lng: 50.146151 });
    const [zoom, setZoom] = useState(15);

    function GoogleMap() {
        return (
            <>
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <div class="form-group">
                                <MapPicker defaultLocation={locationData}
                                    zoom={zoom}
                                    style={{ height: '350px' }}
                                    onChangeLocation={((lat, lng) => { setLocationData({ lat: lat, lng: lng }) })}
                                    onChangeZoom={((zoom) => { setZoom(zoom) })}
                                    apiKey={googleMapsApiKey}
                                    />
                            </div>
                            <button className="btn" onClick={((e) => { Controllers.getCurrentLocation(e, setLocationData) })}>Get current Location</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }


    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const car = JSON.parse(Controllers.getParameterByName('car'))
    const uuid = Firestore.getUuid();

    if (car && !editMode) {
        setEditMode(true);
        setImage(car.image)
    }

    const handleSubmit = e => {
        e.preventDefault() // prevent reloading the page

        const name = e.currentTarget.name.value
        const color = e.currentTarget.color.value
        const model = e.currentTarget.model.value
        const size = e.currentTarget.size.value
        const status = e.currentTarget.status.value
        const location = e.currentTarget.location.value
        const price = e.currentTarget.price.value


        if (!name || !color || !model || !size || !status || !location || !price || !image) {
            if (!name) setError("Please make sure to fill the 'Car Name' field")
            if (!color) setError("Please make sure to fill the 'Color' field")
            if (!model) setError("Please make sure to fill the 'Model' field")
            if (!size) setError("Please make sure to fill the 'Size' field")
            if (!status) setError("Please make sure to fill the 'Status' field")
            if (!location) setError("Please make sure to fill the 'Location' field")
            if (!price) setError("Please make sure to fill the 'Price' field")
            if (!image) setError("Please make sure to fill the 'Car image' field")

            return

        } else
            Firestore.addCar(name, color, model, size, status, location, price, image, editMode ? car.id : uuid, locationData).then((result) => {
                if (result && result.status === "error")
                    setError(result.error);
                else
                    window.location.href = SiteLocations.searchCars
            })
    }

    function ImagePlaceholder() {
        if (image) {
            return (
                <img class="card-img-top car-img" src={image} alt="car" />
            )
        } else {
            return (
                <label for="file" className="text-center">
                    Click me to pull out an image 📁 !
                </label>
            )
        }
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 text-center">
                        {
                            editMode ? <h2>Edit car</h2> : <h2>Add new car</h2>
                        }

                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="card mx-auto" style={{ width: '60%' }}>
                        <div className="card-body">


                            {
                                error &&
                                <div class="alert alert-danger " style={{ 'fontSize': 13 }} role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    {error}

                                </div>
                            }
                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Car name</h6>
                                <div class="col-sm-10">
                                    <input defaultValue={editMode ? car?.name : ''} name="name" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Dodge Ram" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Color</h6>
                                <div class="col-sm-10">
                                    <select defaultValue={editMode ? car?.color : ''} name="color" type="text" class="form-control form-control-sm" id="colFormLabelSm" >
                                        <CarsOptions.CarsColorsOptions />
                                    </select>
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Model</h6>
                                <div class="col-sm-10">
                                    <select defaultValue={editMode ? car?.model : ''} name="model" type="text" class="form-control form-control-sm" id="colFormLabelSm" >
                                        <CarsOptions.CarsModelsOptions />
                                    </select>
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Size</h6>
                                <div class="col-sm-10">
                                    <select defaultValue={editMode ? car?.size : ''} name="size" type="text" class="form-control form-control-sm" id="colFormLabelSm" >
                                        <CarsOptions.CarsSizesOptions />
                                    </select>
                                </div>
                            </div>

                            <hr />


                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Status</h6>
                                <div class="col-sm-10">
                                    <select defaultValue={editMode ? car?.status : ''} name="status" type="text" class="form-control form-control-sm" id="colFormLabelSm" >
                                        <CarsOptions.CarsStatusOptions />
                                    </select>

                                </div>
                            </div>

                            <hr />


                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Price/Day</h6>
                                <div class="col-sm-10">
                                    <input defaultValue={editMode ? car?.price : ''} name="price" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="328" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Location</h6>
                                <div class="col-sm-10">
                                    <select defaultValue={editMode ? car?.location : ''} name="location" type="text" class="form-control form-control-sm" id="colFormLabelSm" >
                                        <CarsOptions.CarsLocationsOptions />
                                    </select>

                                </div>
                            </div>

                            <hr />


                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Pick up location</h6>
                                <div class="col-sm-10">
                                    <GoogleMap />
                                </div>
                            </div>

                            <hr />


                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1 text-center">Car image</h6>
                                <div class="col-sm-10">

                                    <input
                                        type="file"
                                        id="file"
                                        inputProps={{ accept: 'image/*' }}
                                        name="image"
                                        onChange={e => Controllers.handleFileRead(e, uuid, setImage, setError)}
                                        style={{ display: 'none' }}
                                    />
                                    <ImagePlaceholder />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row text-center">
                                <div class="col-12">
                                    {
                                        editMode ? <button className="btn btn-sm" style={{ width: '120px' }}>Edit</button> : <button className="btn btn-sm" style={{ width: '120px' }}>Add</button>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}
