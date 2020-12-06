import React,  {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/nav.css'
export default function Navbar() {

    const isLoggedOn = true // should be refactor with firebase conf

    const handleLogOut = e =>{
        // auth.signout()
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm ">
                <div className="navbar-brand font-weight-bold">
                    <span style={{"fontSize":17}}>🏢&#160;</span>
                 CarRentalCompany 
                 </div>
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
                            <Link className="nav-link about" to="/">
                            <span style={{"fontSize":14}}>&#160; </span>
                           Home
                            </Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link contact" to="/searchcars">
                            <span style={{"fontSize":14}}>&#160; </span>
                            Cars
                            </Link>
                        </li>
                        <li className="nav-item navbar-nav mr-3">
                            {isLoggedOn ? 
                                <button className="btn btn-sm" onClick={handleLogOut}>
                                    <span style={{"fontSize":12}}>
                                        Logout
                                    </span>                                
                                </button>
                            : 
                            <Link className="btn btn-sm "to="/login">
                                    <span style={{"fontSize":12}}>
                                        Sign Up/in 
                                    </span>
                            </Link>
                            
                            
                            }
                            
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}