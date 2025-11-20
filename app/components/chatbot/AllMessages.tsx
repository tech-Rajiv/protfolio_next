import { BotMessageSquare, CircleUserRound, Frown } from "lucide-react";
import React from "react";
import { InputChatProps } from "./ChatArea";

function AllMessages({ allMessages, loading, error }: InputChatProps) {
  return (
    <div className="w-full h-full rounded-xl my-2 py-2 overflow-y-auto">
      {/* This part pushes content to the bottom */}
      <div className="p-1 area w-full h-full flex flex-col justify-end gap-2">
        {allMessages?.map((message, index) => (
          <div
            key={index}
            className={`flex  ${
              message?.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex ${
                message?.role === "user" ? "flex-row-reverse" : ""
              } md:max-w-[80%] p-2  gap-2 items-end`}
            >
              <div className="ball rounded ">
                {message?.role !== "user" ? (
                  <BotMessageSquare size={20} strokeWidth={1.75} />
                ) : (
                  <CircleUserRound size={20} strokeWidth={1.75} />
                )}
              </div>
              <div
                className={`text-sm sm:text-md rounded-lg border p-2 ${
                  message?.role === "user" ? "bg-gray-100" : "bg-white"
                }`}
              >
                {message?.content}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <span className="animate-pulse">ChatBot thinking...</span>
          </div>
        )}
        {error && (
          <div className="flex gap-2 items-center border p-2 rounded-md border-red-300 bg-red-50">
            <Frown size={20} strokeWidth={1.75} />
            Sorry, my Bot is sleeping...
          </div>
        )}
      </div>
    </div>
  );
}

export default AllMessages;
