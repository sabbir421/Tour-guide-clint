import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";
const initAuth=()=>{
    initializeApp(firebaseConfig);
}
export default initAuth;