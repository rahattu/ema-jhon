import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();


const UseFirebase =()=>{
const [user,setUser] =useState({});
const auth =getAuth();
const provider = new GoogleAuthProvider();
const SignInUsingGoogle =()=>{


    signInWithPopup(auth, provider)
      .then((result) => {
        
        const user = result.user;
        console.log(user);
        // ...
})
}
const logOut=()=>{
    signOut(auth)
    .then 
    (()=>{

    })
}

useEffect ( ()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          
        }
      });
      
},[])
 

return {
    user,SignInUsingGoogle,logOut
}
}
export default UseFirebase;
