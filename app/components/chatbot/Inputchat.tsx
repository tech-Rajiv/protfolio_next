import React, { useState } from "react";
import { InputChatProps } from "./ChatArea";

function Inputchat({
  allMessages,
  setAllMessages,
  setLoading,
  setError,
}: InputChatProps) {
  const [input, setInput] = useState("");

  const handleChat = async () => {
    if (!input) return;
    console.log(input);
    setAllMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);
    setInput("");
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await fetch("/api/ask-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input, history: allMessages }),
      });
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      console.log("msg", data?.reply);
      setAllMessages((prev) => [
        ...prev,
        { role: "assistant", content: data?.reply },
      ]);
    } catch (error) {
      setError("something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="inp flex gap-2">
      <input
        type="text"
        placeholder="ask about rajiv"
        className="bg-gray-100 p-2.5 rounded-xl w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleChat}
        className="bg-black text-white px-3  rounded-xl"
      >
        Ask
      </button>
    </div>
  );
}

export default Inputchat;
