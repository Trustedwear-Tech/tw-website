"use client";

import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // A placeholder video ID from YouTube. Replace with your actual video ID.
  const videoId = "P46oM4eA_AE"; 
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <section id="video" className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">See Trusted Wearables in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our short video to discover how Trusted Wearables can bring you peace of mind.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative aspect-video w-full rounded-lg bg-slate-800 shadow-2xl overflow-hidden">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <div onClick={() => setIsPlaying(true)} className="cursor-pointer group h-full w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`}}
                  data-ai-hint="smartwatch lifestyle"
                ></div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white/80 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
