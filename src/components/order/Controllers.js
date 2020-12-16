import * as Firestore from '../../services/api/firestore'

export function getOrders(setOrdersCallback) {
    Firestore.getUserOrders().then((result) => {
        if (result.status === "ok") {
            addCarsToOrders(result.result , setOrdersCallback)
        }
    })
}

async function addCarsToOrders(orders , setOrdersCallback) {
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