import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export default function CaseFileDisplay({ petName, caseNumber, photoUrl, dreamCategory }) {
  return (
    <Card className="ministry-paper border-2 border-red-200 transform -rotate-1">
      <CardHeader className="bg-gradient-to-r from-red-100 to-amber-100 border-b-2 border-red-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-red-800" />
            <div>
              <h3 className="text-xl font-bold font-serif text-red-900">
                OFFICIAL CASE FILE
              </h3>
              <p className="text-red-600">
                Case #{caseNumber}
              </p>
            </div>
          </div>
          <div className="ministry-stamp bg-red-500 text-white w-16 h-16 flex items-center justify-center font-bold text-xs">
            APPROVED
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="border-b border-red-200 pb-2">
              <p className="text-red-600 text-sm font-medium uppercase tracking-wide">
                Subject Information
              </p>
            </div>
            
            <div className="space-y-3 typewriter text-sm">
              <div>
                <span className="text-red-800 font-bold">FULL NAME:</span>
                <span className="ml-2">{petName}</span>
              </div>
              <div>
                <span className="text-red-800 font-bold">CASE NUMBER:</span>
                <span className="ml-2">{caseNumber}</span>
              </div>
              <div>
                <span className="text-red-800 font-bold">PROCESSING DATE:</span>
                <span className="ml-2">{new Date().toLocaleDateString()}</span>
              </div>
              <div>
                <span className="text-red-800 font-bold">DREAM CATEGORY:</span>
                <Badge className="ml-2 bg-purple-100 text-purple-800">
                  {dreamCategory}
                </Badge>
              </div>
              <div>
                <span className="text-red-800 font-bold">STATUS:</span>
                <Badge className="ml-2 bg-green-100 text-green-800">
                  ANALYSIS COMPLETE
                </Badge>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-red-600 text-sm font-medium uppercase tracking-wide mb-3">
              Photographic Evidence
            </p>
            <div className="relative">
              <img 
                src={photoUrl} 
                alt={`${petName} sleeping`}
                className="max-w-full h-auto rounded-lg shadow-lg border-4 border-white"
              />
              <div className="absolute -bottom-2 -right-2 ministry-stamp bg-red-500 text-white w-12 h-12 flex items-center justify-center font-bold text-xs">
                FILED
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}