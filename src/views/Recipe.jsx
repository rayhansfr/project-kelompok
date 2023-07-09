import React from "react";
import './styles/Resep.scss';
import {Color} from "../values/Colors";

const Recipe = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=9CtWyXF14cw';
  const primary = Color.primary;
  const dark = Color.dark;
  const light = Color.light;

  const bahan = [
    {judul : 'Beras Ketan', desc: '1 Cangkir', gambar: 'https://asset.kompas.com/crops/cQCsZwp2Tsm_MZ8qikinHy3Lb5I=/0x0:1000x667/750x500/data/photo/2021/06/14/60c6e68cb7b30.jpg'},
    {judul : 'Garam', desc: '1/2 sendok teh', gambar: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1594170026/attached_image/jangan-selalu-dimusuhi-manfaat-garam-juga-banyak-0-alodokter.jpg'},
    {judul : 'Bubuk Kunyit', desc: '1/2 sendok teh', gambar:'https://cdn.idntimes.com/content-images/post/20201012/lifespa-image-turmeric-root-and-powder-wood-table-710x473-1d6ad2051a99c6d54c8016ffd65cef8b_600x400.jpg'},
    {judul : 'Lada Hitam', desc: '1/4 sendok teh', gambar: 'https://www.astronauts.id/blog/wp-content/uploads/2022/11/Tidak-Banyak-yang-Tahu-Ini-Manfaat-Lada-Hitam-Untuk-Kesehatan-Tubuh.jpg'},
    {judul : 'Telur', desc: '1 butir / 1 sajian kerak telor', gambar: 'https://asset.kompas.com/crops/BDpFrv8AEfX_MtAZFndptghIUc8=/0x0:1000x667/750x500/data/photo/2020/06/11/5ee1f1dea0776.jpg'},
    {judul : 'Minyak Goreng', desc: 'Tuangkan secukupnya', gambar: 'https://asset.kompas.com/crops/roKSi7OqluGqE_N1-n1W0WmHvEQ=/95x8:3294x2141/750x500/data/photo/2021/11/20/6198fdf62f1a7.jpg'},
  ]

  return (
    <div className="bg-resep grid grid-cols-1">
      <div className="grid w-full place-content-center py-20 lg:pt-52">
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center">
          <div className="text-white p-10 lg:ml-20 w-9/12 lg:mb-0 mb-10 rounded-ss-3xl rounded-ee-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" style={{backgroundColor: dark}}>
              <h1 className="m-5 text-4xl lg:text-6xl font-semibold">
              VIDEO TUTORIAL
              </h1>
              <p className="m-5 lg:text-lg text-start">
              Saksikan video untuk melihat bagaimana cara pembuatan Kerak Telor
            </p>
          </div>
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
      </div>
      <div className="grid w-full content-center py-20">
        <div className="bg-white lg:text-start text-center py-4 lg:px-32">
          <h1 className="lg:text-6xl text-4xl font-bold">BAHAN <span style={{color: light}}>BAKU</span></h1>
        </div>
        <div className="grid h-auto grid-cols-1 lg:grid-cols-3 justify-items-center rounded-md px-12">
        {bahan.map(({judul, desc, gambar}, idx ) => (
          <div className="grid items-center mt-12 ml-5 mr-5 w-64 text-center" key={idx}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg  hover:scale-105">
              <img className="w-full " src={gambar} />
              <div className="px-6 py-4" style={{backgroundColor: dark}}>
                <div className="font-bold text-xl mb-2 text-white">{judul}</div>
                <p className="text-slate-100 text-base">
                {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="grid w-full content-center py-20">
        <div className="bg-white py-4 lg:px-32 mb-10">
          <h1 className="lg:text-6xl text-4xl text-center font-bold lg:text-end"><span style={{color: light}}>LANGKAH </span>PEMBUATAN</h1>
        </div>
        <div className="grid grid-cols-1 grid-rows-5 px-14">
          <div className="text-white lg:p-10 py-5 lg:mx-20 mb-10 h-auto w-auto rounded-ss-3xl rounded-ee-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" style={{backgroundColor: dark}}>
              <h1 className="mx-10 mb-10 text-4xl font-semibold">
              LANGKAH KE-1
              </h1>
              <p className="mx-10 text-lg">
              Dalam mangkuk besar, campurkan beras, garam, bubuk kunyit, dan lada hitam. Aduk rata
            </p>
          </div>
          <div className="text-white lg:p-10 py-5 lg:mx-20 mb-10 h-auto w-auto rounded-ss-3xl rounded-ee-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" style={{backgroundColor: primary}}>
              <h1 className="mx-10 mb-10 text-4xl font-semibold text-end">
              LANGKAH KE-2
              </h1>
              <p className="mx-10 text-lg text-end">
              Tambahkan telur ke dalam campuran nasi dan aduk hingga tercampur rata
            </p>
          </div>
          <div className="text-white lg:p-10 py-5 lg:mx-20 mb-10 h-auto w-auto rounded-ss-3xl rounded-ee-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" style={{backgroundColor: light}}>
              <h1 className="mx-10 mb-10 text-4xl font-semibold">
              LANGKAH KE-3
              </h1>
              <p className="mx-10 text-lg">
              Panaskan minyak dalam wajan besar dengan api sedang
            </p>
          </div>
          <div className="text-white lg:p-10 py-5 lg:mx-20 mb-10 h-auto w-auto rounded-ss-3xl rounded-ee-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" style={{backgroundColor: primary}}>
              <h1 className="mx-10 mb-10 text-4xl font-semibold text-end">
              LANGKAH KE-4
              </h1>
              <p className="mx-10 text-lg text-end">
              Tambahkan sesendok penuh adonan nasi ke dalam minyak panas dan goreng hingga kedua sisinya berwarna cokelat keemasan
            </p>
          </div>
          <div className="text-white lg:p-10 py-5 lg:mx-20 mb-10 h-auto w-auto rounded-ss-3xl rounded-ee-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" style={{backgroundColor: dark}}>
              <h1 className="mx-10 mb-10 text-4xl font-semibold">
              LANGKAH KE-5
              </h1>
              <p className="mx-10 text-lg">
              Tiriskan kerak telor dan sajikan selagi hangat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
