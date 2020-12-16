
import React, { useState } from 'react'
import '../../styles/main_styles.css'
import '../../styles/my_orders.css'
import Navbar from '../../styles/layout/Navbar'
import Footer from '../../styles/layout/Footer'
import * as Firestore from '../../services/api/firestore'
import SearchCarsUI from '../cars_search/SearchCarsUI'
import * as Controllers from './Controllers'

export default function AllOrders() {

    const [orders, setOrders] = useState(null);

    function getOrders() {
        Firestore.getOrders().then((result) => {
            if (result.status === "ok") {
                addCarsToOrders(result.result)
            }
        })
    }

    async function addCarsToOrders(orders) {
        for (const order of orders) {
            order.car = await Controllers.getCar(order.carId);
        }

        setOrders(orders);
    }


    if (!orders)
        getOrders();

    const ordersArray = Controllers.getOrdersArray(orders)


    return (
        <>
            <div className="container mt-3">
                {
                    ordersArray ? <SearchCarsUI cars={ordersArray} /> : <h1 className="text-center">There is no orders to show</h1>
                }
            </div>

        </>
    )
}
