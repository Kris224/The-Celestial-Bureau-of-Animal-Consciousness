import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Stamp, MapPin } from "lucide-react";

export default function PassportProcessing({ petName, photoUrl }) {
  const [processingStage, setProcessingStage] = useState(0);
  const [flashActive, setFlashActive] = useState(false);
  const [stampCount, setStampCount] = useState(0);

  const stages = [
    "Preparing passport photo booth...",
    "Taking official photograph...",
    "Processing citizenship documents...",
    "Assigning official profession...",
    "Applying visa stamps...",
    "Finalizing passport documentation..."
  ];

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setProcessingStage(prev => {
        if (prev < stages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    // Photo flash effect at stage 1
    const flashTimeout = setTimeout(() => {
      if (processingStage === 1) {
        setFlashActive(true);
        setTimeout(() => setFlashActive(false), 200);
      }
    }, 1500);

    // Stamp sound effects at stage 4
    const stampInterval = setInterval(() => {
      if (processingStage === 4) {
        setStampCount(prev => prev + 1);
        // Play stamp sound if available
        try {
          const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+Dz2XgsEKoM');
          audio.play().catch(() => {});
        } catch (e) {}
      }
    }, 800);

    return () => {
      clearInterval(stageInterval);
      clearTimeout(flashTimeout);
      clearInterval(stampInterval);
    };
  }, [processingStage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm animate-pulse">
            PROC<br/>ESS
          </div>
          <h1 className="text-3xl font-bold font-serif text-stone-800 mb-2">
            Passport Processing in Progress
          </h1>
          <p className="text-stone-600">
            Applicant: {petName} • Official Documentation Creation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Passport Photo Booth */}
          <Card className="ministry-paper border-2 border-stone-400">
            <CardHeader>
              <CardTitle className="text-center font-serif text-stone-800 flex items-center justify-center">
                <Camera className="w-5 h-5 mr-2" />
                Official Photo Booth
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center relative">
              {flashActive && (
                <div className="absolute inset-0 bg-white opacity-80 z-10 rounded-lg"></div>
              )}
              <div className={`border-4 border-stone-500 rounded-lg p-4 ${processingStage >= 1 ? 'bg-white' : 'bg-stone-200'}`}>
                <img 
                  src={photoUrl} 
                  alt={petName} 
                  className="w-48 h-48 object-cover rounded mx-auto border-2 border-stone-400"
                />
                {processingStage >= 2 && (
                  <div className="mt-4">
                    <Badge className="bg-green-100 text-green-800">
                      ✓ OFFICIAL PHOTO CAPTURED
                    </Badge>
                  </div>
                )}
              </div>
              {processingStage === 1 && (
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2 text-blue-600">
                    <Camera className="w-4 h-4 animate-pulse" />
                    <span className="animate-pulse">SMILE!</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Processing Status */}
          <Card className="ministry-paper border-2 border-stone-400">
            <CardHeader>
              <CardTitle className="text-center font-serif text-stone-800">
                Processing Status
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {stages.map((stage, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                    index === processingStage 
                      ? 'bg-blue-50 border border-blue-300' 
                      : index < processingStage 
                        ? 'bg-green-50 border border-green-300'
                        : 'bg-stone-50 border border-stone-300'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                      index === processingStage 
                        ? 'bg-blue-500 animate-pulse' 
                        : index < processingStage 
                          ? 'bg-green-500'
                          : 'bg-stone-400'
                    }`}>
                      {index < processingStage ? '✓' : index + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`${
                        index === processingStage ? 'font-semibold text-blue-800' : 'text-stone-700'
                      }`}>
                        {stage}
                      </p>
                    </div>
                    {index === processingStage && index === 4 && (
                      <div className="text-red-600 font-bold animate-bounce">
                        STAMP #{stampCount}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visa Stamping Animation */}
        {processingStage === 4 && (
          <Card className="ministry-paper border-2 border-red-400 bg-red-50">
            <CardHeader>
              <CardTitle className="text-center font-serif text-red-800 flex items-center justify-center">
                <Stamp className="w-5 h-5 mr-2" />
                Visa Stamp Application in Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-3 gap-4 mb-4">
                {Array.from({length: 6}, (_, i) => (
                  <div key={i} className={`ministry-stamp w-16 h-16 mx-auto flex items-center justify-center font-bold text-xs text-stone-800 ${
                    i < stampCount ? 'animate-bounce' : 'opacity-30'
                  }`} style={{animationDelay: `${i * 0.2}s`}}>
                    VISA<br/>{i + 1}
                  </div>
                ))}
              </div>
              <p className="text-red-700 font-medium">
                Applying official visa stamps for household territories...
              </p>
            </CardContent>
          </Card>
        )}

        {/* Progress Bar */}
        <Card className="ministry-paper border-2 border-amber-400 bg-amber-50">
          <CardContent className="p-6 text-center">
            <p className="text-amber-800 font-medium mb-4">
              Processing {petName}'s citizenship application and passport documentation...
            </p>
            <div className="w-full bg-amber-200 rounded-full h-3">
              <div 
                className="bg-amber-600 h-3 rounded-full transition-all duration-1000 ease-out" 
                style={{width: `${((processingStage + 1) / stages.length) * 100}%`}}
              ></div>
            </div>
            <p className="text-amber-700 text-sm mt-2">
              {Math.round(((processingStage + 1) / stages.length) * 100)}% Complete
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}