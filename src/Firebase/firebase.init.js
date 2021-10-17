import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication =  () =>
{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;


// steps
//firebase project
//create web app
//get configuration
//initialize firebase
//enable auth method

