import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap } from "lucide-react";

export default function EtherealSpectrograph({ petName, photoUrl }) {
  const [waveformData, setWaveformData] = useState([]);
  const [currentReading, setCurrentReading] = useState(0);
  const [analysisStage, setAnalysisStage] = useState("Initializing Ethereal Sensors...");
  const [dingCount, setDingCount] = useState(0);

  const stages = [
    "Initializing Ethereal Sensors...",
    "Detecting Aural Frequencies...",
    "Analyzing Essence Composition...",
    "Tracing Mythical Lineage...",
    "Calculating Cuteness Coefficients...",
    "Finalizing Spectral Report..."
  ];

  useEffect(() => {
    // Generate random waveform data
    const generateWaveform = () => {
      return Array.from({ length: 50 }, () => Math.random() * 100);
    };

    // Update waveform every 100ms
    const waveformInterval = setInterval(() => {
      setWaveformData(generateWaveform());
      setCurrentReading(Math.random() * 100);
    }, 100);

    // Progress through analysis stages
    const stageInterval = setInterval(() => {
      setAnalysisStage(prev => {
        const currentIndex = stages.indexOf(prev);
        return stages[(currentIndex + 1) % stages.length];
      });
    }, 800);

    // Random dings
    const dingInterval = setInterval(() => {
      setDingCount(prev => prev + 1);
      // Play ding sound if available
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+Dz2XgsEKoM');
        audio.play().catch(() => {});
      } catch (e) {}
    }, 600 + Math.random() * 1000);

    return () => {
      clearInterval(waveformInterval);
      clearInterval(stageInterval);
      clearInterval(dingInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm animate-pulse">
            PROC<br/>ESS
          </div>
          <h1 className="text-3xl font-bold font-serif text-stone-800 mb-2">
            Ethereal Spectrograph™ Analysis
          </h1>
          <p className="text-stone-600">
            Subject: {petName} • Case Processing in Progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Pet Photo */}
          <Card className="ministry-paper border-2 border-stone-400">
            <CardHeader>
              <CardTitle className="text-center font-serif text-stone-800">
                Subject Specimen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <img 
                src={photoUrl} 
                alt={petName} 
                className="max-w-full h-64 object-cover rounded-lg shadow-lg mx-auto border-4 border-white"
              />
              <div className="mt-4 space-y-2">
                <Badge className="bg-blue-100 text-blue-800 animate-pulse">
                  <Zap className="w-4 h-4 mr-2" />
                  Aura Detection Active
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Spectrograph Display */}
          <Card className="ministry-paper border-2 border-stone-400 bg-black/90">
            <CardHeader className="bg-green-900/20 border-b border-green-500">
              <CardTitle className="text-green-400 font-mono text-center">
                ETHEREAL SPECTROGRAPH™ v3.14
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-black">
              {/* Waveform Display */}
              <div className="mb-6">
                <div className="h-32 border border-green-500 bg-black p-2 rounded">
                  <svg width="100%" height="100%" className="text-green-400">
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      points={waveformData.map((value, index) => 
                        `${(index / waveformData.length) * 100}%,${100 - value}%`
                      ).join(' ')}
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>

              {/* Readings */}
              <div className="space-y-4 text-green-400 font-mono text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div>ESSENCE FREQ: {Math.round(currentReading)}Hz</div>
                    <div>AURA INTENSITY: {Math.round(currentReading * 1.2)}%</div>
                  </div>
                  <div>
                    <div>MYTHICAL TRACE: DETECTED</div>
                    <div>DINGS RECORDED: {dingCount}</div>
                  </div>
                </div>
                
                <div className="border-t border-green-500 pt-4">
                  <div className="flex items-center justify-between">
                    <span>STATUS:</span>
                    <span className="animate-pulse">{analysisStage}</span>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-500 rounded px-4 py-2">
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>ANALYZING MYSTICAL PROPERTIES...</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="ministry-paper border-2 border-amber-400 bg-amber-50">
          <CardContent className="p-6 text-center">
            <p className="text-amber-800 font-medium">
              The Ethereal Spectrograph™ is conducting a comprehensive analysis of {petName}'s mystical essence. 
              Please remain calm while our alchemical algorithms process the spectral data...
            </p>
            <div className="mt-4 w-full bg-amber-200 rounded-full h-2">
              <div className="bg-amber-600 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}