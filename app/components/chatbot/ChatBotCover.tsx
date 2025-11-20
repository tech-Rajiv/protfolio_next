"use client";
import React, { useState } from "react";
import ChatArea from "./ChatArea";
import { BotMessageSquare, X } from "lucide-react";

function ChatBotCover() {
  const [chatOpen, setChatOpen] = useState(false);
  const [allMessages, setAllMessages] = useState<any[]>([]);

  const handleChatOpen = () => {
    setChatOpen((prev) => !prev);
  };
  return (
    <div className="flex  flex-col gap-2">
      {chatOpen && (
        <ChatArea allMessages={allMessages} setAllMessages={setAllMessages} />
      )}

      <div className="ball flex justify-end">
        <button
          onClick={handleChatOpen}
          className="open w-12 h-12 bg-primary text-muted  flex justify-center items-center rounded-full"
        >
          {chatOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <BotMessageSquare size={24} strokeWidth={1.75} />
          )}
        </button>
      </div>
    </div>
  );
}

export default ChatBotCover;
export interface ChatAreaProps {
  allMessages: any[];
  setAllMessages: React.Dispatch<React.SetStateAction<any[]>>;
}
