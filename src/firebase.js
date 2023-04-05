import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export const GetTokan = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BC_L1c3ViRjsdhSmZphiFmv7sK3SEgUJX74K43Lo8tKJe_8-v0e8Kofsi7dlyUFnTczMQqqdDXVnwsn0IAL6sWQ",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

const firebaseConfig = {
  apiKey: "AIzaSyBsztDbjC1BCvFGSFnonc5lKWlHCA8W-gk",
  authDomain: "notification-trial-a5ed7.firebaseapp.com",
  projectId: "notification-trial-a5ed7",
  storageBucket: "notification-trial-a5ed7.appspot.com",
  messagingSenderId: "508587049561",
  appId: "1:508587049561:web:916ab456e8e4093ab72748",
  measurementId: "G-79BMP3J3SD",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
