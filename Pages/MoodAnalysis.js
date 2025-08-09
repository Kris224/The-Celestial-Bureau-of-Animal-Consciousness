import React, { useState } from "react";
import { MoodAnalysis } from "@/entities/MoodAnalysis";
import { UploadFile, InvokeLLM } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Upload, CheckCircle, Camera, RotateCcw, Scan } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import MoodScanner from "../components/mood/MoodScanner";
import MoodResults from "../components/mood/MoodResults";

export default function MoodAnalysisPage() {
  const [petName, setPetName] = useState("");
  const [petPhoto, setPetPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [moodData, setMoodData] = useState(null);
  const [processingState, setProcessingState] = useState("idle"); // idle, uploading, scanning, done
  
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPetPhoto(file);
    setProcessingState("uploading");

    try {
      const { file_url } = await UploadFile({ file });
      setPhotoUrl(file_url);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
    
    setProcessingState("idle");
  };

  const startMoodScan = async () => {
    if (!petName || !photoUrl) return;

    setProcessingState("scanning");
    
    // Wait for scanning animation to complete
    setTimeout(async () => {
      try {
        const result = await InvokeLLM({
          prompt: `You are an expert at "The Bureau of Emotional Pet Surveillance" analyzing pet moods.

Pet's Name: "${petName}"

Create a completely absurd but official-sounding mood analysis with:

1. "current_mood": A funny, elaborate mood description (e.g., "Contemplatively Mischievous", "Regally Bored", "Suspiciously Content")

2. "mood_percentage": A confidence percentage between 87-99

3. "mood_description": A 2-3 sentence official analysis of what this mood means and why the pet is feeling this way

4. "recommended_activities": Array of 3-4 absurd activity suggestions based on this mood

5. "mood_color": A CSS color that represents this mood (e.g., "#FF6B6B", "#4ECDC4")

Make it sound scientific but completely ridiculous.`,
          response_json_schema: {
            type: "object",
            properties: {
              current_mood: { type: "string" },
              mood_percentage: { type: "number" },
              mood_description: { type: "string" },
              recommended_activities: {
                type: "array",
                items: { type: "string" }
              },
              mood_color: { type: "string" }
            }
          }
        });

        const caseNum = `MOOD-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
        
        const finalData = {
          petName,
          photoUrl,
          caseNumber: caseNum,
          ...result
        };
        
        setMoodData(finalData);
        
        // Save to database
        await MoodAnalysis.create({
          pet_name: petName,
          pet_photo_url: photoUrl,
          case_number: caseNum,
          current_mood: result.current_mood,
          mood_percentage: result.mood_percentage,
          mood_description: result.mood_description,
          recommended_activities: result.recommended_activities,
          mood_color: result.mood_color
        });

        setProcessingState("done");
      } catch (error) {
        console.error("Error generating mood analysis:", error);
        setProcessingState("idle");
      }
    }, 4000); // Wait 4 seconds for scanning animation
  };

  const resetProcess = () => {
    setPetName("");
    setPetPhoto(null);
    setPhotoUrl("");
    setMoodData(null);
    setProcessingState("idle");
  };

  if (processingState === "done" && moodData) {
    return <MoodResults moodData={moodData} onReset={resetProcess} />;
  }

  if (processingState === "scanning") {
    return <MoodScanner petName={petName} photoUrl={photoUrl} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm">
            MOOD<br/>DEPT
          </div>
          <h1 className="text-4xl font-bold font-serif text-stone-800 mb-4">
            The Bureau of Emotional Pet Surveillance
          </h1>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto">
            Division of Mood Detection & Behavioral Analysis • Est. 1847
          </p>
        </div>

        <Card className="ministry-paper border-2 border-stone-400">
          <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
            <CardTitle className="text-2xl font-serif text-stone-800 flex items-center">
              <Smile className="w-6 h-6 mr-3" />
              Form 5-E: Emotional State Analysis Request
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="petName" className="text-stone-700 font-semibold">
                  Subject's Name *
                </Label>
                <Input
                  id="petName"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="e.g., Captain Fluffington"
                  className="mt-2 border-stone-400 focus:border-stone-600"
                  disabled={processingState !== "idle"}
                />
              </div>

              <div>
                <Label className="text-stone-700 font-semibold">
                  Current Photograph for Mood Analysis *
                </Label>
                <div className="mt-2 border-2 border-dashed border-stone-400 rounded-lg p-8 text-center hover:border-stone-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photoUpload"
                    disabled={processingState !== "idle"}
                  />
                  <label htmlFor="photoUpload" className={processingState !== "idle" ? "cursor-not-allowed" : "cursor-pointer"}>
                    {photoUrl ? (
                      <div className="space-y-4">
                        <img 
                          src={photoUrl} 
                          alt="Pet for mood analysis" 
                          className="max-w-xs mx-auto rounded-lg shadow-lg"
                        />
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Photo Ready for Analysis
                        </Badge>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Camera className="w-16 h-16 text-stone-500 mx-auto" />
                        <div>
                          <p className="text-stone-700 font-medium">Upload Current Pet Photo</p>
                          <p className="text-stone-600 text-sm">
                            Clear image required for accurate emotional reading
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                <p className="text-amber-800 text-sm">
                  <strong>ANALYSIS NOTICE:</strong> The Emotional Spectrometer™ will scan your pet's 
                  facial expressions, body language, and aura to determine their current mood state. 
                  Results are guaranteed to be 100% scientifically dubious.
                </p>
              </div>

              <Button
                onClick={startMoodScan}
                disabled={!petName || !photoUrl || processingState !== "idle"}
                className="w-full bg-stone-700 hover:bg-stone-800 text-white py-3 text-lg font-semibold"
              >
                <Scan className="w-5 h-5 mr-2" />
                Begin Mood Scan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}