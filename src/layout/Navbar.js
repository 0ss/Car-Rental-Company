import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/nav.css'
import * as Auth from '../services/api/auth'
import * as Firestore from '../services/api/firestore'
import {SiteLocations} from '../constants/Constants'

export default function Navbar() {
    
    const [isAdmin , setIsAdmin] = useState(null);


    function checkAdmin(){
        Auth.isVerifiedUser(Auth.getUser()) && Firestore.getUser(Auth.getUid()).then((result) =>{
           if(result.status === "ok"){
               setIsAdmin(result.result?.isAdmin === true)
           }
        })
    }


    function CheckAuth() {

        function Orders(){
            if(isAdmin){
                return(
                    <li className="nav-item navbar-nav mr-2">
                        <Link className="nav-link sign" to={SiteLocations.adminAllOrders}>
                            <span style={{ "fontSize": 14 }}></span>
                            All orders
                        </Link>
                    </li>
                )
            }else{
                return (
                    <li className="nav-item navbar-nav mr-2">
                        <Link className="nav-link sign" to={SiteLocations.myOrders}>
                            <span style={{ "fontSize": 14 }}></span>
                            My orders
                        </Link>
                    </li>
                )
            }
        }
    
        if(isAdmin === null)
        checkAdmin()

        const user = Auth.getUser();
        if (Auth.isVerifiedUser(user)) {
            return (
                <>
                 <Orders/>
                    <li className="nav-item navbar-nav mr-4">
                        <Link className="nav-link sign" to={SiteLocations.login + "?action=logout"}>
                            <span style={{ "fontSize": 14 }}></span>
                            Logout
                        </Link>
                    </li>
                </>
            )
        } else {

            return (
                <li className="nav-item navbar-nav mr-3">
                    <Link className="nav-link sign" to={SiteLocations.login}>
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
                <Link className="navbar-brand font-weight-bold" to={SiteLocations.home}>
                    <span style={{ "fontSize": 17 }}>🏢&#160;</span>
                    Luxury cars
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
                            <Link className="nav-link about" to={SiteLocations.home}>
                            <span style={{"fontSize":14}}>&#160; </span>
                           Home
                            </Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link contact" to={SiteLocations.searchCars}>
                            <span style={{"fontSize":14}}>&#160; </span>
                            Cars
                            </Link>
                        </li>
                        {CheckAuth()}
                    </ul>
                </div>
            </nav>
        </>
    )
}