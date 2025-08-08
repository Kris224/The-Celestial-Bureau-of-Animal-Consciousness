
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Volume2, VolumeX, RotateCcw } from "lucide-react";

const Typewriter = ({ text, onFinished }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        if (onFinished) onFinished();
      }
    }, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, [text, onFinished]);

  return <p className="text-red-800 leading-relaxed whitespace-pre-line">{displayText}<span className="animate-ping">|</span></p>;
};


export default function DreamReport({ dreamTitle, dreamAnalysis, onReset }) {
  const [isReading, setIsReading] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const readReport = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(dreamAnalysis);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.voice = window.speechSynthesis.getVoices().find(voice => 
      voice.name.includes('British') || voice.name.includes('UK')
    ) || window.speechSynthesis.getVoices()[0];

    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card className="ministry-paper border-2 border-green-400 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 border-b-2 border-green-400">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-serif text-red-900 flex items-center">
            <FileText className="w-6 h-6 mr-3" />
            OFFICIAL DREAM ANALYSIS REPORT
          </CardTitle>
          <div className="ministry-stamp bg-green-500 text-white w-16 h-16 flex items-center justify-center font-bold text-xs">
            FINAL
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Badge className="bg-green-100 text-green-800">
            ★ CERTIFIED RESULTS
          </Badge>
          <Badge className="bg-red-100 text-red-800">
            ★ OFFICIAL DOCUMENT
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-8">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-red-900 typewriter">
              MINISTRY OF ABSURD INVENTIONS
            </h3>
            <p className="text-red-600 text-sm">
              Official Dream Analysis Division • Document Classification: RIDICULOUS
            </p>
          </div>
          
          <div className="prose prose-red max-w-none">
            <h4 className="text-center font-bold text-xl mb-4 font-serif">"{dreamTitle}"</h4>
            <Typewriter text={dreamAnalysis} onFinished={() => setIsTyping(false)} />
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 italic">
              This document is completely fabricated and intended for entertainment purposes only.
              <br />
              The Ministry of Absurd Inventions accepts no responsibility for accuracy or sanity.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            onClick={readReport}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-6"
            disabled={!window.speechSynthesis || isTyping}
          >
            {isReading ? (
              <>
                <VolumeX className="w-5 h-5 mr-2" />
                Stop Reading Report
              </>
            ) : (
              <>
                <Volume2 className="w-5 h-5 mr-2" />
                Have Report Read Aloud
              </>
            )}
          </Button>
          
          <Button
            onClick={onReset}
            variant="outline"
            className="border-red-300 text-red-700 hover:bg-red-50 flex items-center justify-center px-6"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Analyze Another Pet
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
