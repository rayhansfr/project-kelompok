import React, { useEffect } from "react";
import './styles/Home.scss';
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
    <div className="grid grid-cols-1 grid-rows-3">
      <div className="w-full h-screen img-bg grid xl:grid-cols-2 md:grid-cols-2 content-center">
          <div className="text-white mt-36 ml-20 sm:mr-20">
            <h1 className="text-6xl font-bold">Kerak Telor</h1>
            <h1 className="text-2xl font-semibold">Makanan Tradisional khas Jakarta</h1>
            <p className="mt-10 font-light">Kerak telor adalah jajanan tradisional Indonesia yang terbuat dari beras ketan, telur, dan rempah-rempah.Makanan ini merupakan jajanan kaki lima yang populer di Jawa, dan sering disajikan sebagai camilan atau makanan pembuka.</p>
          <div className="mt-10">
            <a href="" className="bg-[#004B23] text-white rounded-3xl px-8 py-3 font-semibold inline-block mr-4 hover:bg-transparent hover:border hover:scale-105">Ayo, Kita Explore!</a>
          </div>
          </div>
          <div className="my-24">
              <img className="scale-100 hover:scale-110 hover:rotate-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" src={require('./assets/img/img-kt_1.png')}/>
          </div>
      </div>
      <div className="grid img-bg2 bg-center row-start-2 content-center">
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
          <div className="text-white w-1/2 text-center">
            <h1 className="text-white text-4xl font-bold">SEJARAH</h1>
            <p className="mt-12 sm:text-sm"> Sejarah kerak telor tidak banyak diketahui, namun diyakini berasal dari istana-istana kerajaan Jawa. Konon, kerak telor pertama kali dibuat sebagai cara untuk menghabiskan sisa nasi. Hidangan ini kemudian menjadi populer di kalangan masyarakat umum, dan sekarang menjadi pemandangan umum di warung-warung dan pasar-pasar di seluruh Jawa. "</p>
          </div>
        </div>
      </div>
      <div className="grid w-full h-full img-bg row-start-3 content-center">
        <h1 className="mt-20 text-white text-4xl text-center font-bold">INFORMASI TAMBAHAN</h1>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-8">
          {info.map((comp) => (
            <div className="text-center text-white m-20 w-120 h-80 rounded-ss-3xl rounded-ee-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" style={{backgroundColor:light}} key = {comp.id}>
              <h1 className="m-10 text-2xl font-semibold">
                {comp.judul}
              </h1>
              <p className="m-5 text-md text-start">
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