import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
} from "firebase/auth";
import { useState, useEffect } from "react";

import initAuth from "../Firebase/FirebaseInit";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading]=useState(true)
  const[error,setError]=useState('');
 

  const auth = getAuth();

  const signUpUsingEmail=(email,password)=>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
   
      const user = userCredential.user;
      setUser(user)
     
    
    }).finally(()=>setIsLoading(false));
  }

const signInUsingEmail=(email,password)=>{
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    setUser(user)
    setError('')
   
  
  }).catch((error) => {
    
    setError(error.message);
  })
  .finally(()=>setIsLoading(false));
}

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider).then((result) => {
       
      setUser(result.user);
     
    }).finally(()=>setIsLoading(false));
  };

  

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {})
    .then(()=>setIsLoading(false));
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    signUpUsingEmail,
    signInUsingEmail,
    isLoading,
    error
  };
};

export default useFirebase;
