"use client";

import { useState } from 'react';
import { PlayCircle, Volume2, VolumeX } from 'lucide-react';
import { cn } from "@/lib/utils";
import Image from 'next/image';

interface VideoPlayerProps {
  videoId?: string;
  videoSrc?: string;
  thumbnailSrc?: string;
  thumbnailHint?: string;
  className?: string; // for the outer div
  imageClassName?: string; // for the next/image element
  sizes?: string;
  showControls?: boolean;
}

export function VideoPlayer({ videoId, videoSrc, thumbnailSrc, thumbnailHint, className, imageClassName, sizes, showControls = false }: VideoPlayerProps) {
  const [isYouTubePlaying, setIsYouTubePlaying] = useState(false);
  const [isBackgroundMuted, setIsBackgroundMuted] = useState(true);

  // If it's a local/direct video source.
  if (videoSrc) {
    return (
      <div className={cn("relative w-full rounded-lg bg-muted shadow-2xl overflow-hidden", className)}>
        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay={!showControls}
          loop={!showControls}
          muted={!showControls}
          playsInline
          controls={showControls}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
  // If it's a YouTube video
  if (videoId) {
    // Autoplaying background video
    if (!showControls) {
      const backgroundVideoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isBackgroundMuted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1`;
      
      // A unique key is needed to force the iframe to re-render when the mute state changes.
      // This will cause the video to restart, which is a necessary trade-off without the YouTube IFrame Player API.
      const iframeKey = `yt-player-${videoId}-${isBackgroundMuted}`;

      return (
        <div className={cn("relative w-full rounded-lg bg-muted shadow-2xl overflow-hidden group", className)}>
           <iframe
             key={iframeKey}
             className="absolute inset-0 w-full h-full pointer-events-none"
             src={backgroundVideoUrl}
             title="YouTube video player"
             frameBorder="0"
             allow="autoplay; encrypted-media;"
           ></iframe>
           <div
             className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
             onClick={() => setIsBackgroundMuted(!isBackgroundMuted)}
           >
            {isBackgroundMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
           </div>
         </div>
      );
    }

    // Click-to-play interactive video
    const interactiveVideoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    return (
      <div className={cn("relative w-full rounded-lg bg-muted shadow-2xl overflow-hidden", className)}>
        {isYouTubePlaying ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={interactiveVideoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div onClick={() => setIsYouTubePlaying(true)} className="cursor-pointer group h-full w-full">
            <Image
              src={thumbnailSrc!}
              alt={thumbnailHint || "Video thumbnail"}
              fill
              className={cn("transition-transform duration-500 group-hover:scale-105", imageClassName)}
              data-ai-hint={thumbnailHint}
              sizes={sizes}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-white/80 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
