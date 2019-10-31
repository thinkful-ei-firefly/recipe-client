export default {
    API_ENDPOINT: 'http://localhost:8080/api' || 'https://good-meal-server.herokuapp.com/api',
    TOKEN_KEY: 'recipe-client-auth-token',
    FirebaseConfig: {
        apiKey: "AIzaSyBv-WLiOMAh3oBruqOS_yaaZ4PJ1c5PK7s",
        authDomain: "good-meal-1572448422752.firebaseapp.com",
        databaseURL: "https://good-meal-1572448422752.firebaseio.com",
        projectId: "good-meal-1572448422752",
        storageBucket: "good-meal-1572448422752.appspot.com",
        messagingSenderId: process.env.Firebase_messagingSenderId,
        appId: process.env.Firebase_appId
    }
  }
