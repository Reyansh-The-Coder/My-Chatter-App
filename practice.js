var firebaseConfig = {
    apiKey: "AIzaSyCeRBWqiLM8LUyno_hjyw0pLHAYuXyBzGE",
    authDomain: "kwitter-app-2c1c6.firebaseapp.com",
    databaseURL: "https://kwitter-app-2c1c6-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-2c1c6",
    storageBucket: "kwitter-app-2c1c6.appspot.com",
    messagingSenderId: "1068696130267",
    appId: "1:1068696130267:web:1dbf09ba626ed430ba72fe"
  };
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}