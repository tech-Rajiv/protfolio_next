import { BotMessageSquare } from "lucide-react";
import React from "react";

function HeadingChat() {
  return (
    <div className="flex flex-col gap-1 border-b pb-2">
      <div className="flex items-center gap-2">
        <BotMessageSquare size={24} strokeWidth={1.75} />
        <h2 className="font-medium">Rajiv's Bot</h2>
      </div>

      <p className="text-sm my-1 hidden md:block leading-snug">
        Hi there! ask me anthing that you to know about Rajiv.
      </p>
    </div>
  );
}

export default HeadingChat;
