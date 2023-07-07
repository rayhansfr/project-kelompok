import React from "react";
import Map from "../aset/Map.png";

const Place = () => {
  const placeDescription = 'Google Maps diatas merujuk ke salah satu tempat jualan kerak telor betawi. Dengan rating 4.7 di Google dengan 50 review';

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
