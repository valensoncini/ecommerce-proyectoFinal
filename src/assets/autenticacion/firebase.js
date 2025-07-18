    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROYECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export  function crearUsuario(email, password){
   return(
        new Promise((res, rej) => {
             createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                console.log("Credenciales", userCredential);
                const user = userCredential.user;
                console.log(user);
                res(user);
                // ...
            })
            .catch((error) => {
                console.log(error.code, error.message);
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error);
                // ..
            });
        })
   )
}



export function loginEmailPass(email,password){
    return(
        new Promise((res, rej) =>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                res(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error);
            });
        })
    )
}