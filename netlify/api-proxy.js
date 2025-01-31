// netlify/functions/openai-proxy.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    // Retrieve the user input from the POST body
    const { userMessage } = JSON.parse(event.body);

    // Build the OpenAI API request body, including your system and user messages
    const requestBody = {
        model: 'gpt-4o-mini', // Update as needed
        messages: [
            {
                role: "system",
                content: `Your system prompt here...`
            },
            {
                role: "user",
                content: userMessage
            }
        ],
        temperature: 1.0,
        top_p: 0.7,
        n: 1,
        stream: false,
        presence_penalty: 0,
        frequency_penalty: 0,
    };

    try {
        // Make the API request to OpenAI using your API key stored in an environment variable
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // The API key is securely injected via environment variables
                'Authorization': `Bearer ${process.env.OPEN_AI_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: 'Error communicating with OpenAI API.' })
            };
        }

        const data = await response.json();

        // Return the content of the reply
        return {
            statusCode: 200,
            body: JSON.stringify({ reply: data.choices[0].message.content })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
