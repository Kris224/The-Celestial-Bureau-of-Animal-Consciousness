
import React, { useState } from "react";
import { PassportApplication } from "@/entities/PassportApplication";
import { UploadFile, InvokeLLM } from "@/integrations/Core"; // Removed GenerateImage
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Upload, CheckCircle, Camera, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import PassportProcessing from "../components/passport/PassportProcessing";
import PassportResult from "../Components/passport/PassportResult";

export default function PassportDivisionPage() {
  const [petName, setPetName] = useState("");
  const [petPhoto, setPetPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [city, setCity] = useState("");
  const [passportData, setPassportData] = useState(null);
  const [processingState, setProcessingState] = useState("idle"); // idle, uploading, processing, done
  
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

  const startPassportProcessing = async () => {
    if (!petName || !photoUrl || !birthDate || !city) return;

    setProcessingState("processing");
    
    // Wait for passport animation to complete
    setTimeout(async () => {
      try {
        // Generate profession and visa stamps
        const aiData = await InvokeLLM({
          prompt: `You are creating a passport for a pet named "${petName}" from ${city}.

Generate:
1. "profession": A funny, absurd profession that a pet might have (e.g., "Chief Nap Officer", "Senior Treat Inspector", "Ambassador of Belly Rubs")

2. "visa_stamps": Array of exactly 5 household location visa stamps, each with:
   - "location": Absurd household territories like "The Kingdom of Under the Bed", "The Sunbeam Protectorate", "Republic of Behind the Couch", "The Laundry Basket Federation", etc.
   - "stamp_date": Random date in the past year

Make it official-sounding but completely ridiculous.`,
          response_json_schema: {
            type: "object",
            properties: {
              profession: { type: "string" },
              visa_stamps: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    location: { type: "string" },
                    stamp_date: { type: "string" }
                  }
                }
              }
            }
          }
        });

        const passportNumber = `CC-${Date.now().toString().slice(-6)}`;
        
        // Removed passport background image generation
        // const passportBackgroundPrompt = `...`; // This constant is removed
        // const { url: backgroundPassportUrl } = await GenerateImage({ prompt: passportBackgroundPrompt }); // This call is removed
        
        const finalData = {
          petName,
          photoUrl,
          birthDate,
          city,
          passportNumber,
          profession: aiData.profession,
          visaStamps: aiData.visa_stamps,
          // passportImageUrl: backgroundPassportUrl // This property is removed
        };
        
        setPassportData(finalData);
        
        // Save to database
        await PassportApplication.create({
          pet_name: petName,
          pet_photo_url: photoUrl,
          birth_adoption_date: birthDate,
          city: city,
          passport_number: passportNumber,
          profession: aiData.profession,
          visa_stamps: aiData.visa_stamps,
          // passport_image_url: backgroundPassportUrl // This property is removed
        });

        setProcessingState("done");
      } catch (error) {
        console.error("Error generating passport:", error);
        setProcessingState("idle");
      }
    }, 6000); // Wait 6 seconds for animation
  };

  const resetProcess = () => {
    setPetName("");
    setPetPhoto(null);
    setPhotoUrl("");
    setBirthDate("");
    setCity("");
    setPassportData(null);
    setProcessingState("idle");
  };

  if (processingState === "done" && passportData) {
    return <PassportResult passportData={passportData} onReset={resetProcess} />;
  }

  if (processingState === "processing") {
    return <PassportProcessing petName={petName} photoUrl={photoUrl} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm">
            PASS<br/>DEPT
          </div>
          <h1 className="text-4xl font-bold font-serif text-stone-800 mb-4">
            The International Commonwealth of Couch-Surfing Creatures
          </h1>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto">
            Bureau of Household Territory Navigation & Passport Services
          </p>
        </div>

        <Card className="ministry-paper border-2 border-stone-400">
          <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
            <CardTitle className="text-2xl font-serif text-stone-800 flex items-center">
              <MapPin className="w-6 h-6 mr-3" />
              Form 4-D: Citizenship & Passport Application
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="petName" className="text-stone-700 font-semibold">
                    Applicant's Full Name *
                  </Label>
                  <Input
                    id="petName"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g., Admiral Whiskers von Fluffington"
                    className="mt-2 border-stone-400 focus:border-stone-600"
                    disabled={processingState !== "idle"}
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="text-stone-700 font-semibold">
                    City of Residence *
                  </Label>
                  <Input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., New York, London, Tokyo"
                    className="mt-2 border-stone-400 focus:border-stone-600"
                    disabled={processingState !== "idle"}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="birthDate" className="text-stone-700 font-semibold">
                  Date of Birth/Adoption *
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="mt-2 border-stone-400 focus:border-stone-600"
                  disabled={processingState !== "idle"}
                />
              </div>

              <div>
                <Label className="text-stone-700 font-semibold">
                  Official Passport Photograph *
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
                          alt="Passport photo" 
                          className="max-w-xs mx-auto rounded-lg shadow-lg"
                        />
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Official Photo Accepted
                        </Badge>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Camera className="w-16 h-16 text-stone-500 mx-auto" />
                        <div>
                          <p className="text-stone-700 font-medium">Upload Passport Photograph</p>
                          <p className="text-stone-600 text-sm">
                            Official documentation photo required for international household travel
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                <p className="text-amber-800 text-sm">
                  <strong>CITIZENSHIP NOTICE:</strong> By submitting this application, your pet will become 
                  an official citizen of the International Commonwealth of Couch-Surfing Creatures with 
                  full travel privileges to all household territories. Passport processing includes 
                  professional assignment and visa stamp approval.
                </p>
              </div>

              <Button
                onClick={startPassportProcessing}
                disabled={!petName || !photoUrl || !birthDate || !city || processingState !== "idle"}
                className="w-full bg-stone-700 hover:bg-stone-800 text-white py-3 text-lg font-semibold"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Submit Passport Application
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
