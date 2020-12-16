
import * as Api from './controllers';
import * as Firestore from './firestore'

export async function login(email, password) {
    return await Api.Post('login', { email: email, password: password })
}

export async function signUp(email, password, name) {
    return await Api.Post('signup', { email: email, password: password, name: name })
}

export async function restPassword(email) {
    return await Api.Post('restPassword', { email: email })
}

/** Checks if the user id is legit **/
export async function checkUid(uid) {
    const result = await Api.Post('firestore/get', { collection: "users", doc: uid, uid: uid });
    if (result && result.result && result.result.uid) {
        return true;
    } else {
        return false;
    }
}

/** Checks if the user object is legit **/
export function isVerifiedUser(user) {
   return user && user.uid && user.uid.length > 9;
}

/** Checks if the logged user is admin **/
export async function isAdmin() {
    return await (Firestore.getUser(getUid())).result.isAdmin === true
 }

 /** Sets user id into browser local storage **/
export function setUid(uid) {
    localStorage.setItem("uid", uid)
}

 /** Gets user id from browser local storage **/
export function getUid() {
    return localStorage.getItem("uid");
}

 /** Deletes user id from browser local storage **/
export function removeUid() {
    return localStorage.removeItem("uid");
}

 /** Sets user object into browser local storage **/
export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

 /** Gets user object from browser local storage **/
export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

 /** Deletes user object from browser local storage **/
export function removeUser() {
    return localStorage.removeItem("user");
}