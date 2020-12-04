import 'firebase/database';
import 'firebase/firestore';

import { FirebaseAppProvider, useFirestoreDocData, useFirestore } from 'reactfire';
import {firebaseCollections} from './Collections'

export async function SignUp(email , uid , firstName,lastName , phoneNumber){
    return Write(firebaseCollections.users , uid , {
        firstName: firstName,
        lastName:lastName,
        phoneNumber:phoneNumber,
        email:email,
        uid:uid,
    })
}

export async function getUserData(uid){
    return (await Read(firebaseCollections.users , uid)).data()
}

async function Write(collection, doc, data) {
    return await useFirestore()
        .collection(collection)
        .doc(doc).set(data);
}

async function Read(collection, doc) {
    return await useFirestore()
        .collection(collection)
        .doc(doc).get();
}