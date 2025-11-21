"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type moreViewProps = {
  name: String;
};

function MoreView({ name }: moreViewProps) {
  return (
    <div className="my-5 more border p-2 rounded-xl w-full flex justify-end ">
      <button className="flex gap-2 hover:text-muted-foreground">
        <span>{name}</span>
        <ArrowUpRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export default MoreView;
