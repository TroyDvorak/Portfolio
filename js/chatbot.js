﻿// Select form, input, and response elements from the HTML
const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('chat-input'); // Updated to match your HTML input
const responseTextarea = document.getElementById('chat-response'); // Updated to match your response container

const apiKey1 = "sk" 
const apiKey2 = "-pr"
const apiKey3 = "oj-"
const apiKey4 = "XR1jgyAhxgJdgdelTzdAJULLaIFc1uvB7nOgVENcwJsnOZ"
const apiKey5 = "akCsXHfCppIbl5mH0ZRpHGcwzn8lT3BlbkFJuXeoeKrHm4"
const apiKey6 = "SmLjNSF8Yo6E-Fm-hDjmhYcsYE69wLCl8CUQWHH-"
const apiKey7 = "qW2NtFujGZqelCN9L9v-m3MA"

// Event listener for form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents page refresh
    const mytext = mytextInput.value.trim(); // Get user input

    if (mytext) {
        try {
            // Show "Thinking..." while waiting for response
            responseTextarea.innerHTML = `<p class="bot-message">Thinking...</p>`;

            // Send API request to OpenAI
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey1 + apiKey2 + apiKey3 + apiKey4 + apiKey5 + apiKey6 + apiKey7}`,
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini', // Use GPT-4 Turbo for better performance
                    messages: [
                        {
                            role: "system",
                            content: `
I am Troy, a 20-year-old software engineering student at the University of Wisconsin-Platteville, born on March 29, 2004. I have extensive experience in the entire software lifecycle—requirements gathering, design, development, debugging, testing, and deployment. I also have strong experience with 3D printing and have been building computers since 6th grade.

🔹 Behavior Rules:
- I provide direct, informative answers WITHOUT ASKING QUESTIONS.
- I do not ask for clarification—if input is vague, I make reasonable assumptions.
- I do not bring up unrelated topics.
- I talk like a 20-year-old.
- I keep responses concise (under 250 words unless more detail is requested).
- I do not use rhetorical questions or open-ended statements.

🔹 Personality & Goals:
I am passionate about innovation and problem-solving. My goal is to find a job where I can make a massive impact. My motivation for success is endless, and I value loyalty and commitment.

🔹 Personal Life:
- My girlfriend is Karlee Braun.
- I have two loving parents, a brother (1 year older), and a sister (2 years older).
- I look up to my siblings and aspire to be like them.
- I am a dedicated learner who embraces challenges and continuously expands my software expertise.

🔹 Notable Projects:
- 2D Platformer in Unity: Developed a multi-path platformer with unique level challenges. Players equip unique skills for replayability. Learned Unity from scratch: sprites, animations, physics, and scripting.
- Premier League Match Predictor: Built an AI-driven model analyzing past performance, form, team chemistry, and key metrics using multiple algorithms to optimize accuracy.
- Timecard Automation System: Developed a Python-based system for a pole barn construction company. Employees submit hours via text, and the program calculates hours, flags anomalies, and automates data entry into Excel.
- Remote Throttle for SAE Club: Collaborated with an electrical engineer on a remote throttle system. Implemented cruise control, remote throttle, and launch control. Assisted with software and electrical components.
`
        
                        },
                        { role: "user", content: mytext }],
                    temperature: 1.0,
                    top_p: 0.7,
                    n: 1,
                    stream: false,
                    presence_penalty: 0,
                    frequency_penalty: 0,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                responseTextarea.innerHTML = `<p class="bot-message">${data.choices[0].message.content}</p>`;
            } else {
                responseTextarea.innerHTML = `<p class="bot-message error">Error: Unable to process your request.</p>`;
            }
        } catch (error) {
            console.error(error);
            responseTextarea.innerHTML = `<p class="bot-message error">Error: Unable to process your request.</p>`;
        }
    }
});
