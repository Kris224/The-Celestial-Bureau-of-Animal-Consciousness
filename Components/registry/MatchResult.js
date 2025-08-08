import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, FileText, RotateCcw } from "lucide-react";
import MatchProfile from "./MatchProfile";

export default function MatchResult({ matchData, onReset }) {
  const { userPet, matchPet, conversation, caseNumber } = matchData;

  return (
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/old-paper.png')"}}>
      <div className="min-h-screen bg-amber-50/80 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="text-center">
              <div className="inline-block mx-auto mb-4">
                <img src="/logo.svg" alt="Ministry Seal" className="w-24 h-24 opacity-80" />
              </div>
              <h1 className="text-4xl font-bold font-serif text-red-900">
                Official Match Confirmation
              </h1>
              <p className="text-red-700 typewriter">CASE FILE: {caseNumber}</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-start relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Heart className="w-24 h-24 text-red-300 animate-pulse" />
                </div>
                <MatchProfile pet={userPet} title="Applicant" />
                <MatchProfile pet={matchPet} title="Designated Match" />
              </div>

              <div className="mt-12">
                <Card className="ministry-paper border-2 border-red-200 max-w-2xl mx-auto">
                   <CardHeader className="bg-gradient-to-r from-red-100 to-amber-100 border-b-2 border-red-200">
                    <h3 className="text-xl font-bold font-serif text-red-900 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Transcript of First Encounter
                    </h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-2 typewriter text-red-800 whitespace-pre-line">
                      {conversation}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <Button onClick={onReset} size="lg" className="bg-red-800 hover:bg-red-900">
                  <RotateCcw className="w-5 h-5 mr-2" />
                  File Another Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}