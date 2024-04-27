"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("black");
  return (
    <div className="text-center text-white h-screen w-full" style={{backgroundColor:color}}>
      <div className="pt-6 font-mono text-3xl">
        BG color changing app with Next JS
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-28 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl">
          
          <button 
          onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1 rounded-full text-red-500 shadow-2xl bg-slate-300">
            Red
          </button>

          <button 
          onClick={()=>{setColor("green")}}
          className="outline-none px-4 py-1 rounded-full text-green-500 shadow-2xl bg-slate-300">
            Green
          </button>

          <button 
          onClick={()=>{setColor("blue")}}
          className="outline-none px-4 py-1 rounded-full text-blue-500 shadow-2xl bg-slate-300">
            Blue
          </button>

          <button 
          onClick={()=>{setColor("purple")}}
          className="outline-none px-4 py-1 rounded-full text-purple-500 shadow-2xl bg-slate-300">
            Purple
          </button>

          <button 
          onClick={()=>{setColor("pink")}}
          className="outline-none px-4 py-1 rounded-full text-pink-500 shadow-2xl bg-slate-300">
            Pink
          </button>

          <button 
          onClick={()=>{setColor("crimson")}}
          className="outline-none px-4 py-1 rounded-full text-crimson-600 shadow-2xl bg-slate-300">
            Crimson
          </button>

          <button 
          onClick={()=>{setColor("gray")}}
          className="outline-none px-4 py-1 rounded-full text-gray-500 shadow-2xl bg-slate-300">
            Gray
          </button>

          <button 
          onClick={()=>{setColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl bg-slate-300">
            White
          </button>

          <div  className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-2xl bg-white px-3 py-2 rounded-3xl text-black">
            Muhammad Tahir Iqbal</div>
          </div>

        </div>
      </div>
    </div>
  );
}
