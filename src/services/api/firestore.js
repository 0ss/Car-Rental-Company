import * as Api from './controllers';
import * as Auth from './auth'
import uuid from 'react-uuid'

/** Sets data into firestore **/
export async function set(collection, doc, data) {
    return await Api.Post('firestore/set', { collection: collection, doc: doc, data: JSON.stringify(data), uid: Auth.getUid() });
}

/** Gets data from firestore **/
export async function get(collection, doc) {
    return await Api.Post('firestore/get', { collection: collection, doc: doc, uid: Auth.getUid() });
}

/** Removes data from firestore **/
export async function remove(collection, doc) {
    return await Api.Post('firestore/remove', { collection: collection, doc: doc, uid: Auth.getUid() });
}

/** Gets list(array) of data from firestore **/
export async function getList(collection) {
    return await Api.Post('firestore/list/get', { collection: collection, uid: Auth.getUid() });
}

/** Search and gets list(array) of data from firestore **/
export async function getSearchList(collection, searchName, searchValue) {
    return await Api.Post('firestore/list/search/get', { collection: collection, searchName: searchName, searchValue: searchValue, uid: Auth.getUid() });
}

/** Adds new car object to firestore **/
export async function addCar(name, color, model, size, status, location, price, image, id, locationData) {
    if (!id) id = uuid()
    if (await Auth.checkUid(Auth.getUid())) {
        return await set('cars', id, { name: name, color: color, model: model, size: size, status: status, location: location, price: price, image: image, id: id, locationUrl: encodeURI(`https:/** www.google.com/maps/search/?api=1&query=${locationData.lat},${locationData.lng}`) })
    } else {
        return false;
    }
}

/** Deletes the car object from firestore **/
export async function deleteCar(carId) {
    if (Auth.isVerifiedUser(Auth.getUser()) && await Auth.checkUid(Auth.getUid())) {
        return await remove('cars', carId)
    } else {
        return { status: "error" };
    }
}

/** Gets car object from firestore by the car id **/
export async function getCar(carId) {
    return await get('cars', carId)
}

/** Gets all the car objects available in firestore **/
export async function getCars() {
    return await getList('cars')
}


/** Adds new order object to firestore **/
export async function addOrder(orderId, carId, price, days, dateFrom, dateTo, paymentMethod) {
    if (Auth.isVerifiedUser(Auth.getUser()) && await Auth.checkUid(Auth.getUid())) {
        return await set('orders', orderId, { id: orderId, uid: Auth.getUid(), carId: carId, price: price, days: days, dateFrom: dateFrom, dateTo: dateTo, paymentMethod: paymentMethod, clientName: Auth.getUser()?.displayName })
    } else {
        return { status: "error" };
    }
}

/** Deletes the order object from firestore **/
export async function cancelOrder(orderId) {
    if (Auth.isVerifiedUser(Auth.getUser()) && await Auth.checkUid(Auth.getUid())) {
        return await remove('orders', orderId)
    } else {
        return { status: "error" };
    }
}

/** Gets order object from firestore by the order id **/
export async function getOrder(orderId) {
    return await get('orders', orderId)
}

/** Gets all the order objects available in firestore **/
export async function getOrders() {
    return await getList('orders')
}

/** Gets all the order objects available in firestore for the user **/
export async function getUserOrders() {
    return await getSearchList('orders', "uid", Auth.getUid())
}

/** Uploads an image to fireStorage **/
export async function uploadImage(path, fileName, fileType, base64Data) {
    if (await Auth.checkUid(Auth.getUid())) {
        return await Api.Post('storage/set', { path: path, fileName: fileName, fileType: fileType, base64Data: base64Data })
    } else {
        return false;
    }
}

/** Gets user object from firebase by the user unique id **/
export async function getUser(uid) {
    return await get('users', uid)
}

/** Generate unique id **/
export function getUuid() {
    return uuid();
}