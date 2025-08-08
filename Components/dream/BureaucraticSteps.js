import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Stamp, CheckCircle, Eye } from "lucide-react";

const processingSteps = [
  {
    id: 2,
    title: "Initial Case Logging",
    description: "Filing your pet's case in the Central Dream Registry",
    icon: FileText,
    status: "Stamping documents..."
  },
  {
    id: 3,
    title: "Department Review",
    description: "Senior Dream Analyst reviewing photographic evidence",
    icon: Eye,
    status: "Analyzing sleep posture..."
  },
  {
    id: 4,
    title: "Official Approval",
    description: "Department Head authorizing dream interpretation",
    icon: Stamp,
    status: "Applying official seals..."
  },
  {
    id: 5,
    title: "Final Processing",
    description: "Generating comprehensive dream analysis report",
    icon: CheckCircle,
    status: "Consulting imaginary experts..."
  }
];

export default function BureaucraticSteps({ currentStep, petName, caseNumber }) {
  return (
    <Card className="ministry-paper border-2 border-red-200">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="ministry-stamp bg-blue-400 text-red-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xs">
            CASE<br/>{caseNumber.split('-')[1]}
          </div>
          <h2 className="text-2xl font-bold font-serif text-red-900 mb-2">
            Processing Case for {petName}
          </h2>
          <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-300">
            <Clock className="w-4 h-4 mr-2" />
            Official Processing in Progress
          </Badge>
        </div>

        <div className="space-y-6">
          {processingSteps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <div key={step.id} className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all ${
                isActive 
                  ? 'border-blue-400 bg-blue-50' 
                  : isCompleted 
                    ? 'border-green-400 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isActive 
                    ? 'bg-blue-400 text-white animate-pulse' 
                    : isCompleted 
                      ? 'bg-green-400 text-white'
                      : 'bg-gray-300 text-gray-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-red-900">
                    {step.title}
                  </h3>
                  <p className="text-red-600 text-sm">
                    {step.description}
                  </p>
                  {isActive && (
                    <p className="text-blue-700 text-sm italic mt-1">
                      {step.status}
                    </p>
                  )}
                </div>

                {isCompleted && (
                  <Badge className="bg-green-100 text-green-800">
                    ✓ COMPLETE
                  </Badge>
                )}
                {isActive && (
                  <Badge className="bg-blue-100 text-blue-800">
                    IN PROGRESS
                  </Badge>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800 text-center font-medium">
            Please wait while our certified imaginary specialists process your case...
          </p>
        </div>
      </CardContent>
    </Card>
  );
}