import React from "react";
import {Color} from "../values/Colors";
import './styles/Community.scss';
import Rehan from './assets/img/rehan.png';
import Made from './assets/img/made.png';


const Community = () => {

  const primary = Color.primary;
  const dark = Color.dark;
  const light = Color.light;

  const team = [
    {fnama : 'Rayhan Safar', lnama: ' Putra Dwiliano', nim : '2207411027', ig : 'https://www.instagram.com/rayhansfr', linkedin : 'https://www.linkedin.com/in/rayhan-safar-putra-dwiliano-62497324b/', gambar : Rehan},
    {fnama : 'Made', lnama: ' Dharmagiri', nim : '2207411009', ig : 'https://www.instagram.com/madegiri04_', linkedin : 'https://www.linkedin.com/in/made-dharmagiri-15951a1bb/', gambar : Made}
  ]

  return (
    <div className="grid grid-cols-1 grid-rows-2">
      <div className="bg-com grid lg:grid-cols-2 w-full text-center content-center p-20 mb-20 -mt-48 lg:-mt-0">
        <div className="grid grid-col-1 w-auto p-10 content-center bg-slate-100 bg-opacity-50 rounded-2xl shadow-xl my-20">
          <h1 className="text-3xl lg:text-8xl font-bold uppercase">Gall<span style={{color: primary}}>ery</span></h1>
          <p className="mt-10 lg:text-2xl text-md font-semibold tracking-widest uppercase">Kerak Telor</p>
          <p className="my-10 lg:text-xl text-sm italic">Petualangan rasa yang membawa kita merasakan sejarah lewat cita rasa</p>
        </div>
        <div className="lg:grid grid lg:grid-cols-2 grid-rows-4 grid-flow-col h-auto w-full lg:px-20 mx-auto place-items-center gap-10">
          <div className="grid">
            <img className="h-full rounded shadow-xl" src="https://cdn.discordapp.com/attachments/1102489496668348487/1127249884689469440/istockphoto-1295242665-612x612.jpg" alt="" srcset="" />
          </div>
          <div className="grid">
            <img className="h-full rounded" src="https://cdn.discordapp.com/attachments/1102489496668348487/1127249885331193876/istockphoto-1515981728-612x612.jpg" alt="" srcset="" />
          </div>
          <div className="grid row-span-2">
            <img className="scale-125 rounded grayscale" src="https://cdn.discordapp.com/attachments/1102489496668348487/1127249885910007868/istockphoto-1295242581-612x612.jpg" alt="" srcset="" />
          </div>
          <div className="grid row-span-2">
            <img className="scale-125 rounded" src="https://cdn.discordapp.com/attachments/1102489496668348487/1127249884488138833/istockphoto-1295242621-612x612.jpg" alt="" srcset="" />
          </div>
          <div className="grid">
            <img className="rounded grayscale" src="https://cdn.discordapp.com/attachments/1102489496668348487/1127249884920172707/istockphoto-1295242680-612x612.jpg" alt="" srcset="" />
          </div>
          <div className="grid">
            <img className="rounded grayscale" src="https://cdn.discordapp.com/attachments/1102489496668348487/1127249885637382316/istockphoto-1295242544-612x612.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>


      <div className="grid lg:grid-cols-2 h-auto w-full text-center content-center px-20 mt-auto mb-10">
        <div className="w-full h-auto">
          <h1 className="lg:text-start text-3xl lg:text-6xl font-bold mb-10">GET IN <span className="lg:text-6xl" style={{color: primary}}>TOUCH</span></h1>
          <form className="w-full max-w-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your First Name"/>
              </div>
              <div className="col-span-1">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Your Last Name"/>
              </div>
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Your Email"/>
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                Message
              </label>
              <textarea className="appearance-none block w-full h-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="Your Message"></textarea>
            </div>
            <button
              className="bg-[#004B23] text-white rounded-xl px-8 py-3 font-semibold w-8 hover:bg-transparent hover:border-4 hover:scale-105 hover:text-[#004B23]"
              type="submit"
              style={{minWidth: "8rem"}}
            >
              Submit
            </button>
          </form>
        </div>


        <div className="h-auto w-auto grid-rows-2 grid-cols-2 grid-flow-row gap-6 flex flex-col mt-10 lg:mt-0">
          <div className="col-span-2">
            <h1 className="lg:text-start text-3xl lg:text-6xl font-bold lg:mb-10">OUR <span className="lg:text-6xl" style={{color: primary}}>TEAM</span></h1>
          </div>
          {team.map(({fnama, lnama, nim, ig, linkedin, gambar}, idx) => (
            <div className="bg-com2 grid text-center bg-slate-200 place-items-center rounded-xl p-5 shadow-xl" key={idx}>
              <img className="w-56 rounded-full" style={{background: primary}} src={gambar} alt="" /> 
            <div className="py-5">
              <h1 className="font-bold lg:text-2xl uppercase mb-2">{fnama}<span style={{color: primary}}>{lnama}</span></h1>
              <p className="text-xs font-bold">{nim}</p>
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-4">
              <a href={ig} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                <path style={{fill: '#f03d3d'}} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                <path style={{fill: '#0a66c2'}} d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;