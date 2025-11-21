"use client";
import { BotMessageSquare, CircleUserRound, Frown } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { InputChatProps } from "./ChatArea";

function AllMessages({ allMessages, loading, error }: InputChatProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages]);

  return (
    <div className="w-full h-full rounded-xl my-2 py-2 overflow-y-auto">
      <div className="p-1 md:p-2 area  w-full flex flex-col justify-end gap-3">
        {allMessages?.map((message, index) => (
          <div
            key={index}
            className={`flex  ${
              message?.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              ref={bottomRef}
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
                  message?.role === "user" ? "" : "bg-muted text-primary"
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
          <div className="flex gap-2 items-center border p-2 rounded-md bg--foreground border-red-500">
            <Frown size={20} strokeWidth={1.75} />
            Sorry, my Bot is sleeping...
          </div>
        )}
      </div>
    </div>
  );
}

export default AllMessages;
