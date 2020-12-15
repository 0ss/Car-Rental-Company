
import React, { useState } from 'react'
import '../styles/main_styles.css'
import '../styles/my_orders.css'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import * as Firestore from '../services/api/firestore'
import SearchCarsUI from './cars_fetching/SearchCarsUI'

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
            order.car = await getCar(order.carId);

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
        return undefined;

    }


    if (!orders)
        getOrders();



    const carsArray = orders?.length ? orders.map(order => {
        return (
            <div key={order.id} className="col-md-4 mb-4">
                <div class="card">
                    <img class="card-img-top car-img" src={order.car.image} alt="Card cap"></img>
                    <div class="card-body" >
                        <h5 class="card-title text-center">
                            {order.car.name}
                        </h5>
                        <h5 class="card-title text-center">
                            From:{order.dateFrom}<br />
                                To:{order.dateTo}
                        </h5>
                        <h5 class="car-price mb-3 mt-3 text-center">
                            Total: {order.price}$
                    </h5>
                        <Link to={`/viewReservation?id=${order.id}`}>
                            <button className="btn float-right">
                                <span className="font-weight-bold">Manage Order</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }) : null

    return (
        <>
            <Navbar />
            <div className="container mt-3">

                {
                    carsArray
                        ?
                        <SearchCarsUI cars={carsArray} />
                        :
                        <h1 className="text-center">You have no orders</h1>
                }

            </div>
            <Footer />
        </>
    )
}