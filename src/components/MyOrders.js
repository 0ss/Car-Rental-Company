
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/main_styles.css'
import '../styles/my_orders.css'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Car from '../images/Dodge-Ram-2015.jpg'

export default function MyOrders() {

    const orders  = [ // should be fetched from firebase
        {
            id:'1',
            car : 'dodssss',
            carImage: Car,
            color: 'black',
            model:'2015',
            paymentMethod:'paypal',
            rentFrom: '20/09/2020',
            rentTo: '20/31/2020',
            price: '300$',

        },
        {
            id:'2',
            car : 'dod',
            carImage: Car,
            color: 'black',
            model:'2015',
            paymentMethod:'paypal',
            rentFrom: '20/09/2020',
            rentTo: '20/31/2020',
            price: '300$',

        },
    ]
    const ordersArray = orders.length ? orders.map(car => {
        return(
            <>
            <tr>
                <th scope="row">
                    {car.id}
                </th>
                <td>{car.car}</td>
                <td>
                    <img 
                    className="car-order-img"
                    style={{width:'200px'}}
                    src={car.carImage} 
                    alt="Card cap"    
                    /> 
                </td>
                <td>{car.color}</td>
                <td>{car.model}</td>
                <td>{car.paymentMethod}</td>
                <td>{car.rentFrom}</td>
                <td>{car.rentTo}</td>
                <td>{car.price}</td>
            </tr>
            </>
        )
    }) : null
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-4 ">
                    <div className="col">
                        <h2>My orders</h2>
                    </div>
                </div>
                <div className="table-responsive-sm">
                    <table class="table table-sm table-bordered text-center">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Car</th>
                            <th scope="col">Car Image</th>
                            <th scope="col">Color</th>
                            <th scope="col">Model</th>
                            <th scope="col">Payment method</th>
                            <th scope="col">Rent from</th>
                            <th scope="col">to</th>
                            <th scope="col">price</th>
                            </tr>
                        </thead>
                        <tbody >
                        {ordersArray}
                        </tbody>
                    </table>
                </div> 
            </div>
            <Footer />
        </>
    )
}
