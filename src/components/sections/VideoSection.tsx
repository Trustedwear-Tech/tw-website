"use client";

import { VideoPlayer } from "@/components/VideoPlayer";
import { cn } from "@/lib/utils";

interface VideoSectionProps {
  id?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  videoId?: string;
  videoSrc?: string;
  thumbnailHint?: string;
  className?: string;
  showControls?: boolean;
}

export function VideoSection({ id = "video", title, description, videoId, videoSrc, thumbnailHint = "video thumbnail", className, showControls = false }: VideoSectionProps) {
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : undefined;

  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <VideoPlayer
            videoId={videoId}
            videoSrc={videoSrc}
            thumbnailSrc={thumbnailUrl}
            thumbnailHint={thumbnailHint}
            className="aspect-video"
            imageClassName="object-cover"
            sizes="(max-width: 1024px) 90vw, 896px"
            showControls={showControls}
          />
        </div>
      </div>
    </section>
  );
}
