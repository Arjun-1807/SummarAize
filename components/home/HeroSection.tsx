import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div>
        <div className="flex">
          <Badge className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x">
            <Sparkles className="h-6 w-6 mr-2 text-rose-500 animate-pulse"></Sparkles>
            <p>Powered by AI</p>
          </Badge>
        </div>
        <h1 className="h1">Transform PDFs into concise summaries</h1>
        <h2 className="h2">
          Get a beautiful summary reel of the document in seconds.
        </h2>
        <Button>Try SummarAIze</Button>
      </div>
    </section>
  );
};

export default HeroSection;
