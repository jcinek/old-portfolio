// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmhTwpc0hbAUAzaZ7WzwV-NFkLchG9PFI",
    authDomain: "chat-ae7f3.firebaseapp.com",
    databaseURL: "https://chat-ae7f3-default-rtdb.firebaseio.com",
    projectId: "chat-ae7f3",
    storageBucket: "chat-ae7f3.appspot.com",
    messagingSenderId: "159207926644",
    appId: "1:159207926644:web:537634704241d548889a21"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();

// get user's data
getName = localStorage.getItem("savedName");

const username = getName;

// submit form
// listen for submit event on the form and call the postChat function
document.getElementById("message-form").addEventListener("submit", sendMessage);

// send message to db
function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  // create db collection and send in the data
  db.ref("messages/" + timestamp).set({
    username,
    message,
  });
}

// display the messages
// reference the collection created earlier
const fetchChat = db.ref("messages/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});