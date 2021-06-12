var firebaseConfig = {
      apiKey: "AIzaSyCeRBWqiLM8LUyno_hjyw0pLHAYuXyBzGE",
      authDomain: "kwitter-app-2c1c6.firebaseapp.com",
      databaseURL: "https://kwitter-app-2c1c6-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-2c1c6",
      storageBucket: "kwitter-app-2c1c6.appspot.com",
      messagingSenderId: "1068696130267",
      appId: "1:1068696130267:web:1dbf09ba626ed430ba72fe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
