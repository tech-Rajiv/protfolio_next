"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import React from "react";

type moreViewProps = {
  name: String;
};

function MoreView({ name }: moreViewProps) {
  return (
    <div className="btn py-5 flex justify-center">
      <Button
        variant={"outline"}
        className=" font-semibold text-primary border-primary 
                   hover:bg-primary hover:text-muted group 
                   transition duration-300 flex items-center gap-2 px-6 py-3"
      >
        {name}
        <span className="text-lg group-hover:translate-x-1 transition duration-300 ease-out">
          <ArrowRight />
        </span>
      </Button>
    </div>
  );
}

export default MoreView;
