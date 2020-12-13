import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/sign_styles.css'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import * as Auth from '../services/api/auth'

export default function Signup() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('');
    const [error, setError] = useState(null)



    function signup(email , password , name){
        Auth.signUp(email , password, name).then((result) =>{
            console.log(result)
            if(result.status === 'error'){
                setError(result.error)
            }else{
                Auth.setUid(result.userData.uid);
                Auth.setUser(result.userData);
                window.location.href = "/searchcars";
            }
        })
    }




    const handleChange = e => {
        const { name, value } = e.currentTarget
        if (name === 'email') {
            setEmail(value)
        }
        else if (name === 'password') {
            setPassword(value)
        }
        else if (name === 'passwordConf') {
            setPasswordConf(value)
        }
        else if (name === 'name') {
            setName(value)
        }
    }

    function Form() {

        const HandleSubmit = e => {
            e.preventDefault() // prevent reloading the page
            signup(email , password , name);
        }

        return (

            <form onSubmit={HandleSubmit}>
                <div className="form-group">
                    <label className="font-weight-bold" >name</label>
                    <input
                        type="text"
                        name='name'
                        value={name}
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Enter name"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold" >Email address</label>
                    <input
                        type="text"
                        name='email'
                        value={email}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                <small
                    id="passwordHelpBlock"
                    className="form-text text-muted font-italic"
                    style={{ 'fontSize': 11 }}
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
                        onChange={handleChange}

                    />
                </div>
                <button type="submit" className="btn btn-block mt-4">
                    Sign up
            </button>
                <small class="Have-account form-text text-muted mt-3 text-center">
                    Already have an account?
            <Link className="other-page-link" to="/login">
                        &#160; Log in.
            </Link>
                </small>
            </form>
        );
    }


    return (
        <>
            <Navbar />
            <div className="center">
                <div class="card" style={{ 'width': '22rem' }}>
                    <div class="card-body ">
                        {
                            error &&
                            <div class="alert alert-danger " style={{ 'fontSize': 13 }} role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                                {error}

                            </div>
                        }
                        <div className="cente">
                            <Form />    
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>

    )
}