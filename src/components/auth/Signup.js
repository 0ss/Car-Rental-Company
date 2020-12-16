import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sign_styles.css'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import * as Auth from '../../services/api/auth'
import { SiteLocations } from '../../constants/Constants'

export default function Signup() {

    const [error, setError] = useState(null)

    function signup(email, password, name) {
        Auth.signUp(email, password, name).then((result) => {
            if (result.status === 'error') {
                console.log("error")
                setError(result.error)
            } else {
                Auth.setUid(result.userData.uid);
                Auth.setUser(result.userData);
                window.location.href = SiteLocations.searchCars;
            }
        })
    }

    const HandleSubmit = e => {
        e.preventDefault() // prevent reloading the page
        setError('')
        const email = (e.target.email.value)
        const password = (e.target.password.value)
        const passwordConf = (e.target.passwordConf.value)
        const name = (e.target.name.value)

        if (!email || !password || !name || !passwordConf) {
            setError('please complete the form')
            return
        }
        if (password !== passwordConf) {
            setError('password do not match')
            return
        }
        signup(email, password, name);
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
                        <div >
                            <form onSubmit={HandleSubmit}>
                                <div className="form-group">
                                    <label className="font-weight-bold" >name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        className="form-control"
                                        id="exampleInputName"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold" >Email address</label>
                                    <input
                                        type="text"
                                        name='email'
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
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
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-block mt-4">
                                    Sign up
                        </button>
                                <small class="Have-account form-text text-muted mt-3 text-center">
                                    Already have an account?
                        <Link className="other-page-link" to={SiteLocations.login}>
                                        &#160; Log in.
                        </Link>
                                </small>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>

    )
}