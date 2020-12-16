import * as Auth from '../../services/api/auth'
import * as Firestore from '../../services/api/firestore'

export function checkAdmin(callBack){
    Auth.isVerifiedUser(Auth.getUser()) && Firestore.getUser(Auth.getUid()).then((result) =>{
       if(result.status === "ok"){
           callBack(result.result?.isAdmin === true)
       }
    })
}

export function setHash(type, value) {
    var hash = window.location.hash;

    if (hash.includes(type)) {
        console.log(hash.split(type + "=")[1].split("&")[0])
        hash = value === "All" ? hash.replace(type + "=" + hash.split(type + "=")[1].split("&")[0], "") : hash.replace(type + "=" + hash.split(type + "=")[1].split("&")[0], `${type}=${value}`)
    } else if(value!== "All") {
        hash += `${type}=${value}&`
    }

    window.location.hash = hash;
}