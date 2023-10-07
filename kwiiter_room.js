//ADD YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

var firebaseConfig = {
  apiKey: "AIzaSyDaDVPRsCv5Un77KwKXqURlCvdYn0aao4g",
  authDomain: "let-s-chat-88411.firebaseapp.com",
  databaseURL: "https://let-s-chat-88411.firebaseio.com",
  projectId: "let-s-chat-88411",
  storageBucket: "let-s-chat-88411.appspot.com",
  messagingSenderId: "634102069083",
  appId: "1:634102069083:web:704bf6af29915cdc860c7e",
  measurementId: "G-GDCEK2RQ97"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}