import React from "react";
import Map from "../aset/Map.png";

const Place = () => {
  const placeDescription =
    'Google Maps diatas merujuk ke salah satu tempat jualan kerak telor betawi. Dengan rating 4.7 di Google dengan 50 review';

  return (
    <div className="grid grid-cols-1 grid-rows-2">
      <div className="grid h-screen w-full text-center content-center">
        <h1 className="text-4xl font-bold">Where To Find?</h1>
        <h4 className="text-sm text-neutral-500">Lokasi</h4>
      </div>
      <div className="grid h-screen w-full text-center content-center">
        <div className="mapouter">
          <div className="gmap_canvas">
          <iframe
            className="gmap_iframe ml-5 mr-5"
            width="100%"
            style={{ border: "none", overflow: "hidden", height: "400px" }}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kota Tua&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          </div>
        </div>
      </div>
      <style>
        {`.mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 400px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 400px;
        }
        .gmap_iframe {
          height: 400px !important;
        }`}
      </style>
    </div>
  );
};

export default Place;
