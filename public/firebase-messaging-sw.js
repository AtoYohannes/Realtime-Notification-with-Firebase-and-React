// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyBsztDbjC1BCvFGSFnonc5lKWlHCA8W-gk",
  authDomain: "notification-trial-a5ed7.firebaseapp.com",
  projectId: "notification-trial-a5ed7",
  storageBucket: "notification-trial-a5ed7.appspot.com",
  messagingSenderId: "508587049561",
  appId: "1:508587049561:web:916ab456e8e4093ab72748",
  measurementId: "G-79BMP3J3SD",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
