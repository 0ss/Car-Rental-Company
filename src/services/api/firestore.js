import * as Api from './controllers';
import * as Auth from './auth'
import uuid from 'react-uuid'

export async function set(collection, doc, data) {
    return await Api.Post('firestore/set', { collection: collection, doc: doc, data: JSON.stringify(data) });
  
}

export async function get(collection, doc) {
    return await Api.Post('firestore/get', { collection: collection, doc: doc, uid: Auth.getUid() });
}

export async function addCar(name, color , model , size , status , location, price , image , id) {
    if(!id) id = uuid()
    if(await Auth.checkUid(Auth.getUid())){
   return await set('cars' , id , {name:name, color:color, model:model , size:size,status:status,location:location,price:price , image:image , id:id})
    }else{
        return false;
    }
}

export async function getCar(carId) {
   return await get('cars' , carId)
}

export async function addOrder(carId , price , days , dateFrom , dateTo , paymentMethod) {
    if(await Auth.checkUid(Auth.getUid())){
        const orderId = uuid();
   return await set('orders' , orderId , {id:orderId, uid:Auth.getUid() , carId:carId , price: price , days:days , dateFrom:dateFrom , dateTo:dateTo , paymentMethod:paymentMethod })
    }else{
        return false;
    }
}

export async function getOrder(orderId) {
    return await get('orders' , orderId)
 }

export async function uploadImage(path , fileName , fileType , base64Data) {
    if(await Auth.checkUid(Auth.getUid())){
   return await Api.Post('storage/set' , {path:path , fileName:fileName , fileType:fileType, base64Data:base64Data})
    }else{
        return false;
    }
}

export function getUuid(){
    return uuid();
}