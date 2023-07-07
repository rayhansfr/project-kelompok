import React from "react";
import Map from "../aset/Map.png";

const Place = () => {
  const placeDescription = 'Google Maps diatas merujuk ke salah satu tempat jualan kerak telor betawi. Dengan rating 4.7 di Google dengan 50 review';

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white-800 mb-4">Where to Find Kerak Telor</h1>
      </div>
      <div className="flex justify-center">
        <a href="https://www.google.com/maps/place/Jl.+Merdeka+No.184,+Abadijaya,+Kec.+Sukmajaya,+Kota+Depok,+Jawa+Barat+16417/@-6.3966503,106.8449496,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69eb96a11d5223:0xe296a8431414e757!8m2!3d-6.3966556!4d106.8475245!16s%2Fg%2F11c5nhc09g?entry=ttu" target="_blank">
          <img src={Map} alt="Map" style={{ width: '600px', height: 'auto' }}/>
        </a>
      </div>
      <div className="flex justify-center items-center mb-4">
        <p className="text-xl">{placeDescription}</p>
      </div>
    </div>
  );
};

export default Place;
