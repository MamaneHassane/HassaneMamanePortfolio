import React from "react";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  codeUrl?: string;
  videoUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  startDate,
  endDate,
  technologies,
  codeUrl,
  videoUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.01] transition-all duration-300 border border-gray-200">
      
      {/* Image */}
      <div className="md:w-1/3 w-full h-48 md:h-auto overflow-hidden">
        <img
          src={image}
          alt={`Aperçu du projet ${title}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenu */}
      <div className="md:w-2/3 w-full p-4 flex flex-col justify-between">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          {/* Dates */}
          <p className="text-xs text-gray-500 mb-1 italic">
            {startDate} – {endDate ?? "En cours"}
          </p>
          {/* Description */}
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border border-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Boutons (conditionnels) */}
        {(codeUrl || videoUrl) && (
          <div className="flex flex-row gap-3 mt-3">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm text-sm font-medium transition"
              >
                Voir code
              </a>
            )}
            {videoUrl && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-sm text-sm font-medium transition"
              >
                Voir vidéo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { ProjectCard} ;
