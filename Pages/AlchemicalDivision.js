import React, { useState } from "react";
import { AlchemicalAnalysis } from "@/entities/AlchemicalAnalysis";
import { UploadFile, InvokeLLM } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Upload, CheckCircle, Camera, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import EtherealSpectrograph from "../components/alchemical/EtherealSpectrograph";
import SpectralAnalysisReport from "../components/alchemical/SpectralAnalysisReport";

export default function AlchemicalDivisionPage() {
  const [petName, setPetName] = useState("");
  const [petPhoto, setPetPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [analysisData, setAnalysisData] = useState(null);
  const [processingState, setProcessingState] = useState("idle"); // idle, uploading, analyzing, done
  
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

  const startSpectralAnalysis = async () => {
    if (!petName || !photoUrl) return;

    setProcessingState("analyzing");
    
    // Wait for spectrograph animation to complete
    setTimeout(async () => {
      try {
        const result = await InvokeLLM({
          prompt: `You are a mystical alchemist at "The Alchemical Division of Pet Essence & Ancestry."

Pet's Name: "${petName}"

Create a completely absurd but scientifically-worded spectral analysis with:

1. "essence_composition": An object with exactly these 5 traits that add up to 100:
   - mischief (number)
   - cuddle_essence (number) 
   - treat_magnetism (number)
   - nap_power (number)
   - zoomie_energy (number)

2. "mythical_ancestry": A mythical creature this pet descended from (e.g., "Ancient Phoenix", "Celestial Dragon")

3. "ancestry_description": A 2-3 sentence funny explanation of how this pet is related to that creature

4. "cuteness_overload_probability": A percentage between 85-99

5. "cuteness_formula": A ridiculous fake scientific formula explaining the cuteness calculation

Make it sound official but completely ridiculous.`,
          response_json_schema: {
            type: "object",
            properties: {
              essence_composition: {
                type: "object",
                properties: {
                  mischief: { type: "number" },
                  cuddle_essence: { type: "number" },
                  treat_magnetism: { type: "number" },
                  nap_power: { type: "number" },
                  zoomie_energy: { type: "number" }
                }
              },
              mythical_ancestry: { type: "string" },
              ancestry_description: { type: "string" },
              cuteness_overload_probability: { type: "number" },
              cuteness_formula: { type: "string" }
            }
          }
        });

        const caseNum = `ALCH-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
        
        const finalData = {
          petName,
          photoUrl,
          caseNumber: caseNum,
          ...result
        };
        
        setAnalysisData(finalData);
        
        // Save to database
        await AlchemicalAnalysis.create({
          pet_name: petName,
          pet_photo_url: photoUrl,
          case_number: caseNum,
          essence_composition: result.essence_composition,
          mythical_ancestry: result.mythical_ancestry,
          ancestry_description: result.ancestry_description,
          cuteness_overload_probability: result.cuteness_overload_probability,
          cuteness_formula: result.cuteness_formula
        });

        setProcessingState("done");
      } catch (error) {
        console.error("Error generating analysis:", error);
        setProcessingState("idle");
      }
    }, 5000); // Wait 5 seconds for animation
  };

  const resetProcess = () => {
    setPetName("");
    setPetPhoto(null);
    setPhotoUrl("");
    setAnalysisData(null);
    setProcessingState("idle");
  };

  if (processingState === "done" && analysisData) {
    return <SpectralAnalysisReport analysisData={analysisData} onReset={resetProcess} />;
  }

  if (processingState === "analyzing") {
    return <EtherealSpectrograph petName={petName} photoUrl={photoUrl} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm">
            ALCH<br/>DEPT
          </div>
          <h1 className="text-4xl font-bold font-serif text-stone-800 mb-4">
            The Alchemical Division of Pet Essence & Ancestry
          </h1>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto">
            Bureau of Ethereal Spectrography & Mythical Genealogy • Est. 1847
          </p>
        </div>

        <Card className="ministry-paper border-2 border-stone-400">
          <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
            <CardTitle className="text-2xl font-serif text-stone-800 flex items-center">
              <Sparkles className="w-6 h-6 mr-3" />
              Form 3-C: Spectral Analysis Request
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="petName" className="text-stone-700 font-semibold">
                  Subject's Designated Name *
                </Label>
                <Input
                  id="petName"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="e.g., Sir Fluffington the Mystical"
                  className="mt-2 border-stone-400 focus:border-stone-600"
                  disabled={processingState !== "idle"}
                />
              </div>

              <div>
                <Label className="text-stone-700 font-semibold">
                  Photographic Specimen for Aura Analysis *
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
                          alt="Pet specimen" 
                          className="max-w-xs mx-auto rounded-lg shadow-lg"
                        />
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Specimen Catalogued Successfully
                        </Badge>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Camera className="w-16 h-16 text-stone-500 mx-auto" />
                        <div>
                          <p className="text-stone-700 font-medium">Upload Subject Photograph</p>
                          <p className="text-stone-600 text-sm">
                            Clear imagery required for ethereal aura detection
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                <p className="text-amber-800 text-sm">
                  <strong>OFFICIAL NOTICE:</strong> The Ethereal Spectrograph™ will analyze your pet's mystical 
                  essence using proprietary alchemical algorithms. Results are guaranteed to be 100% fabricated 
                  and intended for entertainment purposes only.
                </p>
              </div>

              <Button
                onClick={startSpectralAnalysis}
                disabled={!petName || !photoUrl || processingState !== "idle"}
                className="w-full bg-stone-700 hover:bg-stone-800 text-white py-3 text-lg font-semibold"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Initiate Spectral Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}