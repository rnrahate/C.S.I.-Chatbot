document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  const newInquiry = document.getElementById('newInquiry');
  const chatBox = document.getElementById('chatBox');
  const signIn = document.getElementById('signIn');
  const loginModal = document.getElementById('loginModal');
  const sendButton = document.getElementById('sendButton');
  const userInput = document.getElementById('userInput');
  const shareChat = document.getElementById('shareChat');
  
  // New Inquiry button to clear chat and start a new chat
  newInquiry.addEventListener('click', function () {
    chatBox.innerHTML = '<div class="chat-message bot-message">Hello! How can I assist you today?</div>';
  });

  // Handle chat send button
  sendButton.addEventListener('click', function () {
    sendMessage();
  });

  // Handle Enter key press for sending message
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission
      sendMessage();
    }
  });

  function sendMessage() {
    const userText = userInput.value.trim();
    if (userText !== '') {
      chatBox.innerHTML += `<div class="chat-message user-message">${userText}</div>`;
      userInput.value = '';
      // Simulate a bot response
      setTimeout(function () {
        chatBox.innerHTML += `<div class="chat-message bot-message">You said: ${userText}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1000);
    }
  }

  // Handle share chat
  shareChat.addEventListener('click', function () {
    const chatContent = chatBox.innerHTML;
    const blob = new Blob([chatContent], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat.html';
    a.click();
    URL.revokeObjectURL(url);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  // Open and close sidebar
  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.toggle('show');
  });

  // Close sidebar when clicking outside of it
  document.body.addEventListener('click', function (e) {
    if (sidebar.classList.contains('show') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('show');
    }
  });

  // Prevent closing sidebar when clicking inside it
  sidebar.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});


//new
// const loginsec = document.querySelector(".login-section");
// const loginlink = document.querySelector(".login-link");
// const registerlink = document.querySelector(".register-link");
// registerlink.addEventListener("click", () => {
//   loginsec.classList.add("active");
// });
// loginlink.addEventListener("click", () => {
//   loginsec.classList.remove("active");
// });

// Function to lock the message input (disable input field)
function lockMessaging() {
  const messageInput = document.getElementById('messageInput');
  messageInput.disabled = true;
}

// Function to unlock the message input (enable input field)
function unlockMessaging() {
  const messageInput = document.getElementById('messageInput');
  messageInput.disabled = false;
}

// Event listener for the send button click
document.getElementById('sendButton').addEventListener('click', function() {
  const messageInput = document.getElementById('messageInput');
  const userMessage = messageInput.value;

  // If the user has typed a message
  if (userMessage.trim() !== "") {
    // Lock the input field to prevent further messages
    lockMessaging();

    // Send the message to the bot (e.g., using an API call or chatbot logic)
    sendMessageToBot(userMessage);

    // Clear the input field after sending
    messageInput.value = "";
  }
});

// Example function to send the message to the bot
function sendMessageToBot(userMessage) {
  // Logic to send the message to the bot (e.g., API call)
  console.log("User message:", userMessage);

  // Simulate bot's response delay
  setTimeout(function() {
    const botResponse = "This is the bot's response.";
    console.log("Bot response:", botResponse);

    // Unlock the input field once the bot has responded
    unlockMessaging();
  }, 2000); // Adjust the timeout for actual bot response time
}
document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('userInput');
  const messages = document.getElementById('messages');
  
  userInput.addEventListener('input', () => {
      // Update the messages div with the user's input
      messages.textContent = userInput.value;
  });
});
