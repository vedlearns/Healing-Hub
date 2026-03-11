// import { createContext,useState,useContext } from "react";
// import { app } from "../firebase";
// import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";

// const firebaseAuth = getAuth(app);
// const googleProvider=new GoogleAuthProvider();

// export const firebaseContext = createContext({
//   signupUserWithEmailAndPassword: () => {},
//   signInUserWithEmailAndPassword: () => {},
//   signInUsingGoogle: () => {},
//   putData: () => {},
// });

// export const FirebaseProvider = ({ children }) => {

//   const signupUserWithEmailAndPassword = (email, password) =>{
//     createUserWithEmailAndPassword(firebaseAuth, email, password)
//     .then(()=>alert("Account Created Successfully"))
//     .catch((err)=>console.log(err))
//   }

//   const signInUserWithEmailAndPassword = (email, password) =>
//     signInWithEmailAndPassword(firebaseAuth, email, password)
//   .then(()=>console.log("logged In Successfully"))
//   .catch((err)=>console.log(err))

//   const signInUsingGoogle=()=>signInWithPopup(firebaseAuth,googleProvider)
//   const [userSignIn, setUserSignIn] = useState("signin");
//   return (
//     <firebaseContext.Provider
//       value={{
//         signupUserWithEmailAndPassword,
//         signInUserWithEmailAndPassword,
//         signInUsingGoogle,
//         userSignIn, setUserSignIn
//       }}
//     >
//       {children}
//     </firebaseContext.Provider>
//   );
// };

// export const UserAuth = () => useContext(firebaseContext);
