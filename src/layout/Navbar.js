import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'
import * as Auth from '../services/api/auth'
export default function Navbar() {


    function CheckAuth() {

        const user = Auth.getUser();
        if (Auth.isVerifiedUser(user)) {
            return (
                <li className="nav-item navbar-nav mr-3">
                    <Link className="nav-link sign" to="/profile">
                        <span style={{ "fontSize": 14 }}>⚙️&#160; </span>
                        {user.displayName}
                    </Link>

                </li>
            )
        } else {

            return (
                <li className="nav-item navbar-nav mr-3">
                    <Link className="nav-link sign" to="/login">
                        <span style={{ "fontSize": 14 }}>⚙️&#160; </span>
            Sign Up/In
        </Link>

                </li>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm ">
                <Link className="navbar-brand font-weight-bold" to="/">
                    <span style={{ "fontSize": 17 }}>🏢&#160;</span>
                 CarRentalCompany
                 </Link>
                <button
                    className="navbar-toggler navbar-light border"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-nav ml-auto">
                        <li className="nav-item active mr-3">
                            <a className="nav-link about" href="#">
                                <span style={{ "fontSize": 14 }}>🏠&#160; </span>
                           Home
                            </a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link contact" href="/searchcars">
                                <span style={{ "fontSize": 14 }}>🚘&#160; </span>
                            Cars
                            </a>
                        </li>
                        {CheckAuth()}
                    </ul>
                </div>
            </nav>
        </>
    )
}