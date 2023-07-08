import React, { useEffect } from "react";
import './styles/Home.scss';
import { Link } from "react-router-dom";
import { Color } from "../values/Colors";

const Home = () => {
  const primary = Color.primary;
  const dark = Color.dark;
  const light = Color.light;
  // useEffect (() => {
  //   const audio = new Audio('./assets/sound/y2mate.com - LEAK IZONE  Buenos Aires Official Instrumental  DL.mp3');
  //   audio.loop = true;
  //   audio.play();

  //   // return () => {
  //   //   audio.pause();
  //   // }
  // });

  const info = [
    { id: 1, judul: 'Informasi nutrisi', isi: 'Kerak telor adalah camilan yang relatif tinggi kalori, tetapi juga merupakan sumber karbohidrat, protein, dan serat yang baik. Satu porsi kerak telor (sekitar 100 gram) menyediakan sekitar 200 kalori, 10 gram protein, 20 gram karbohidrat, dan 2 gram serat.'},
    { id: 2, judul: 'Manfaat Kesehatan', isi: 'Kandungan serat yang tinggi pada kerak telor dapat membantu melancarkan pencernaan dan melancarkan buang air besar. Protein dalam kerak telor dapat membantu membangun dan memperbaiki jaringan otot. Kerak telor juga mengandung zat besi yang penting untuk kesehatan darah.'} 
  ];

  return (
    <div className="img-bg grid grid-cols-1 grid-rows-3">
      <div class="grid max-w-screen-xl h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
                Kerak Telor
              </h1>
              <h1 className="text-white text-2xl font-semibold mb-6">
                Makanan Tradisional khas Jakarta
              </h1>
              <p class="max-w-2xl mb-6 font-light text-slate-200 lg:mb-8 md:text-lg lg:text-xl">Kerak telor adalah jajanan tradisional Indonesia yang terbuat dari beras ketan, telur, dan rempah-rempah.Makanan ini merupakan jajanan kaki lima yang populer di Jawa, dan sering disajikan sebagai camilan atau makanan pembuka.</p>
              <div className="mt-10">
                <Link to="/Resep" className="bg-[#004B23] text-white rounded-3xl px-8 py-3 font-semibold inline-block mr-4 hover:bg-transparent hover:border hover:scale-105"> Ayo, Kita Explore!</Link>
              </div>
          </div>
          <div class="hidden lg:col-span-5 lg:block lg:mt-32">
            <img className="scale-105 hover:scale-110 hover:rotate-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" src={require('./assets/img/img-kt_1.png')}/>
          </div>                
      </div>
      <div className="img-bg2 grid w-full bg-center bg-cover row-start-2">
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">SEJARAH</h2>
                <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Sejarah kerak telor tidak banyak diketahui, namun diyakini berasal dari istana-istana kerajaan Jawa. Konon, kerak telor pertama kali dibuat sebagai cara untuk menghabiskan sisa nasi. Hidangan ini kemudian menjadi populer di kalangan masyarakat umum, dan sekarang menjadi pemandangan umum di warung-warung dan pasar-pasar di seluruh Jawa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full h-full img-bg row-start-3 content-center">
        <h1 className="mt-20 text-white text-4xl text-center font-bold">INFORMASI TAMBAHAN</h1>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-8">
          {info.map((comp) => (
            <div className="text-start p-10 text-white m-20 w-120 h-auto rounded-ss-3xl rounded-ee-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:scale-110" style={{backgroundColor:light}} key = {comp.id}>
              <h1 className="text-3xl font-semibold">
                {comp.judul}
              </h1>
              <p className="mt-5 text-md text-start">
                {comp.isi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;