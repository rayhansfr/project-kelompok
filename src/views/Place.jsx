import React from "react";
import './styles/Place.scss';

const Place = () => {
  const placeDescription =
    'Google Maps diatas merujuk ke salah satu tempat jualan kerak telor betawi. Dengan rating 4.7 di Google dengan 50 review';

  return (
    <div className="grid grid-cols-1">
      <div className="bg-img grid w-full bg-center bg-cover">
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">Kerak Telor</span>
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Kota Tua</h2>
                <p class="max-w-2xl mb-6 font-light text-slate-200 lg:mb-8 md:text-lg lg:text-xl">
                  Kerak Telor dapat ditemui di sekitar Kota Tua, Jakarta. Banyak pedagang berjualan di pinggir jalan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full text-center content-end">
        <div className="mapouter">
          <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            style={{ border: "none", overflow: "hidden", height: "400px" }}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kota Tua&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-img2 grid w-full bg-center bg-cover">
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">Kerak Telor</span>
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Pekan Raya Jakarta</h2>
                <p class="max-w-2xl mb-6 font-light text-slate-200 lg:mb-8 md:text-lg lg:text-xl">
                  Pada Festival Pekan Raya Jakarta, Kerak Telor meupakan salah satu menu palin ikonik dan wajib untuk dicoba. Namun Festival ini adalah festival tahunan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full text-center content-end">
        <div className="mapouter">
          <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            style={{ border: "none", overflow: "hidden", height: "400px" }}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Gambir expo&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
