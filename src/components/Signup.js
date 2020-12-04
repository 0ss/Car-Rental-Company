import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/sign_styles.css'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import {FirebaseSignup} from '../services/firebase/auth'
import { FirebaseAppProvider , useFirestore } from 'reactfire';
import { fireBaseConfig } from '../services/firebase/config'
import {firebaseCollections} from '../services/firebase/collections'

export default function Signup() {


    const [email, setEmail] = useState('hasdajksdk@dskldd.dddd')
    const [password, setPassword] = useState('123456')
    const [passwordConf, setPasswordConf] = useState('123456');
    // const [error, setError] = useState(null)


      function SignUp(email , uid , firstName,lastName , phoneNumber){
        return Write(firebaseCollections.users , uid , {
            firstName: firstName,
            lastName:lastName,
            phoneNumber:phoneNumber,
            email:email,
            uid:uid,
        })
    }
    
     async function getUserData(uid){
        return (await Read(firebaseCollections.users , uid)).data()
    }
    
     function Write(collection, doc, data) {
        return  useFirestore()
            .collection(collection)
            .doc(doc).set(data);
    }
    
    async function Read(collection, doc) {
        return await useFirestore()
            .collection(collection)
            .doc(doc).get();
    }

    const handleChange = e =>{
        const {name, value} = e.currentTarget
        if(name==='email'){
            setEmail(value)
        }
        else if(name==='password'){
            setPassword(value)
        }
        else if(name==='passwordConf'){
            setPasswordConf(value)
        }
    }


    return (


        

    

        <>
            <Navbar />
            <div className="center"> 
                <div class="card" style ={{'width':'22rem'}}>
                    <div class="card-body">
                        <form onSubmit = {SignUp(email , password , "a" , "b" , "c")}>
                            <div className="form-group">
                                <label className="font-weight-bold" >Email address</label>
                                <input
                                type="text"
                                name='email'
                                value={email}
                                className="form-control"
                                id="exampleInputEmail1" 
                                placeholder="Enter email" 
                                onChange = {handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Password</label>
                                <input
                                type="password" 
                                name="password"
                                value={password}
                                className="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                onChange = {handleChange}                            
                                />
                            </div>
                            <small 
                            id="passwordHelpBlock" 
                            className="form-text text-muted font-italic"
                            style={{'fontSize':11}}
                            >
                            Your password must be 6-20 characters long, contain letters and numbers.
                            </small>
                            <div className="form-group">
                                <label className="font-weight-bold mt-2">Password Confirmation</label>
                                <input
                                type="password" 
                                name='passwordConf'
                                value={passwordConf}
                                className="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                onChange = {handleChange}                            

                                />
                            </div>
                            <button type="submit" className="btn btn-block mt-4">
                                Sign up
                            </button>
                            <small  class="Have-account form-text text-muted mt-3 text-center">
                            Already have an account? 
                            <Link className="other-page-link" to="/login">
                                &#160; Log in.
                            </Link>
                            </small>
                        </form>    
                    </div>
                </div>
            </div>
            <Footer />
        </>
     

    )
}