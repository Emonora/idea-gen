'use client';

import { useState } from "react";
import { Idea } from "../utils/list";

export default function HomePage() {

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [randomItem, setRandomItem] = useState<string | undefined>(undefined);

  const handleClick = () => {
    if (selectedCategory === null) {
      alert("Please select a category!");
      return;
    }


    setRandomItem(Idea(selectedCategory));
  };

  return (
    <main className="items-center justify-center flex flex-col bg-black text-white h-screen w-screen">
      <div className="text-lg mb-4">Coding Project Idea Generator</div>
      <div className="mb-4">Select a category:</div>

      <label className="mr-4">
        <input
          type="radio"
          name="category"
          value="1"
          checked={selectedCategory === 0}
          onChange={() => setSelectedCategory(0)}
        />
        Game
      </label>

      <label className="mr-4">
        <input
          type="radio"
          name="category"
          value="2"
          checked={selectedCategory === 1}
          onChange={() => setSelectedCategory(1)}
        />
        App
      </label>

      <button
        onClick={handleClick}
        className="mt-8 rounded-full bg-orange-500 active:bg-orange-950 px-8 py-2"
      >
        Generate
      </button>

      {randomItem && (
        <div className="mt-8 text-xl">
          <div className="text-center">Your Random Idea:</div>
          <div className="text-center mt-4 p-4 border border-white rounded">{randomItem}</div>
        </div>
      )}
    </main>
  );
}

