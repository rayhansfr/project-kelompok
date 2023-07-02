import React from "react";

const Recipe = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 ">
      <div className="grid h-screen w-full text-center content-center">
          <h1 className="text-4xl font-bold ">Video Tutorial</h1>
          <h4 className="text-sm text-neutral-500">Resep</h4>
      </div>
      <div className="grid h-screen w-full text-center content-center">
        <h1 className="text-4xl font-bold ">Bahan-Bahan</h1>
        <h4 className="text-sm text-neutral-500">Resep</h4>
      </div>
      <div className="grid h-screen w-full text-center content-center">
        <h1 className="text-4xl font-bold ">Petunjuk Pembuatan</h1>
        <h4 className="text-sm text-neutral-500">Resep</h4>
      </div>
    </div>
  );
};

export default Recipe;