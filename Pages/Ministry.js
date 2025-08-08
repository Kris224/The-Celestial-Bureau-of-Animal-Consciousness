
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { FileText, Clock, Star, ArrowRight, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MinistryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="ministry-stamp bg-yellow-400 text-red-900 w-24 h-24 mx-auto mb-8 flex items-center justify-center font-bold text-lg">
            EST.<br/>1847
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6" style={{fontFamily: 'Crimson Text, serif'}}>
            Welcome to the Ministry
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Where bureaucratic precision meets the boundless mysteries of your beloved pets' minds
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-red-200">
            <Badge variant="outline" className="border-red-300 text-red-200 bg-red-800/50">
              ★ Officially Certified Nonsense
            </Badge>
            <Badge variant="outline" className="border-red-300 text-red-200 bg-red-800/50">
              ★ Victorian-Era Procedures
            </Badge>
            <Badge variant="outline" className="border-red-300 text-red-200 bg-red-800/50">
              ★ 100% Imaginary Results
            </Badge>
          </div>
        </div>
      </section>

      {/* Department Showcase */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-red-900 mb-4">
              Our Esteemed Departments
            </h2>
            <p className="text-lg text-red-700 max-w-2xl mx-auto">
              Each division operates with the utmost dedication to scientific absurdity and bureaucratic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Dream Bureau Card */}
            <Card className="ministry-paper border-2 border-red-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-red-100 to-amber-100 border-b-2 border-red-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="ministry-stamp bg-yellow-400 text-red-900 w-16 h-16 flex items-center justify-center font-bold text-xs">
                      DEPT<br/>001
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-red-900">
                        The Celestial Bureau of Animal Consciousness
                      </CardTitle>
                      <p className="text-red-600 font-medium">
                        Division of Subconscious Pet Phenomena
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border border-green-300">
                    OPERATIONAL
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-red-800 mb-4">
                      Official Dream Analysis Services
                    </h3>
                    <p className="text-red-700 mb-6 leading-relaxed">
                      Our certified imaginary specialists will process your pet's unconscious mind through 
                      our time-tested bureaucratic procedures. Each case receives a full government-grade 
                      investigation complete with stamps, forms, and utterly ridiculous conclusions.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-red-600">
                        <FileText className="w-5 h-5" />
                        <span>Official case file creation</span>
                      </div>
                      <div className="flex items-center space-x-3 text-red-600">
                        <Clock className="w-5 h-5" />
                        <span>Multi-stage bureaucratic processing</span>
                      </div>
                      <div className="flex items-center space-x-3 text-red-600">
                        <Star className="w-5 h-5" />
                        <span>AI-generated dream interpretation</span>
                      </div>
                    </div>

                    <Link to={createPageUrl("DreamBureau")}>
                      <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 text-lg font-semibold">
                        Begin Dream Analysis
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="ministry-paper p-6 border-2 border-red-300 transform rotate-2">
                      <div className="text-center mb-4">
                        <div className="ministry-stamp bg-red-200 text-red-900 w-12 h-12 mx-auto flex items-center justify-center font-bold text-xs mb-2">
                          SAMPLE
                        </div>
                        <h4 className="font-bold text-red-900 typewriter text-sm">
                          CASE FILE #4729-B
                        </h4>
                      </div>
                      <div className="space-y-2 text-xs text-red-800">
                        <p><strong>Subject:</strong> Mr. Whiskers</p>
                        <p><strong>Species:</strong> Domestic Feline</p>
                        <p><strong>Dream Category:</strong> Culinary Fantasy</p>
                        <div className="border-t border-red-300 pt-2 mt-3">
                          <p className="font-bold">OFFICIAL CONCLUSION:</p>
                          <p className="italic">
                            "Subject was clearly dreaming of establishing a tuna empire..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Affection Registry Card */}
            <Card className="ministry-paper border-2 border-red-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-red-100 to-amber-100 border-b-2 border-red-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="ministry-stamp bg-pink-400 text-red-900 w-16 h-16 flex items-center justify-center font-bold text-xs">
                      DEPT<br/>002
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-red-900">
                        The Canine & Feline Affection Registry
                      </CardTitle>
                      <p className="text-red-600 font-medium">
                        Division of Calculated Companionship
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border border-green-300">
                    OPERATIONAL
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                   <div className="relative">
                    <div className="ministry-paper p-4 border-2 border-red-300 transform -rotate-2">
                      <div className="text-center mb-2">
                        <h4 className="font-bold text-red-900 typewriter text-sm">
                          MATCH FILE #8814-C
                        </h4>
                      </div>
                      <div className="flex gap-2">
                        <img src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=200&h=200&fit=crop" className="w-16 h-16 rounded-full border-2 border-white shadow-md" />
                         <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop" className="w-16 h-16 rounded-full border-2 border-white shadow-md" />
                      </div>
                       <div className="text-xs text-red-800 mt-2 border-t border-red-200 pt-2">
                          <p><strong>MATCH:</strong> Bartholomew & Penelope</p>
                          <p className="italic">"I sniffed. She purred. It was destiny."</p>
                        </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-800 mb-4">
                      Bureaucratic Matchmaking Services
                    </h3>
                    <p className="text-red-700 mb-6 leading-relaxed">
                      Our proprietary algorithm, powered by tea leaves and excessive paperwork, finds the perfect,
                      hilariously mismatched soulmate for your pet. Witness their awkward first encounter.
                    </p>
                    
                    <Link to={createPageUrl("AffectionRegistry")}>
                      <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 text-lg font-semibold">
                        Find a Match
                        <Heart className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Card */}
            <Card className="ministry-paper border-2 border-gray-300 opacity-75">
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="ministry-stamp bg-gray-300 text-gray-600 w-16 h-16 flex items-center justify-center font-bold text-xs">
                      DEPT<br/>002
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-gray-700">
                        The Canine [Department Name Classified]
                      </CardTitle>
                      <p className="text-gray-500 font-medium">
                        Division of [REDACTED]
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-gray-400 text-gray-600">
                    COMING SOON
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 text-lg">
                  Our second department is currently under construction by our finest bureaucrats. 
                  More absurd pet-related services will be available soon!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministry Statistics */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold font-serif text-center mb-12">
            Ministry Statistics (Completely Made Up)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15,847</div>
              <div className="text-red-200">Dreams Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98.7%</div>
              <div className="text-red-200">Accuracy Rate*</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">176</div>
              <div className="text-red-200">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-red-200">Stamps Used</div>
            </div>
          </div>
          <p className="text-center text-xs text-red-300 mt-6">
            *Accuracy not guaranteed, measured, or even attempted
          </p>
        </div>
      </section>
    </div>
  );
}
