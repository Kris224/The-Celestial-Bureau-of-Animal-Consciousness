import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smile, FileText, RotateCcw, Lightbulb, TrendingUp } from "lucide-react";

export default function MoodResults({ moodData, onReset }) {
  const {
    petName,
    photoUrl,
    caseNumber,
    current_mood,
    mood_percentage,
    mood_description,
    recommended_activities,
    mood_color
  } = moodData;

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Stop the mood color animation after 3 seconds
    const timer = setTimeout(() => setIsAnimating(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm">
            FINAL
          </div>
          <h1 className="text-4xl font-bold font-serif text-stone-800 mb-4">
            Official Mood Analysis Report
          </h1>
          <p className="text-lg text-stone-600">
            Case Number: {caseNumber} • Subject: {petName}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Subject & Mood Display */}
          <Card className="ministry-paper border-2 border-stone-400">
            <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
              <CardTitle className="text-xl font-serif text-stone-800 text-center">
                Subject Analysis Complete
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <img 
                  src={photoUrl} 
                  alt={petName} 
                  className="w-48 h-48 object-cover rounded-lg shadow-lg mx-auto border-4 border-white"
                />
                {/* Mood Aura Effect */}
                <div 
                  className={`absolute inset-0 rounded-lg ${isAnimating ? 'animate-pulse' : ''}`}
                  style={{
                    boxShadow: `0 0 30px ${mood_color}`,
                    backgroundColor: `${mood_color}20`
                  }}
                ></div>
              </div>

              <h3 className="text-3xl font-bold font-serif text-stone-800 mb-2">
                {petName}
              </h3>

              {/* Mood Badge */}
              <div className="mb-4">
                <Badge 
                  className="text-lg px-6 py-2 font-semibold"
                  style={{
                    backgroundColor: mood_color,
                    color: 'white',
                    border: `2px solid ${mood_color}`
                  }}
                >
                  {current_mood}
                </Badge>
              </div>

              {/* Confidence Meter */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-stone-700 font-medium">Analysis Confidence</span>
                  <span className="font-bold text-stone-800">{mood_percentage}%</span>
                </div>
                <div className="w-full bg-stone-300 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: `${mood_percentage}%`,
                      backgroundColor: mood_color
                    }}
                  ></div>
                </div>
              </div>

              <Badge className="bg-green-100 text-green-800">
                <TrendingUp className="w-4 h-4 mr-2" />
                SCAN COMPLETE
              </Badge>
            </CardContent>
          </Card>

          {/* Analysis Report */}
          <Card className="ministry-paper border-2 border-stone-400">
            <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
              <CardTitle className="text-xl font-serif text-stone-800 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Official Emotional Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-stone-800 mb-2 typewriter">
                    PSYCHOLOGICAL EVALUATION:
                  </h4>
                  <p className="text-stone-700 leading-relaxed">
                    {mood_description}
                  </p>
                </div>

                <div className="border-t border-stone-300 pt-6">
                  <h4 className="font-bold text-stone-800 mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    RECOMMENDED ACTIVITIES:
                  </h4>
                  <div className="space-y-3">
                    {recommended_activities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="ministry-stamp w-8 h-8 flex items-center justify-center font-bold text-xs text-stone-800 flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <p className="text-stone-700">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Case File Summary */}
        <Card className="ministry-paper border-2 border-green-400 mb-8">
          <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 border-b-2 border-green-400">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-serif text-stone-800">
                CASE FILE SUMMARY
              </CardTitle>
              <div className="ministry-stamp bg-green-500 text-white w-12 h-12 flex items-center justify-center font-bold text-xs">
                FILED
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 typewriter text-sm">
              <div>
                <p><strong>CASE NUMBER:</strong> {caseNumber}</p>
                <p><strong>SUBJECT NAME:</strong> {petName}</p>
                <p><strong>ANALYSIS DATE:</strong> {new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p><strong>DETECTED MOOD:</strong> {current_mood}</p>
                <p><strong>CONFIDENCE LEVEL:</strong> {mood_percentage}%</p>
                <p><strong>STATUS:</strong> ANALYSIS COMPLETE</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="text-center">
          <Button onClick={onReset} size="lg" className="bg-stone-700 hover:bg-stone-800">
            <RotateCcw className="w-5 h-5 mr-2" />
            Analyze Another Pet
          </Button>
        </div>

        {/* Official Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 italic">
            This mood analysis is completely fabricated and intended for entertainment purposes only.
            <br />
            The Ministry of Absurd Inventions accepts no responsibility for actual pet emotions.
          </p>
        </div>
      </div>
    </div>
  );
}