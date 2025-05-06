function sendMessage() {
    const inputField = document.getElementById('userInput');
    const message = inputField.value;
    if (!message) return;

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

    fetch('/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: message})
    })
    .then(response => response.json())
    .then(data => {
        chatBox.innerHTML += `<div><strong>Bot:</strong> ${data.response}</div>`;
        inputField.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    });
}
