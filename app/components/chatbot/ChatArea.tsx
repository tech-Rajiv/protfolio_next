import React, { useState } from "react";
import HeadingChat from "./HeadingChat";
import AllMessages from "./AllMessages";
import Inputchat from "./Inputchat";
import { ChatAreaProps } from "./ChatBotCover";

function ChatArea({ setAllMessages, allMessages }: ChatAreaProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("alllmessss", allMessages);
  return (
    <div className="textarea  bg-gray-50 shadow text-black w-[90vw] sm:w-[60vw] sm:w-[50vw]  lg:w-[40vw] h-[70vh] rounded-xl p-3 sm:p-5 flex flex-col justify-between">
      <HeadingChat />
      <AllMessages
        allMessages={allMessages}
        setAllMessages={setAllMessages}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
      />
      <Inputchat
        allMessages={allMessages}
        setAllMessages={setAllMessages}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
      />
    </div>
  );
}

export default ChatArea;

export interface InputChatProps {
  allMessages: any[];
  setAllMessages: React.Dispatch<React.SetStateAction<any[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}
