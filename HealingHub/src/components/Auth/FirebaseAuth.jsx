// import { useState, useEffect } from "react";
// import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
// import SignupPage from "./SignupPage";
// import SigninPage from "./SigninPage";
// import { app } from "../../firebase";
// import { UserAuth } from "../../Context/firebaseContext";

// const firebaseAuth = getAuth(app);

// const FirebaseAuth = () => {
//   const [showSignUpPage, setShowSignUpPage] = useState(true);
//   const { userSignIn, setUserSignIn }=UserAuth();

//   useEffect(() => {
//     const unsubscribe = () => {
//       onAuthStateChanged(firebaseAuth, (user) => {
//         if (user) {
//           setUserSignIn(user);
//         } else {
//           console.log("user not logged in");
//           setUserSignIn(null);
//         }
//       });
//     };
//     //Clean up
//     return () => unsubscribe();
//   }, []);

//   return (
//     <>
//       <center>
//         {!userSignIn &&(showSignUpPage === true ? (
//           <SignupPage setShowSignUpPage={setShowSignUpPage} />
//         ) : (
//           <SigninPage setShowSignUpPage={setShowSignUpPage} />
//         ))
//       }   
//       </center>
//     </>
//   );
// };

// export default FirebaseAuth;
