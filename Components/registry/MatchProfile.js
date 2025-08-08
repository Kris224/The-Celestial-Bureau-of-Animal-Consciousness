import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MatchProfile({ pet, title }) {
  return (
    <Card className="ministry-paper border-2 border-red-200 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 rounded-full bg-red-500/10"></div>
      <CardHeader>
        <CardTitle className="font-serif text-red-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img 
          src={pet.photoUrl} 
          alt={pet.name} 
          className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
        />
        <h3 className="text-3xl font-bold font-serif text-red-900 mt-4">
          {pet.name}
        </h3>
        {pet.species && (
          <p className="text-red-600 font-medium">{pet.species}</p>
        )}
        {pet.bio && (
          <blockquote className="mt-4 border-l-4 border-red-200 pl-4 italic text-red-700 text-left">
            "{pet.bio}"
          </blockquote>
        )}
      </CardContent>
    </Card>
  );
}