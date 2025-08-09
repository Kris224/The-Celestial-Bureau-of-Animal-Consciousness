import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scan, Zap, Brain } from "lucide-react";

export default function MoodScanner({ petName, photoUrl }) {
  const [scanProgress, setScanProgress] = useState(0);
  const [currentScan, setCurrentScan] = useState("Initializing Emotional Sensors...");
  const [pulseActive, setPulseActive] = useState(false);

  const scanStages = [
    "Initializing Emotional Sensors...",
    "Reading Facial Expression Data...",
    "Analyzing Body Language Patterns...",
    "Detecting Aura Wavelengths...",
    "Cross-referencing Mood Database...",
    "Finalizing Emotional Profile..."
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 80);

    // Stage progression
    const stageInterval = setInterval(() => {
      setCurrentScan(prev => {
        const currentIndex = scanStages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % scanStages.length;
        return scanStages[nextIndex];
      });
    }, 600);

    // Pulse animation for scanning effect
    const pulseInterval = setInterval(() => {
      setPulseActive(prev => !prev);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stageInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm animate-pulse">
            SCAN<br/>NING
          </div>
          <h1 className="text-3xl font-bold font-serif text-stone-800 mb-2">
            Emotional Spectrometer™ Analysis
          </h1>
          <p className="text-stone-600">
            Subject: {petName} • Mood Detection in Progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Pet Photo with Scanning Overlay */}
          <Card className="ministry-paper border-2 border-stone-400">
            <CardHeader>
              <CardTitle className="text-center font-serif text-stone-800">
                Subject Under Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center relative">
              <div className="relative inline-block">
                <img 
                  src={photoUrl} 
                  alt={petName} 
                  className="max-w-full h-64 object-cover rounded-lg shadow-lg border-4 border-white"
                />
                
                {/* Scanning Overlay */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div 
                    className={`absolute inset-0 bg-blue-400/20 transition-opacity duration-800 ${
                      pulseActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                  
                  {/* Scanning Lines */}
                  <div className="absolute inset-0">
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-ping" style={{top: '25%'}}></div>
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-ping" style={{top: '50%', animationDelay: '0.5s'}}></div>
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-ping" style={{top: '75%', animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-blue-400 animate-pulse"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-blue-400 animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-blue-400 animate-pulse"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-blue-400 animate-pulse"></div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <Badge className="bg-blue-100 text-blue-800 animate-pulse">
                  <Scan className="w-4 h-4 mr-2" />
                  Emotional Scanning Active
                </Badge>
                <Badge className="bg-green-100 text-green-800 animate-pulse">
                  <Brain className="w-4 h-4 mr-2" />
                  Neural Pattern Recognition
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Scanner Display */}
          <Card className="ministry-paper border-2 border-stone-400 bg-black/90">
            <CardHeader className="bg-green-900/20 border-b border-green-500">
              <CardTitle className="text-green-400 font-mono text-center">
                EMOTIONAL SPECTROMETER™ v2.7
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-black">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-green-400 text-sm mb-2">
                  <span>SCAN PROGRESS</span>
                  <span>{Math.round(scanProgress)}%</span>
                </div>
                <div className="w-full bg-green-900 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-green-400 h-3 rounded-full transition-all duration-100 ease-out"
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Readings */}
              <div className="space-y-4 text-green-400 font-mono text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div>EMOTIONAL FREQ: {Math.round(Math.random() * 100)}Hz</div>
                    <div>MOOD STABILITY: {Math.round(Math.random() * 100)}%</div>
                  </div>
                  <div>
                    <div>AURA INTENSITY: {Math.round(Math.random() * 100)}nm</div>
                    <div>HAPPINESS INDEX: {Math.round(Math.random() * 100)}</div>
                  </div>
                </div>
                
                <div className="border-t border-green-500 pt-4">
                  <div className="flex items-center justify-between">
                    <span>STATUS:</span>
                    <span className="animate-pulse">{currentScan}</span>
                  </div>
                </div>

                {/* Animated Indicators */}
                <div className="flex space-x-2 justify-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="ministry-paper border-2 border-amber-400 bg-amber-50">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="w-6 h-6 text-amber-700 animate-pulse" />
              <p className="text-amber-800 font-medium">
                Scanning {petName}'s emotional wavelengths and psychological patterns...
              </p>
              <Zap className="w-6 h-6 text-amber-700 animate-pulse" />
            </div>
            <p className="text-amber-700 text-sm">
              Please remain calm while our advanced mood detection algorithms process the data.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}