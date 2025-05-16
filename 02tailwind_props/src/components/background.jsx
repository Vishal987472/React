import {useState} from "react";
function Background() {

  const [bgColor, change] = useState("grey");
  

  return (
    <div  style={{backgroundColor: bgColor}} className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-2">
        <button onClick={() => {change("red");}} className="p-2  bg-red-500 m-2 w-[150px] text-white text-xl font-bold rounded-xl">Red</button>
        <button onClick={() => {change("blue");}} className="p-2  bg-blue-800 m-2 w-[150px] text-xl text-white font-bold rounded-xl">Blue</button>
        <button onClick={() => {change("green");}} className="p-2  bg-green-500 m-2 w-[150px] text-xl text-white font-bold rounded-xl">Green</button>
        <button onClick={() => {change("yellow");}} className="p-2  bg-yellow-500 m-2 w-[150px] text-xl text-white font-bold rounded-xl">Yellow</button>
        <button onClick={() => {change("purple");}} className="p-2  bg-purple-700 m-2 w-[150px] text-xl text-white font-bold rounded-xl">Purple</button>
        <button onClick={() => {change("pink");}} className="p-2  bg-pink-400 m-2 w-[150px] text-xl text-white font-bold rounded-xl">Pink</button>
        <button onClick={() => {change("black");}} className="p-2  bg-black m-2 w-[150px] text-white text-xl font-bold rounded-xl">Black</button>
        <button onClick={() => {change("orange");}} className="p-2  bg-orange-400 m-2 w-[150px] text-xl text-white font-bold rounded-xl">Orange</button>
      </div>
    </div>
  );
}

export default Background;