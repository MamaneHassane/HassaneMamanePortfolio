import React from "react";
import { ProjectCard } from "../components/ProjectCard/ProjectCard.tsx";
import { Link } from "react-router-dom";
// @ts-ignore
import angulardotnet from "../images/projets/angularanddotnetcore.jpg";
// @ts-ignore
import hot_or_cold from "../images/projets/hot_or_cold.jpeg";
// @ts-ignore
import video_game_shop from "../images/projets/video_game_shop.jpeg";
// @ts-ignore
import reseau_neurones from "../images/projets/reseau_neurones.png";
// @ts-ignore
import chatbot from "../images/projets/chatbot.png";
// @ts-ignore
import hiring_spot from "../images/projets/hiring_spot.png";
// @ts-ignore
import hugging_face from "../images/projets/huggingface.jpg";
// @ts-ignore
import portfolio from "../images/projets/portfolio.png";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-12 py-8">

      <div className="bg-pink-100 border border-pink-300 text-pink-800 px-6 py-4 rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-bold mb-2">📁 Projets réalisés</h2>
        <p className="text-sm md:text-base">
          Vous êtes sur la page des projets ! N'hésitez pas à consulter les codes ou les démonstrations vidéos.
        </p>
        <div className="mt-4">
          <a
            href="https://www.hassane-mamane-portfolio.vercel.app"
            target="_blank"
            // rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md shadow transition"
          >
            Voir la page du portfolio
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <ProjectCard
          image={portfolio}
          title="HassaneMamanePortfolio"
          description="Création de mon portfolio personnel en ReactJS et TailwindCSS."
          startDate="02/2024"
          endDate="02/2024"
          technologies={["ReactJS", "TailwindCSS"]}
          codeUrl="https://github.com/MamaneHassane/HassaneMamanePortfolio.git"
        />

        <ProjectCard
          image={chatbot}
          title="Chatbot : Phil le cinéphile"
          description="Chatbot vocal et textuel connecté à une base de données cinéma, fonctionne aussi sur un robot Pepper."
          startDate="02/2025"
          endDate="02/2025"
          technologies={["Python", "Flask", "GPT-3.5-Turbo", "VueJS", "Chrorégraphe", "Pepper"]}
          videoUrl="https://drive.google.com/file/d/1MdGvbtwyKGTcVuj0i8kYgJjIcUBhJzfb/view?usp=sharing"
        />

        <ProjectCard
          image={reseau_neurones}
          title="Structure secondaire des protéines"
          description="Modèle de prédiction de structure secondaire des protéines à partir de séquences, avec 63% de réussite."
          startDate="04/2025"
          endDate="04/2025"
          technologies={["Python", "PyTorch", "LSTM", "RNN"]}
          codeUrl="https://github.com/MamaneHassane/protein_structure_prediction.git"
        />

        <ProjectCard
          image={reseau_neurones}
          title="Notation d'hôtels par critique"
          description="Modèle de notation d’hôtels basé sur des critiques textuelles, avec 78% de précision."
          startDate="04/2024"
          endDate="04/2024"
          technologies={["Python", "PyTorch", "Bi-LSTM"]}
          codeUrl="https://github.com/MamaneHassane/hotel_notation_model.git"
        />

        <ProjectCard
          image={hugging_face}
          title="Analyse de biais des modèles"
          description="Analyse des biais sur GPT-3.5-Turbo et SmolLM2-1.7B-Instruct avec des paires minimales."
          startDate="03/2025"
          endDate="04/2025"
          technologies={["Python", "HuggingFace Hub", "LLM", "Paires minimales"]}
          codeUrl="https://github.com/MamaneHassane/bias_analysis.git"
        />

        <ProjectCard
          image={angulardotnet}
          title="Gestion des installations électriques"
          description="Application web 3 tiers pour gérer compteurs, relèves, utilisateurs et factures."
          startDate="03/2024"
          endDate="06/2024"
          technologies={[".NET 8", "Angular 17", "EF Core 8", "SQLServer"]}
          codeUrl="https://github.com/Gestion-Compteurs"
          videoUrl="https://drive.google.com/file/d/1JuqmfG5R4RpAC2hr2BdufBNW0vCzo0UN/view?usp=sharing"
        />

        <ProjectCard
          image={hot_or_cold}
          title="Web API : HotOrCold"
          description="API web pour commander des boissons chaudes ou froides."
          startDate="02/2024"
          endDate="03/2024"
          technologies={[".NET 8", "EF Core 8", "SQLServer"]}
          codeUrl="https://github.com/MamaneHassane/HotOrCold.git"
        />

        <ProjectCard
          image={hiring_spot}
          title="HiringSpot"
          description="Plateforme de recrutement et de tests techniques en ligne."
          startDate="12/2023"
          endDate="02/2024"
          technologies={["Spring boot 3", "ReactJS", "PostgreSQL"]}
          videoUrl="https://drive.google.com/file/d/1B8YvVLUx9177ZBGF7l8eBZldiIF3pLjD/view?usp=sharing"
        />

        <ProjectCard
          image={video_game_shop}
          title="ERP pour une chaîne de magasins Jeux Vidéos"
          description="Backend ERP pour magasins de jeux vidéos (Consoles, Clients, Prêts…)."
          startDate="12/2023"
          endDate="04/2024"
          technologies={["Spring boot 3", "Spring Security 6", "Angular 17", "PostgreSQL"]}
          codeUrl="https://github.com/MamaneHassane/VideoGamesShop.git"
        />
      </div>
    </div>
  );
};

export { Projects };
