import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/sign_styles.css'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('');
    // const [error, setError] = useState(null)

    const handleSubmit = e =>{
        e.preventDefault();
       
    }

    const handleChange = e =>{
        const {name, value} = e.currentTarget
        if(name==='email'){
            setEmail(value)
        }
        else if(name==='password'){
            setPassword(value)
        }
        else if(name==='passwordConf'){
            setPasswordConf(value)
        }
    }
  

    return (
        <>
            <Navbar />
            <div className="center"> 
                <div class="card" style ={{'width':'22rem'}}>
                    <div class="card-body">
                        <form onSubmit = {handleSubmit}>
                            <div className="form-group">
                                <label className="font-weight-bold" >Email address</label>
                                <input
                                type="text"
                                name='email'
                                value={email}
                                className="form-control"
                                id="exampleInputEmail1" 
                                placeholder="Enter email" 
                                onChange = {handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Password</label>
                                <input
                                type="password" 
                                name="password"
                                value={password}
                                className="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                onChange = {handleChange}                            
                                />
                            </div>
                            <small 
                            id="passwordHelpBlock" 
                            className="form-text text-muted font-italic"
                            style={{'fontSize':11}}
                            >
                            Your password must be 6-20 characters long, contain letters and numbers.
                            </small>
                            <div className="form-group">
                                <label className="font-weight-bold mt-2">Password Confirmation</label>
                                <input
                                type="password" 
                                name='passwordConf'
                                value={passwordConf}
                                className="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                onChange = {handleChange}                            

                                />
                            </div>
                            <button type="submit" className="btn btn-block mt-4">
                                Sign up
                            </button>
                            <small  class="Have-account form-text text-muted mt-3 text-center">
                            Already have an account? 
                            <Link className="other-page-link" to="/login">
                                &#160; Log in.
                            </Link>
                            </small>
                        </form>    
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}