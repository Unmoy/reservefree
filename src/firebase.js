import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyDIpTltkKRYnnrx5z3ZQmyPXh8HKLr5WkU",
  authDomain: "reservefree-2827c.firebaseapp.com",
  projectId: "reservefree-2827c",
  storageBucket: "reservefree-2827c.appspot.com",
  messagingSenderId: "156255074174",
  appId: "1:156255074174:web:c56ae1b294e2ff08e1652f",
});

export const authentication = app.auth();
export default app;

//  Connected to sampras acoount
