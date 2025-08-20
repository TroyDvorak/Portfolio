import React, { useState } from "react";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setResponse("Thinking...");

    try {
      const res = await fetch("https://gc3v65gdxj.execute-api.us-east-2.amazonaws.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data.reply);
      } else {
        setResponse("Error: Unable to process your request.");
      }
    } catch (err) {
      setResponse("Error: Unable to process your request.");
    }

    setLoading(false);
  };

  return (
    <div>
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-violet-600 hover:bg-violet-700 text-white rounded-full p-4 shadow-lg flex items-center gap-2"
          onClick={() => setOpen(true)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 3C6.48 3 2 6.92 2 12c0 2.08.8 3.97 2.13 5.47L2 21l3.66-1.1C7.77 20.6 9.82 21 12 21c5.52 0 10-3.92 10-9s-4.48-9-10-9zm0 16c-1.93 0-3.68-.37-5.13-1.02l-.36-.16-2.17.65.65-2.17-.16-.36C4.37 15.68 4 13.93 4 12c0-4.08 3.58-7 8-7s8 2.92 8 7-3.58 7-8 7z"/>
          </svg>
          <span className="hidden sm:inline font-medium">Chat with Troy</span>
        </button>
      )}

      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"} w-full max-w-md h-[50vh] bg-gray-900 p-4 rounded-lg shadow-2xl border border-gray-700 flex flex-col`}
        style={{ transformOrigin: "bottom right" }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-white">Chat with Troy</span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white text-xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 rounded bg-gray-700 text-white"
            placeholder="Ask Troy anything..."
            disabled={loading}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-violet-600 text-white rounded"
            disabled={loading}
          >
            Send
          </button>
        </form>

        <div className="flex-1 overflow-y-auto p-2 bg-gray-800 rounded text-white">
          {response ? (
            <p>{response}</p>
          ) : (
            <ul className="text-gray-400 italic list-disc ml-4">
              <li>What projects have you built?</li>
              <li>Tell me about your internship at the FED?</li>
              <li>What is your experience with 3D printing?</li>
              <li>What are your hobbies?</li>
              <li>Where did you grow up?</li>
              <li>What's your family like?</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
