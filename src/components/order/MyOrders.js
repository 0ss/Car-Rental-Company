
import React, { useState } from 'react'
import '../../styles/main_styles.css'
import '../../styles/my_orders.css'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import SearchCarsUI from './../cars_search/SearchCarsUI'
import * as Controllers from './Controllers'
import { getOrdersArray } from '../admin/Controllers'

export default function MyOrders() {
    
    const [orders, setOrders] = useState(null);

    if (!orders)
        Controllers.getOrders(setOrders);

    const ordersArray = getOrdersArray(orders)

    return (
        <>
            <Navbar />
            <div className="container mt-3">

                {
                    ordersArray ? <SearchCarsUI cars={ordersArray} /> : <h1 className="text-center">You have no orders</h1>
                }

            </div>
            <Footer />
        </>
    )
}