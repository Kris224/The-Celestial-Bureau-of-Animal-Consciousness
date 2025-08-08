
import React, { useState } from "react";
import { DreamAnalysis } from "@/entities/DreamAnalysis";
import { UploadFile, InvokeLLM } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, Stamp, Clock, CheckCircle, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import BureaucraticSteps from "../components/dream/BureaucraticSteps";
import CaseFileDisplay from "../components/dream/CaseFileDisplay";
import DreamReport from "../components/dream/DreamReport";

export default function DreamBureauPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [petName, setPetName] = useState("");
  const [petPhoto, setPetPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [dreamData, setDreamData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPetPhoto(file);
    setIsProcessing(true);

    try {
      const { file_url } = await UploadFile({ file });
      setPhotoUrl(file_url);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
    
    setIsProcessing(false);
  };

  const startBureaucraticProcess = async () => {
    if (!petName || !photoUrl) return;

    setIsProcessing(true);
    
    // Generate case number
    const caseNum = `${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    setCaseNumber(caseNum);
    
    setCurrentStep(2);
    
    // Simulate bureaucratic processing steps
    setTimeout(() => setCurrentStep(3), 2000);
    setTimeout(() => setCurrentStep(4), 4000);
    setTimeout(() => setCurrentStep(5), 6000);
    
    setTimeout(async () => {
      try {
        // Generate dream analysis
        const result = await InvokeLLM({
          prompt: `You are a hilariously serious bureaucrat at "The Celestial Bureau of Animal Consciousness." Your task is to analyze a pet's dream.

Pet's Name: "${petName}"

Please provide a JSON object with the following fields:
1.  "dream_title": A very funny, official-sounding title for the dream (e.g., "The Unresolved Case of the Phantom Squeaky Toy").
2.  "dream_category": A broad, humorous category (e.g., "Existential Snack Contemplation").
3.  "official_conclusion": A short, funny, bureaucratic dream analysis report (100-150 words). Make it sound official but be utterly ridiculous.`,
          response_json_schema: {
            type: "object",
            properties: {
              dream_title: {
                type: "string",
                description: "A very funny, official-sounding title for the dream."
              },
              dream_category: {
                type: "string",
                description: "A funny category for the dream like 'Culinary Conspiracy' or 'Territorial Negotiations'"
              },
              official_conclusion: {
                type: "string", 
                description: "The full bureaucratic dream analysis report, 100-150 words."
              }
            }
          }
        });

        setDreamData(result);
        
        // Save to database
        await DreamAnalysis.create({
          pet_name: petName,
          pet_photo_url: photoUrl,
          case_number: caseNum,
          dream_analysis: result.official_conclusion,
          dream_category: result.dream_category,
        });
        
        setCurrentStep(6);
        setIsProcessing(false);
      } catch (error) {
        console.error("Error generating dream analysis:", error);
        setIsProcessing(false);
      }
    }, 8000);
  };

  const resetProcess = () => {
    setCurrentStep(1);
    setPetName("");
    setPetPhoto(null);
    setPhotoUrl("");
    setCaseNumber("");
    setDreamData(null);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="ministry-stamp bg-yellow-400 text-red-900 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm">
            DREAM<br/>DEPT
          </div>
          <h1 className="text-4xl font-bold font-serif text-red-900 mb-4">
            The Celestial Bureau of Animal Consciousness
          </h1>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Official Dream Analysis Processing Center • Est. 1847
          </p>
        </div>

        {currentStep === 1 && (
          <Card className="ministry-paper border-2 border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-100 to-amber-100 border-b-2 border-red-200">
              <CardTitle className="text-2xl font-serif text-red-900 flex items-center">
                <FileText className="w-6 h-6 mr-3" />
                Form 1-A: Initial Case Submission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="petName" className="text-red-800 font-semibold">
                    Pet's Full Legal Name *
                  </Label>
                  <Input
                    id="petName"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g., Sir Whiskers McFluffington III"
                    className="mt-2 border-red-300 focus:border-red-500"
                  />
                </div>

                <div>
                  <Label className="text-red-800 font-semibold">
                    Photographic Evidence of Sleeping Subject *
                  </Label>
                  <div className="mt-2 border-2 border-dashed border-red-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      id="photoUpload"
                    />
                    <label htmlFor="photoUpload" className="cursor-pointer">
                      {petPhoto ? (
                        <div className="space-y-4">
                          <img 
                            src={photoUrl} 
                            alt="Pet sleeping" 
                            className="max-w-xs mx-auto rounded-lg shadow-lg"
                          />
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Photo Uploaded Successfully
                          </Badge>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Camera className="w-16 h-16 text-red-400 mx-auto" />
                          <div>
                            <p className="text-red-700 font-medium">Upload Photo of Sleeping Pet</p>
                            <p className="text-red-500 text-sm">
                              Official documentation required for dream analysis
                            </p>
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">
                    <strong>OFFICIAL NOTICE:</strong> By submitting this form, you acknowledge that the Ministry's 
                    dream analysis results are completely imaginary and intended for entertainment purposes only. 
                    The Ministry is not responsible for any actual dream-related incidents.
                  </p>
                </div>

                <Button
                  onClick={startBureaucraticProcess}
                  disabled={!petName || !photoUrl || isProcessing}
                  className="w-full bg-red-800 hover:bg-red-900 text-white py-3 text-lg font-semibold"
                >
                  {isProcessing ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Processing Upload...
                    </>
                  ) : (
                    <>
                      <Stamp className="w-5 h-5 mr-2" />
                      Submit for Official Processing
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep >= 2 && currentStep <= 5 && (
          <BureaucraticSteps 
            currentStep={currentStep}
            petName={petName}
            caseNumber={caseNumber}
          />
        )}

        {currentStep === 6 && dreamData && (
          <div className="space-y-8">
            <CaseFileDisplay 
              petName={petName}
              caseNumber={caseNumber}
              photoUrl={photoUrl}
              dreamCategory={dreamData.dream_category}
            />
            
            <DreamReport 
              dreamTitle={dreamData.dream_title}
              dreamAnalysis={dreamData.official_conclusion}
              onReset={resetProcess}
            />
          </div>
        )}
      </div>
    </div>
  );
}
