import React from "react";

type GameCardProps = {
  image?: string;
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  youtubeUrl?: string;
  steamUrl?: string;
};

const GameCard: React.FC<GameCardProps> = ({
  image,
  title,
  description,
  startDate,
  endDate,
  youtubeUrl,
  steamUrl,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden transition hover:scale-[1.01] border border-gray-200 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)] m-2">
      
      {image && (
        <div className="w-full h-48 bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={`Image du jeu ${title ?? ""}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-4 flex flex-col justify-between h-full">
        {title && <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>}
        {description && <p className="text-sm text-gray-600 mb-2">{description}</p>}
        {(startDate || endDate) && (
          <p className="text-xs text-gray-500 italic mb-2">
            {startDate} {startDate && endDate ? "–" : ""} {endDate}
          </p>
        )}

        {/* Liens */}
        {(youtubeUrl || steamUrl) && (
          <div className="flex flex-wrap gap-2 mt-3">
            {youtubeUrl && (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm font-medium transition"
              >
                YouTube
              </a>
            )}
            {steamUrl && (
              <a
                href={steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-medium transition"
              >
                Steam
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export {GameCard};
