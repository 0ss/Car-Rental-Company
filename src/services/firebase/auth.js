import React, { useContext } from "react";
import "../../App.css";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "../firebase/context";
import { Redirect } from "react-router-dom";

// export const SignOut = auth => auth.signOut().then(() => console.log('signed out'));

// export async function FirebaseSignup(email, password, firstName, lastName, phoneNumber) {
    
//      const userCredential = await useAuth().createUserWithEmailAndPassword(email, password).catch((error) => ErrorHandler(error));

//      useFirestore()
//         .collection("collection")
//         .doc("doc").set({uid: userCredential.user.uid});
      
//         // return await Firestore.SignUp(email, userCredential.user.uid, firstName, lastName, phoneNumber).catch((error) => ErrorHandler(error));
   

// }

export default function SignIn() {
    //get the user state from the context
    const { user } = useContext(AuthContext); 
  
    //this is our config for FirebaseAuth
    const uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false,
      },
    };
  
  //if user exists or signed in, we redirect the page to home, else display the sign in methods with FirebaseAuth
    return (
      <div>
        {!!user ? (
          <div>
          <p>Please Sign In</p>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
        ) : (
            <p>Please Sign In</p>

        )}
      </div>
    );
  }

// export async function Login(email, password) {
//     return await useAuth().signInWithEmailAndPassword(email, password).catch((error) => ErrorHandler(error));;
// }

// export async function RestPassword(email) {
//     return await useAuth().sendPasswordResetEmail(email).catch((error) => ErrorHandler(error));;
// }

function ErrorHandler(error) {
       //TODO:Better error handling
        alert(error.message)
        console.log(error);
}