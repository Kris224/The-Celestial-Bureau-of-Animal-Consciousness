
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { FileText, Clock, Star, ArrowRight, Heart, Sparkles, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MinistryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-800 via-stone-700 to-amber-800 text-stone-100 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="ministry-stamp text-stone-800 w-24 h-24 mx-auto mb-8 flex items-center justify-center font-bold text-lg">
            EST.<br/>1847
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6" style={{fontFamily: 'Crimson Text, serif'}}>
            Welcome to the Ministry
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Where bureaucratic precision meets the boundless mysteries of your beloved pets' minds
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-200">
            <Badge variant="outline" className="border-amber-300 text-amber-200 bg-amber-800/50">
              ★ Officially Certified Nonsense
            </Badge>
            <Badge variant="outline" className="border-amber-300 text-amber-200 bg-amber-800/50">
              ★ Victorian-Era Procedures
            </Badge>
            <Badge variant="outline" className="border-amber-300 text-amber-200 bg-amber-800/50">
              ★ 100% Imaginary Results
            </Badge>
          </div>
        </div>
      </section>

      {/* Department Showcase */}
      <section className="py-20 bg-gradient-to-b from-stone-100 to-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-stone-800 mb-4">
              Our Esteemed Departments
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              Each division operates with the utmost dedication to scientific absurdity and bureaucratic excellence
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto space-y-8">
            {/* Dream Bureau Card */}
            <Card className="ministry-paper border-2 border-stone-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="ministry-stamp text-stone-800 w-16 h-16 flex items-center justify-center font-bold text-xs">
                      DEPT<br/>001
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-stone-800">
                        The Celestial Bureau of Animal Consciousness
                      </CardTitle>
                      <p className="text-stone-600 font-medium">
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
                    <h3 className="text-xl font-semibold text-stone-700 mb-4">
                      Official Dream Analysis Services
                    </h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                      Our certified imaginary specialists will process your pet's unconscious mind through 
                      our time-tested bureaucratic procedures. Each case receives a full government-grade 
                      investigation complete with stamps, forms, and utterly ridiculous conclusions.
                    </p>
                    
                    <Link to={createPageUrl("DreamBureau")}>
                      <Button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 text-lg font-semibold">
                        Begin Dream Analysis
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="ministry-paper p-6 border-2 border-stone-500 transform rotate-2">
                      <div className="text-center mb-4">
                        <div className="ministry-stamp text-stone-800 w-12 h-12 mx-auto flex items-center justify-center font-bold text-xs mb-2">
                          SAMPLE
                        </div>
                        <h4 className="font-bold text-stone-800 typewriter text-sm">
                          "The Great Sock Conspiracy"
                        </h4>
                      </div>
                      <div className="space-y-2 text-xs text-stone-700">
                        <p><strong>Subject:</strong> Mr. Whiskers</p>
                        <p><strong>Category:</strong> Culinary Fantasy</p>
                        <div className="border-t border-stone-400 pt-2 mt-3">
                          <p className="italic">
                            "Subject dreaming of establishing tuna empire via strategic sock theft..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Affection Registry Card */}
            <Card className="ministry-paper border-2 border-stone-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="ministry-stamp text-stone-800 w-16 h-16 flex items-center justify-center font-bold text-xs">
                      DEPT<br/>002
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-stone-800">
                        The Canine & Feline Affection Registry
                      </CardTitle>
                      <p className="text-stone-600 font-medium">
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
                    <div className="ministry-paper p-4 border-2 border-stone-500 transform -rotate-2">
                      <div className="text-center mb-2">
                        <h4 className="font-bold text-stone-800 typewriter text-sm">
                          MATCH FILE #8814-C
                        </h4>
                      </div>
                      <div className="flex gap-2">
                        <img src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=200&h=200&fit=crop" className="w-16 h-16 rounded-full border-2 border-white shadow-md" alt="Pet 1" />
                        <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop" className="w-16 h-16 rounded-full border-2 border-white shadow-md" alt="Pet 2" />
                      </div>
                      <div className="text-xs text-stone-700 mt-2 border-t border-stone-400 pt-2">
                        <p><strong>MATCH:</strong> Bartholomew & Penelope</p>
                        <p className="italic">"I sniffed. She purred. It was destiny."</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-700 mb-4">
                      Bureaucratic Matchmaking Services
                    </h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                      Our proprietary algorithm, powered by tea leaves and excessive paperwork, finds the perfect,
                      hilariously mismatched soulmate for your pet. Witness their awkward first encounter.
                    </p>
                    
                    <Link to={createPageUrl("AffectionRegistry")}>
                      <Button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 text-lg font-semibold">
                        Find a Match
                        <Heart className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alchemical Division Card */}
            <Card className="ministry-paper border-2 border-stone-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="ministry-stamp text-stone-800 w-16 h-16 flex items-center justify-center font-bold text-xs">
                      DEPT<br/>003
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-stone-800">
                        The Alchemical Division of Pet Essence & Ancestry
                      </CardTitle>
                      <p className="text-stone-600 font-medium">
                        Bureau of Ethereal Spectrography & Mythical Genealogy
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
                    <h3 className="text-xl font-semibold text-stone-700 mb-4">
                      Spectral Essence Analysis Services
                    </h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                      Using our patented Ethereal Spectrograph™, we analyze your pet's mystical aura to determine 
                      their essence composition, trace their mythical ancestry, and calculate their precise 
                      Cuteness Overload Probability using advanced pseudoscientific formulas.
                    </p>
                    
                    <Link to={createPageUrl("AlchemicalDivision")}>
                      <Button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 text-lg font-semibold">
                        Begin Spectral Analysis
                        <Sparkles className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="ministry-paper p-4 border-2 border-stone-500 transform rotate-1">
                      <div className="text-center mb-2">
                        <div className="ministry-stamp text-stone-800 w-12 h-12 mx-auto flex items-center justify-center font-bold text-xs mb-2">
                          ETHEREAL
                        </div>
                        <h4 className="font-bold text-stone-800 typewriter text-xs">
                          SPECTRAL ANALYSIS #7291-E
                        </h4>
                      </div>
                      <div className="space-y-1 text-xs text-stone-700">
                        <p><strong>Essence:</strong> 40% Mischief, 35% Cuddle</p>
                        <p><strong>Ancestry:</strong> Phoenix Lineage</p>
                        <p><strong>Cuteness:</strong> 97.3% Probability</p>
                        <div className="border-t border-stone-400 pt-1 mt-2">
                          <p className="italic text-xs">
                            "Formula: C = (F×S²)/√T where F=Fluff..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Passport Division Card */}
            <Card className="ministry-paper border-2 border-stone-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="ministry-stamp text-stone-800 w-16 h-16 flex items-center justify-center font-bold text-xs">
                      DEPT<br/>004
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-stone-800">
                        The International Commonwealth of Couch-Surfing Creatures
                      </CardTitle>
                      <p className="text-stone-600 font-medium">
                        Bureau of Household Territory Navigation & Passport Services
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
                    <div className="ministry-paper p-4 border-2 border-stone-500 transform rotate-1">
                      <div className="text-center mb-2">
                        <div className="ministry-stamp text-stone-800 w-12 h-12 mx-auto flex items-center justify-center font-bold text-xs mb-2">
                          PASS<br/>PORT
                        </div>
                        <h4 className="font-bold text-stone-800 typewriter text-sm">
                          CITIZEN #CC-4471
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=100&h=100&fit=crop" className="w-12 h-12 rounded border-2 border-white shadow-sm" alt="Pet passport" />
                        <div className="text-xs text-stone-700">
                          <p><strong>Name:</strong> Captain Whiskers</p>
                          <p><strong>Profession:</strong> Chief Nap Officer</p>
                        </div>
                      </div>
                      <div className="text-xs text-stone-700 border-t border-stone-400 pt-1">
                        <p className="italic">
                          "Visas: Kingdom of Under the Bed, Sunbeam Protectorate..."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-700 mb-4">
                      Official Passport & Visa Services
                    </h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                      Register your pet as a citizen of the household realm and obtain official documentation 
                      for travel to mysterious territories like the Kingdom of Under the Bed, 
                      the Sunbeam Protectorate, and the Republic of Behind the Couch.
                    </p>
                    
                    <Link to={createPageUrl("PassportDivision")}>
                      <Button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 text-lg font-semibold">
                        Apply for Passport
                        <MapPin className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministry Statistics */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold font-serif text-center mb-12">
            Ministry Statistics (Completely Made Up)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">15,847</div>
              <div className="text-stone-300">Dreams Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">12,394</div>
              <div className="text-stone-300">Matches Made</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">8,721</div>
              <div className="text-stone-300">Auras Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">6,543</div>
              <div className="text-stone-300">Passports Issued</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">176</div>
              <div className="text-stone-300">Years of Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
