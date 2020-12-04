import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import   '../styles/sign_styles.css'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'

export default function ResetPassword() {

    const [error, setError] = useState(null);

    const handleSubmit = e =>{
        e.preventDefault() // prevent reloading the page
        const email = e.currentTarget.email.value
        if(!email){
            setError('Please make sure to write your email')
            return
        }
        /*
        if not error then send the data to firebase,
        if error happens then but it inside
        setError(...)
        */
       
    }

    return (
        <>
            <Navbar />
            <div className="center"> 
                <div class="card" style ={{'width':'22rem'}}>
                    <div class="card-body ">
                        {
                            error &&
                            <div class="alert alert-danger " style={{'fontSize':13}} role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                                {error}
                                  
                            </div>
                        }
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="font-weight-bold " >Email address</label>
                                    <small  class="Have-account form-text text-muted mb-2">
                                    Please enter your email address to help us find your account 
                                    </small>
                                <input
                                type="email"
                                name="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="YouLookNiceToday@hotmail.com"
                                />
                            </div>
                            <button type="submit" className="btn btn-block mt-4">
                                Sign up
                            </button>
                            <small  class="Have-account form-text text-muted mt-3 text-center">
                            Already know your password? 
                            <Link className="other-page-link" to="/login">
                                &#160; Log in.
                            </Link>
                            </small>
                        </form>    
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}	
