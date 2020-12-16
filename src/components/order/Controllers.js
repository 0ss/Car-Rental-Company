import * as Firestore from '../../services/api/firestore'
import { SiteLocations } from '../../constants/Constants'

export function getOrders(setOrdersCallback) {
    Firestore.getUserOrders().then((result) => {
        if (result.status === "ok") {
            addCarsToOrders(result.result, setOrdersCallback)
        }
    })
}

async function addCarsToOrders(orders, setOrdersCallback) {
    for (const order of orders) {
        order.car = await getCar(order.carId);
    }
    setOrdersCallback(orders);
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

export function getSetCar(carId, setCarCallBack) {
    if (carId)
        Firestore.getCar(carId).then((result) => {
            if (result && result.status === "ok") {
                setCarCallBack(result.result)
            }
        })
}

export function getOrder(id, setOrderCallback, setCarCallBack) {
    Firestore.getOrder(id).then((result) => {
        if (result && result.status === "ok" && result.result?.carId) {
            setOrderCallback(result?.result)
            getSetCar(result.result?.carId, setCarCallBack)
        }
    })

}

export function CancelReservation(order) {
    if (window.confirm('Are sure you want to cancel this reservation?\n\nYOU CAN NOT UNDO THIS ACTION')) {
        Firestore.cancelOrder(order.id).then((result) => {
            if (result.status === "ok") {
                window.location.href = SiteLocations.searchCars
            } else {
                window.alert(result.result)
            }
        })
    }
}