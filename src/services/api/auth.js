
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

export async function checkUid(uid) {
    const result = await Api.Post('firestore/get', { collection: "users", doc: uid, uid: uid });
    if (result && result.result && result.result.uid) {
        return true;
    } else {
        return false;
    }
}

export function isVerifiedUser(user) {
   return user && user.uid && user.uid.length > 9;
}

export async function isAdmin() {
    return await (Firestore.getUser(getUid())).result.isAdmin === true
 }

export function setUid(uid) {
    localStorage.setItem("uid", uid)
}

export function getUid() {
    return localStorage.getItem("uid");
}

export function removeUid() {
    return localStorage.removeItem("uid");
}

export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export function removeUser() {
    return localStorage.removeItem("user");
}