// Select form, input, and response elements from the HTML
const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('chat-input'); // Adjust as needed to match your HTML
const responseTextarea = document.getElementById('chat-response'); // Adjust as needed to match your HTML

// Event listener for form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page refresh
    const mytext = mytextInput.value.trim(); // Get user input

    if (mytext) {
        try {
            // Show "Thinking..." while waiting for response
            responseTextarea.innerHTML = `<p class="bot-message">Thinking...</p>`;

            // Instead of directly calling the OpenAI API, we call our own endpoint.
            // The serverless function (openai-proxy) will attach the API key securely.
            const response = await fetch('/.netlify/functions/openai-proxy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Pass the user input (and optionally any other data) to your function
                body: JSON.stringify({ userMessage: mytext })
            });

            if (response.ok) {
                const data = await response.json();
                // Display the response from your serverless function
                responseTextarea.innerHTML = `<p class="bot-message">${data.reply}</p>`;
            } else {
                responseTextarea.innerHTML = `<p class="bot-message error">Error: Unable to process your request.</p>`;
            }
        } catch (error) {
            console.error(error);
            responseTextarea.innerHTML = `<p class="bot-message error">Error: Unable to process your request.</p>`;
        }
    }
});
