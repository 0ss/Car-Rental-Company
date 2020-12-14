
import React, { useState } from 'react'
import '../styles/main_styles.css'
import '../styles/my_orders.css'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Car from '../images/Dodge-Ram-2015.jpg'
import * as Firestore from '../services/api/firestore'

export default function MyOrders() {

    const [orders, setOrders] = useState(null);

    function getOrders() {
        Firestore.getUserOrders().then((result) => {
            if (result.status === "ok") {
                addCarsToOrders(result.result)
            }
        })
    }



   async function addCarsToOrders(orders) {
        for (const order of orders) {
          order.car = await  getCar(order.carId);
           
        }

        setOrders(orders);

    }

    async function getCar(id) {

        if (id && id.length > 3) {
            var result = await Firestore.getCar(id);
            if (result && result.status === "ok") {
                return result.result
            }

        }
        return "x";

    }

    // const orders  = [ // should be fetched from firebase
    //     {
    //         id:'1',
    //         car : 'dodssss',
    //         carImage: Car,
    //         color: 'black',
    //         model:'2015',
    //         paymentMethod:'paypal',
    //         rentFrom: '20/09/2020',
    //         rentTo: '20/31/2020',
    //         price: '300$',

    //     },
    //     {
    //         id:'2',
    //         car : 'dod',
    //         carImage: Car,
    //         color: 'black',
    //         model:'2015',
    //         paymentMethod:'paypal',
    //         rentFrom: '20/09/2020',
    //         rentTo: '20/31/2020',
    //         price: '300$',

    //     },
    // ]

    if (!orders)
        getOrders();

    const ordersArray = orders?.length ? orders?.map(order => {
        return (
                <tr key={order.id} >
                    <th scope="row">
                        {order?.id}
                    </th>
                    <td>{order?.car?.name}</td>
                    <td>
                        <img
                            className="car-order-img"
                            style={{ width: '200px' }}
                            src={order?.car?.image}
                            alt="Card cap"
                        />
                    </td>
                    <td>{order?.car?.color}</td>
                    <td>{order?.car?.model}</td>
                    <td>{order?.paymentMethod}</td>
                    <td>{order?.dateFrom}</td>
                    <td>{order?.dateTo}</td>
                    <td>{order?.price}</td>
                </tr>
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
