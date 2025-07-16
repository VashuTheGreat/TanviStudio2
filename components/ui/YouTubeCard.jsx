// components/YouTubeCard.jsx
import React from "react";
import { Play, ExternalLink } from "lucide-react";

const getVideoId = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

const YouTubeCard = ({ url, title }) => {
  const videoId = getVideoId(url);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;
  const isEmbeddable = embedUrl && !url.includes("@");

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 group hover:shadow-xl">
      {isEmbeddable ? (
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-t-xl"
          ></iframe>
        </div>
      ) : (
        <div className="text-center p-6">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="mx-auto rounded-lg mb-4 shadow"
            />
          ) : (
            <Play className="w-16 h-16 text-red-500 mx-auto mb-4" />
          )}
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            Watch on YouTube <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
};

export default YouTubeCard;
