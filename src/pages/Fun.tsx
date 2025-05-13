import React from "react";
import {GameCard} from "../components/GameCard/GameCard.tsx";
// @ts-ignore
import red_dead_2 from "../images/fun/red_dead_2.jpeg";
// @ts-ignore
import lies_of_p from "../images/fun/lies_of_p.jpeg";
// @ts-ignore
import witcher_3 from "../images/fun/witcher_3.jpg";
const Fun = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-12 py-8">    
      <div className="bg-pink-100 border border-pink-300 text-pink-800 px-6 py-4 rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-bold mb-2">Jeux vidéos</h2>
        <p className="text-sm md:text-base">
          Vous êtes sur la page fun ! J'ai jugé amusant de vous montrer mes jeux vidéos préférés.
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

    <div className="p-4 flex flex-wrap justify-center">
      <GameCard
        image={lies_of_p}
        title="Lies of P"
        description="Un Souls-like sombre et exigeant, inspiré de Pinocchio, le jeu le mieux optimisé que j'ai vu."
        startDate="03/2024"
        endDate="03/2024"
        youtubeUrl="https://youtu.be/kXZoKdr-xeo?si=VvtIPSCbg1BtQCii"
        steamUrl="https://store.steampowered.com/app/1627720/Lies_of_P/"
      />

      <GameCard
        image={witcher_3}
        title="THe witcher 3 : Wild Hunt"
        startDate="01/2018"
        endDate="05/2018"
        description="L'un des meilleurs RPG, relaxant et captivant"
        youtubeUrl="https://youtu.be/c0i88t0Kacs?si=fSDCbJYyJzxB4L69"
        steamUrl="https://store.steampowered.com/agecheck/app/292030/?l=french"
      />

      <GameCard
        image={red_dead_2}
        title="Read Dead Redemption 2"
        startDate="01/2025"
        endDate="04/2025"
        description="Le meilleur jeu au monde, narration, graphismes ou gameplay, GTA 6 fera t-il mieux ?"
        youtubeUrl="https://youtu.be/F63h3v9QV7w?si=h4kJGBJ8_il1nCS0"
        steamUrl="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
      />
    </div>
  </div>
  );
};

export {Fun};
