import { useAuth, useUser, SuspenseWithPerf, AuthCheck , useFirestore } from 'reactfire';
import * as Firestore from './firestore'

export const SignOut = auth => auth.signOut().then(() => console.log('signed out'));

export async function FirebaseSignup(email, password, firstName, lastName, phoneNumber) {
    
     const userCredential = await useAuth().createUserWithEmailAndPassword(email, password).catch((error) => ErrorHandler(error));

     useFirestore()
        .collection("collection")
        .doc("doc").set({uid: userCredential.user.uid});
      
        // return await Firestore.SignUp(email, userCredential.user.uid, firstName, lastName, phoneNumber).catch((error) => ErrorHandler(error));
   

}

export async function Login(email, password) {
    return await useAuth().signInWithEmailAndPassword(email, password).catch((error) => ErrorHandler(error));;
}

export async function RestPassword(email) {
    return await useAuth().sendPasswordResetEmail(email).catch((error) => ErrorHandler(error));;
}

function ErrorHandler(error) {
       //TODO:Better error handling
        alert(error.message)
        console.log(error);
}