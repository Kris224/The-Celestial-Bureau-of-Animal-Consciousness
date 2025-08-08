import React, { useState } from "react";
import { AffectionRegistryMatch } from "@/entities/AffectionRegistryMatch";
import { UploadFile, InvokeLLM, GenerateImage } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, Heart, CheckCircle, Camera, RotateCcw, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MatchResult from "../components/registry/MatchResult";

export default function AffectionRegistryPage() {
  const [petName, setPetName] = useState("");
  const [petPhoto, setPetPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [matchData, setMatchData] = useState(null);
  const [processingState, setProcessingState] = useState("idle"); // idle, uploading, generating_match, generating_image, done
  
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
  
  const startMatchmaking = async () => {
    if (!petName || !photoUrl) return;

    setProcessingState("generating_match");
    try {
      const llmResult = await InvokeLLM({
        prompt: `You are a matchmaker for "The Canine & Feline Affection Registry."
        A profile has been submitted for a pet named "${petName}".
        
        Your task is to create a perfect, quirky, and funny soulmate for this pet.
        
        Return a JSON object with:
        1. "match_name": A funny, slightly posh name.
        2. "match_species": The species (e.g., "Siberian Husky," "British Shorthair").
        3. "match_photo_prompt": A detailed prompt for an image generation model to create a portrait of the match. Make it whimsical and specific (e.g., "A sophisticated British Shorthair cat wearing a monocle and a tiny bow tie, oil painting, moody lighting").
        4. "match_bio": A short, funny bio (2-3 sentences) from the match's perspective.
        5. "awkward_conversation": A 2-4 line, very awkward first conversation between "${petName}" and your created match. Format as: Pet1: "dialogue"\\nPet2: "dialogue"`,
        response_json_schema: {
          type: "object",
          properties: {
            match_name: { type: "string" },
            match_species: { type: "string" },
            match_photo_prompt: { type: "string" },
            match_bio: { type: "string" },
            awkward_conversation: { type: "string" },
          }
        }
      });

      setProcessingState("generating_image");
      const { url: matchPhotoUrl } = await GenerateImage({ prompt: llmResult.match_photo_prompt });
      
      const finalData = {
        userPet: { name: petName, photoUrl: photoUrl },
        matchPet: {
          name: llmResult.match_name,
          species: llmResult.match_species,
          photoUrl: matchPhotoUrl,
          bio: llmResult.match_bio,
        },
        conversation: llmResult.awkward_conversation,
        caseNumber: `MATCH-${Date.now()}`
      };
      
      setMatchData(finalData);
      
      await AffectionRegistryMatch.create({
        user_pet_name: petName,
        user_pet_photo_url: photoUrl,
        match_pet_name: finalData.matchPet.name,
        match_pet_photo_url: finalData.matchPet.photoUrl,
        match_pet_bio: finalData.matchPet.bio,
        first_conversation: finalData.conversation,
        case_number: finalData.caseNumber,
      });

      setProcessingState("done");
    } catch (error) {
      console.error("Matchmaking error:", error);
      setProcessingState("idle");
    }
  };
  
  const resetProcess = () => {
    setPetName("");
    setPetPhoto(null);
    setPhotoUrl("");
    setMatchData(null);
    setProcessingState("idle");
  };

  const isProcessing = processingState !== 'idle' && processingState !== 'done';

  const getButtonText = () => {
    switch (processingState) {
      case 'uploading': return "Uploading Photo...";
      case 'generating_match': return "Consulting Astrologers...";
      case 'generating_image': return "Commissioning Portrait...";
      default: return "Find The One";
    }
  };

  if (processingState === "done" && matchData) {
    return <MatchResult matchData={matchData} onReset={resetProcess} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="ministry-stamp bg-pink-400 text-red-900 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm">
            DEPT<br/>002
          </div>
          <h1 className="text-4xl font-bold font-serif text-red-900 mb-4">
            The Canine & Feline Affection Registry
          </h1>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Official Matchmaking & Calculated Companionship Division
          </p>
        </div>

        <Card className="ministry-paper border-2 border-red-200">
          <CardHeader className="bg-gradient-to-r from-red-100 to-amber-100 border-b-2 border-red-200">
            <CardTitle className="text-2xl font-serif text-red-900 flex items-center">
              <FileText className="w-6 h-6 mr-3" />
              Form 2-B: Applicant Profile Submission
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="petName" className="text-red-800 font-semibold">
                  Applicant's Name
                </Label>
                <Input
                  id="petName"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="e.g., Captain Floof"
                  className="mt-2 border-red-300 focus:border-red-500"
                  disabled={isProcessing}
                />
              </div>

              <div>
                <Label className="text-red-800 font-semibold">
                  Official Applicant Portrait
                </Label>
                <div className="mt-2 border-2 border-dashed border-red-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photoUpload"
                    disabled={isProcessing}
                  />
                  <label htmlFor="photoUpload" className={isProcessing ? "cursor-not-allowed" : "cursor-pointer"}>
                    {photoUrl ? (
                      <div className="space-y-4">
                        <img 
                          src={photoUrl} 
                          alt="Pet" 
                          className="max-w-xs mx-auto rounded-lg shadow-lg"
                        />
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Portrait Filed Successfully
                        </Badge>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Camera className="w-16 h-16 text-red-400 mx-auto" />
                        <div>
                          <p className="text-red-700 font-medium">Upload Applicant Portrait</p>
                          <p className="text-red-500 text-sm">
                            A clear, dignified photo is required for processing.
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <Button
                onClick={startMatchmaking}
                disabled={!petName || !photoUrl || isProcessing}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg font-semibold"
              >
                {isProcessing ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Heart className="w-5 h-5 mr-2" />
                )}
                {getButtonText()}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}