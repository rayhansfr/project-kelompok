import React from "react";

const Place = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 ">
      <div className="grid h-screen w-full text-center content-center">
        <h1 className="text-4xl font-bold ">Where To Find?</h1>
        <h4 className="text-sm text-neutral-500">Lokasi</h4>
      </div>
      <div className="grid h-screen w-full text-center content-center">
        <h1 className="text-4xl font-bold ">Google Maps</h1>
        <h4 className="text-sm text-neutral-500">Tempat Populer</h4>
      </div>
    </div>
  );
};

export default Place;