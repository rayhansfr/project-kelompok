import React from "react";

const Recipe = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=9CtWyXF14cw';

  const bahan = [
    {judul : 'Beras Ketan', desc: '1 Cangkir', gambar: 'https://asset.kompas.com/crops/cQCsZwp2Tsm_MZ8qikinHy3Lb5I=/0x0:1000x667/750x500/data/photo/2021/06/14/60c6e68cb7b30.jpg'},
    {judul : 'Garam', desc: '1/2 sendok teh.', gambar: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1594170026/attached_image/jangan-selalu-dimusuhi-manfaat-garam-juga-banyak-0-alodokter.jpg'},
    {judul : 'Bubuk Kunyit', desc: '1/2 sendok teh.', gambar:'https://cdn.idntimes.com/content-images/post/20201012/lifespa-image-turmeric-root-and-powder-wood-table-710x473-1d6ad2051a99c6d54c8016ffd65cef8b_600x400.jpg'},
    {judul : 'Lada Hitam', desc: '1/4 sendok teh.', gambar: 'https://www.astronauts.id/blog/wp-content/uploads/2022/11/Tidak-Banyak-yang-Tahu-Ini-Manfaat-Lada-Hitam-Untuk-Kesehatan-Tubuh.jpg'},
    {judul : 'Telur', desc: '1 butir telur per 1 sajian kerak telor.', gambar: 'https://asset.kompas.com/crops/BDpFrv8AEfX_MtAZFndptghIUc8=/0x0:1000x667/750x500/data/photo/2020/06/11/5ee1f1dea0776.jpg'},
    {judul : 'Minyak Goreng', desc: 'Tuangkan secukupnya.', gambar: 'https://asset.kompas.com/crops/roKSi7OqluGqE_N1-n1W0WmHvEQ=/95x8:3294x2141/750x500/data/photo/2021/11/20/6198fdf62f1a7.jpg'},
  ]

  return (
    <div className="grid grid-cols-1 grid-rows-3 ">
      <div className="grid h-screen w-full text-center content-center">
          <h1 className="text-4xl font-bold ">Video Tutorial</h1>
          <div className="mx-auto lg:w-full" style={{ maxWidth: '560px' }}>
            <iframe
              title="YouTube video player"
              width="100%"
              height="315"
              src={videoUrl.replace("watch?v=", "embed/")}
              allowFullScreen
            />
          </div>
      </div>
      <div className="grid h-screen w-full text-center content-center">
        <h1 className="text-4xl font-bold ">Bahan-Bahan</h1>
        <div className="grid grid-cols-3 justify-items-center">
        {bahan.map(({judul, desc, gambar}, idx ) => (
          <div className="grid justify-between mt-8 ml-5 mr-5 w-64" key={idx}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={gambar} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{judul}</div>
                <p className="text-gray-700 text-base">
                {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="grid h-screen w-full text-center content-center">
        <h1 className="text-4xl font-bold ">Petunjuk Pembuatan</h1>
      </div>
    </div>
  );
};

export default Recipe;
