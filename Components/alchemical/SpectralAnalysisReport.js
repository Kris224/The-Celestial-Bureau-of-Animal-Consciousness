import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Sparkles, RotateCcw } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function SpectralAnalysisReport({ analysisData, onReset }) {
  const {
    petName,
    photoUrl,
    caseNumber,
    essence_composition,
    mythical_ancestry,
    ancestry_description,
    cuteness_overload_probability,
    cuteness_formula
  } = analysisData;

  // Convert essence composition to chart data
  const essenceData = [
    { name: 'Mischief', value: essence_composition.mischief, color: '#ef4444' },
    { name: 'Cuddle Essence', value: essence_composition.cuddle_essence, color: '#f97316' },
    { name: 'Treat Magnetism', value: essence_composition.treat_magnetism, color: '#eab308' },
    { name: 'Nap Power', value: essence_composition.nap_power, color: '#22c55e' },
    { name: 'Zoomie Energy', value: essence_composition.zoomie_energy, color: '#3b82f6' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="ministry-stamp text-stone-800 w-20 h-20 mx-auto mb-6 flex items-center justify-center font-bold text-sm">
            FINAL
          </div>
          <h1 className="text-4xl font-bold font-serif text-stone-800 mb-4">
            Official Spectral Analysis Report
          </h1>
          <p className="text-lg text-stone-600">
            Case Number: {caseNumber} • Subject: {petName}
          </p>
        </div>

        {/* Main Report */}
        <Card className="ministry-paper border-2 border-stone-400 mb-8">
          <CardHeader className="bg-gradient-to-r from-stone-200 to-amber-100 border-b-2 border-stone-400">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-serif text-stone-800 flex items-center">
                <FileText className="w-6 h-6 mr-3" />
                SPECTRAL ANALYSIS REPORT
              </CardTitle>
              <div className="ministry-stamp text-stone-800 w-16 h-16 flex items-center justify-center font-bold text-xs">
                CERT<br/>IFIED
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Badge className="bg-green-100 text-green-800">
                ★ ETHEREAL ANALYSIS COMPLETE
              </Badge>
              <Badge className="bg-amber-100 text-amber-800">
                ★ MYSTICAL VERIFICATION APPROVED
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Subject Photo */}
              <div className="text-center">
                <h3 className="text-xl font-bold font-serif text-stone-800 mb-4">
                  Analyzed Subject
                </h3>
                <img 
                  src={photoUrl} 
                  alt={petName} 
                  className="w-48 h-48 object-cover rounded-lg shadow-lg mx-auto border-4 border-white"
                />
                <h4 className="text-2xl font-bold font-serif text-stone-800 mt-4">
                  {petName}
                </h4>
              </div>

              {/* Essence Composition Chart */}
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-800 mb-4 text-center">
                  Essence Composition Analysis
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={essenceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}%`}
                      >
                        {essenceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Mythical Ancestry */}
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-800 mb-4 text-center">
                  Mythical Ancestry Trace
                </h3>
                <div className="ministry-paper border-2 border-amber-400 p-6 text-center">
                  <div className="text-6xl mb-4">🐉</div>
                  <h4 className="text-lg font-bold text-amber-800 mb-2">
                    {mythical_ancestry}
                  </h4>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {ancestry_description}
                  </p>
                </div>
              </div>
            </div>

            {/* Cuteness Overload Analysis */}
            <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-300 rounded-lg p-6">
              <h3 className="text-2xl font-bold font-serif text-center text-pink-800 mb-4">
                Cuteness Overload Probability Assessment
              </h3>
              
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-pink-600 mb-2">
                  {cuteness_overload_probability}%
                </div>
                <Badge className="bg-pink-100 text-pink-800 text-lg px-4 py-2">
                  EXTREME CUTENESS DETECTED
                </Badge>
              </div>

              <div className="ministry-paper border-2 border-stone-400 p-4 max-w-2xl mx-auto">
                <h4 className="font-bold text-stone-800 mb-2 typewriter text-center">
                  OFFICIAL CUTENESS CALCULATION FORMULA
                </h4>
                <div className="text-center font-mono text-stone-700 text-sm bg-white p-3 border border-stone-300 rounded">
                  {cuteness_formula}
                </div>
                <p className="text-xs text-stone-600 mt-2 text-center italic">
                  * Formula certified by the International Bureau of Adorableness Standards
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="text-center">
          <Button onClick={onReset} size="lg" className="bg-stone-700 hover:bg-stone-800">
            <RotateCcw className="w-5 h-5 mr-2" />
            Analyze Another Subject
          </Button>
        </div>

        {/* Official Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 italic">
            This spectral analysis report is completely fabricated and intended for entertainment purposes only.
            <br />
            The Ministry of Absurd Inventions accepts no responsibility for actual mystical phenomena.
          </p>
        </div>
      </div>
    </div>
  );
}