require('dotenv').config()

export default {
    API_ENDPOINT: 'https://good-meal-server.herokuapp.com/api',
    TOKEN_KEY: 'recipe-client-auth-token',
    REACT_APP_GOOGLE_CLIENT_ID: "http://1017027923671-ervk2a58a57uuf055o216oo5aenpjr5r.apps.googleusercontent.com/",
    FirebaseConfig: {
        apiKey: process.env.REACT_APP_FIREBASE_API,
        authDomain: "good-meal-1572448422752.firebaseapp.com",
        databaseURL: "https://good-meal-1572448422752.firebaseio.com",
        projectId: "good-meal-1572448422752",
        storageBucket: "good-meal-1572448422752.appspot.com",
        messagingSenderId: "1017027923671",
        appId: "1:1017027923671:web:41d0e7c4497fd1e976aa92"
    },
  }
