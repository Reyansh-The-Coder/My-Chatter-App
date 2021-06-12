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

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name- "+ Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
      });});}

      function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location =  "kwitter_page.html";
      }
getData();

function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="kwitter.html";
}