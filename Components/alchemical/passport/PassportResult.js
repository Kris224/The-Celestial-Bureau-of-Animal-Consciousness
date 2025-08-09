import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Download, Share2, RotateCcw } from "lucide-react";
import { format } from 'date-fns';

export default function PassportResult({ passportData, onReset }) {
  const {
    petName,
    photoUrl,
    birthDate,
    city,
    passportNumber,
    profession,
    visaStamps,
    passportImageUrl
  } = passportData;

  const downloadPassport = () => {
    const link = document.createElement('a');
    link.href = passportImageUrl;
    link.download = `${petName.replace(/\s+/g, '_')}_Passport.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sharePassport = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${petName}'s Official Passport`,
          text: `Check out ${petName}'s official passport from the International Commonwealth of Couch-Surfing Creatures!`,
          url: passportImageUrl
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(passportImageUrl);
      alert('Passport link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm">
            ISSUED
          </div>
          <h1 className="text-4xl font-bold font-serif text-stone-800 mb-4">
            Official Passport Issued
          </h1>
          <p className="text-lg text-stone-600">
            Congratulations! {petName} is now an official citizen of the Commonwealth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Generated Passport Image */}
          <Card className="ministry-paper border-2 border-stone-400">
            <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
              <CardTitle className="text-xl font-serif text-stone-800 text-center">
                Official Passport Document
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <img 
                src={passportImageUrl} 
                alt={`${petName}'s Passport`}
                className="max-w-full h-auto rounded-lg shadow-lg border-4 border-white mx-auto"
              />
              <div className="mt-4 flex gap-4 justify-center">
                <Button onClick={downloadPassport} className="bg-stone-700 hover:bg-stone-800">
                  <Download className="w-4 h-4 mr-2" />
                  Download Passport
                </Button>
                <Button onClick={sharePassport} variant="outline" className="border-stone-400">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Passport
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Passport Details */}
          <div className="space-y-6">
            {/* Citizen Information */}
            <Card className="ministry-paper border-2 border-stone-400">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
                <CardTitle className="font-serif text-stone-800">
                  Citizen Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={photoUrl} 
                    alt={petName}
                    className="w-20 h-20 object-cover rounded-lg border-2 border-stone-400"
                  />
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-stone-800">{petName}</h3>
                    <p className="text-stone-600 font-medium">{profession}</p>
                    <Badge className="bg-green-100 text-green-800 mt-2">
                      ACTIVE CITIZEN
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm typewriter">
                  <div className="flex justify-between border-b border-stone-300 pb-1">
                    <span className="text-stone-600">Passport Number:</span>
                    <span className="font-bold text-stone-800">{passportNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-300 pb-1">
                    <span className="text-stone-600">Date of Birth/Adoption:</span>
                    <span className="font-bold text-stone-800">{format(new Date(birthDate), 'MMM d, yyyy')}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-300 pb-1">
                    <span className="text-stone-600">City of Residence:</span>
                    <span className="font-bold text-stone-800">{city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Issue Date:</span>
                    <span className="font-bold text-stone-800">{format(new Date(), 'MMM d, yyyy')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visa Stamps */}
            <Card className="ministry-paper border-2 border-stone-400">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
                <CardTitle className="font-serif text-stone-800 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Approved Visa Stamps
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {visaStamps.map((visa, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white border border-stone-300 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="ministry-stamp w-12 h-12 flex items-center justify-center font-bold text-xs text-stone-800">
                          VISA
                        </div>
                        <div>
                          <p className="font-semibold text-stone-800">{visa.location}</p>
                          <p className="text-xs text-stone-600">Territory Access Granted</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {format(new Date(visa.stamp_date), 'MMM yyyy')}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-amber-50 border border-amber-300 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Travel Notice:</strong> All visa stamps are valid for unlimited household territory access. 
                    Please present this passport when entering restricted areas such as the Human Bed Zone 
                    or the Kitchen Counter Territories.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center">
          <Button onClick={onReset} size="lg" className="bg-stone-700 hover:bg-stone-800">
            <RotateCcw className="w-5 h-5 mr-2" />
            Process Another Application
          </Button>
        </div>

        {/* Official Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 italic">
            This passport is an official document of the International Commonwealth of Couch-Surfing Creatures.
            <br />
            Valid for entertainment purposes only. Please do not attempt to use for actual international travel.
          </p>
        </div>
      </div>
    </div>
  );
}