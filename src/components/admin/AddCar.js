import React, { useState } from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import * as Firestore from '../../services/api/firestore'
 


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }



export default function AddCar() {

   

    const [error, setError] = useState(null);
    var image = "";
    const uuid = Firestore.getUuid();

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        Firestore.uploadImage('cars_images' , uuid , file.type , base64).then((result) =>{
            console.log(result);

            if(result.status === "ok"){
                image = result.url
            }else{
                console.log(result);
            }
        })
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

        console.log(image.value)


        if (!name || !color || !model || !size || !status || !location || !price || !image) {
           if(!name)  setError("Please make sure to fill the 'Car Name' field")
           if(!color)  setError("Please make sure to fill the 'Color' field")
           if(!model)  setError("Please make sure to fill the 'Model' field")
           if(!size)  setError("Please make sure to fill the 'Size' field")
           if(!status)  setError("Please make sure to fill the 'Status' field")
           if(!location)  setError("Please make sure to fill the 'Location' field")
           if(!price)  setError("Please make sure to fill the 'Price' field")
           if(!image)  setError("Please make sure to fill the 'Car image' field")
           

            return
        } else {



            Firestore.addCar(name , color , model , size , status , location , price , image , uuid).then((result) => {
                if (result && result.status === "error") {
                    setError(result.error);
                } else {
                    window.location.href = "/manageCars"
                }
            })


        }
    }

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Add new car</h2>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="card mx-auto" style={{ width: '60%' }}>
                        <div className="card-body">


                        {
                            error &&
                            <div class="alert alert-danger " style={{'fontSize':13}} role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                                {error}
                                  
                            </div>
                        }

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Car name</h6>
                                <div class="col-sm-10">
                                    <input name="name" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Dodge Ram" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Color</h6>
                                <div class="col-sm-10">
                                    <input name="color" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Dark Red" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Model</h6>
                                <div class="col-sm-10">
                                    <input name="model" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="2015" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Size</h6>
                                <div class="col-sm-10">
                                    <input name="size" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Large SUV" />
                                </div>
                            </div>

                            <hr />


                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Status</h6>
                                <div class="col-sm-10">
                                    <input name="status" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Good, not damaged" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Location</h6>
                                <div class="col-sm-10">
                                    <input name="location" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Alkhobar" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1">Price</h6>
                                <div class="col-sm-10">
                                    <input name="price" type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="$328/85" />
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row">
                                <h6 class="col-sm-2 mt-1 text-center">Upload car image</h6>
                                <div class="col-sm-10">

                                    <input
                                        type="file"
                                        id="file"
                                        inputProps={{ accept: 'image/*' }}
                                        name="image"
                                        onChange={e => handleFileRead(e)}
                                        style={{ display: 'none' }}
                                    />
                                    <label for="file" className="text-center">
                                        Click me to pull out an image 📁 !
                                    </label>

                                </div>
                            </div>

                            <hr />

                            <div class="form-group row text-center">
                                <div class="col-12">
                                    <button className="btn btn-sm" style={{ width: '120px' }}>Add car</button>
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