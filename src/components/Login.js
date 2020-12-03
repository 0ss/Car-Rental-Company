import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import   '../Styles/signstyles.css'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleChange = e =>{
        const {name,value} = e.currentTarget
        console.log(name,value)
        if(name=='email'){
            setEmail(value)
        }
        else if(name=='password'){
            setPassword(value)
        }
       
    }

    return (
        <>
            <Navbar />
            <div className="center"> 
                <div class="card" style ={{'width':'22rem'}}>
                    <div class="card-body ">
                        <div class="alert alert-danger " style={{'fontSize':15}} role="alert">
                           The email or password is not correct! :( 
                        </div>
                        <form>
                            <div className="form-group">
                                <label className="font-weight-bold" >Email address</label>
                                <input
                                type="email"
                                name="email" 
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
                                onChange = {e => handleChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-block btn-dark mt-4">
                            Sign in
                            </button>
                            <small  class="Have-account form-text text-muted mt-3 text-center">
                            Don't have an account?  
                            
                                <Link to="/signup">
                                &#160; Sign up.
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