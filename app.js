// 🔥 YOUR FIREBASE CONFIG

const firebaseConfig = {

  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_AUTH_DOMAIN",
  databaseURL: "PASTE_DATABASE_URL",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_STORAGE_BUCKET",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

let username = "";

while (!username) {
  username = prompt("Enter username:");
}

const messagesDiv = document.getElementById("messages");

const input = document.getElementById("messageInput");

const sendBtn = document.getElementById("sendBtn");

// Send Message
function sendMessage() {

  const text = input.value.trim();

  if (text === "") return;

  db.ref("messages").push({
    username: username,
    text: text,
    time: new Date().toLocaleTimeString()
  });

  input.value = "";

}

// Button click
sendBtn.addEventListener("click", sendMessage);

// Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Receive messages
db.ref("messages").on("child_added", (snapshot) => {

  const data = snapshot.val();

  const div = document.createElement("div");

  div.classList.add("message");

  div.innerHTML = `
    <div class="top">
      <span class="username">${data.username}</span>
      <span class="time">${data.time}</span>
    </div>
    <div>${data.text}</div>
  `;

  messagesDiv.appendChild(div);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;

});const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
