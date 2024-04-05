import { useState } from "react";
import bdg_logo from "./bdg_logo.png";

function App() {
  const [period, setPeriod] = useState(""); // Initialize state with empty string

  const handleInputChange = (event) => {
    const newValue = event.target.value.slice(0, 3);
    setPeriod(newValue);
  };

  const colors = ["red", "green"]; // Array containing color choices

  const [color, setColor] = useState(() => {
    return colors[Math.floor(Math.random() * colors.length)]; // Choose a random color initially
  });

  const changeColor = (e) => {
    e.preventDefault();
    if (period) {
      // Check if period has a value before changing color
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(newColor);
      // console.log("Color changed to:", newColor); // Add for debugging
    }
  };

  // let  bg = `bg-${color}-700`
  // console.log(bg)

  return (
    <div className="w-100 sm:w-[688px] relative  h-[100vh] px-3 py-1  flex flex-col justify-around">
      <div className=" w-11/12 mx-auto flex flex-col sm:flex-row gap-6 justify-around items-center">
        <div className="w-full mx-auto  p-1">
          <img src={bdg_logo} alt="" className="w-full h-auto" />
        </div>
        <div className="font-bold mx-auto ">
          <div className="for_img">
            {/* <h2 className="font-xl mx-auto font-bold">BDG Game</h2> */}
            {/* <img src="" alt="" /> */}
            <p className=" text-center text-xl">
              hack
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto gap-6 my-2">
        <hr className="border-white-full border" />
        <p className="font-bold text-center text-2xl w-full mx-auto my-3">
          BDG Game Mod
        </p>
        <hr className="border-white-full border" />
      </div>

      <div className=" my-2 flex flex-col justify-around w-[80%] sm:w-[70%] mx-auto">

        <div className="flex justify-between my-auto w-1/2 mx-auto">
          <p className=" font-bold text-3xl">RESULT</p>
          <div
            className={`mx-auto text-3xl h-8 px-4  rounded-md py-auto font-bold`}
          >
            {color == "green" ? "🟢" : "🔴"}
          </div>
        </div>

        <div className=" flex justify-between items-center font-bold w-auto p-2 mx-auto">
          <p className="mx-6 text-xl"> SERVER </p>
          {/* <span className="">:</span> */}
          <p className="border border-pink-50  px-4  rounded-md py-auto py-2 my-2 font-bold bg-green-900">
usa~ CONNECTED
          </p>
        </div>

        <div className="w-1/2 mx-auto flex font-bold justify-between items-center mb-4">
          <p className=""> P E R I O D </p>
          <input
            type="number"
            min="100"
            maxLength={3}
            className="w-1/3 p-1 rounded-md border border-white text-black"
            value={period} // Set input value from state
            onChange={handleInputChange} // Call handler on change
          />
        </div>

      </div>
      <button
        onClick={changeColor}
        className="flex justify-center items-center mx-auto bg-gray-700 text-white"
      >
        Start hack
      </button>
      {/* <div className="hidden sm:block w-1/2 mx-auto">
        <img src={bdg_logo} alt="" className="" />
      </div> */}
      <div className="text-center">
        <p className="font-bold mb-6">Join us on telegram and download</p>
        <div className="flex justify-around items-center mb-6">
          <a
            href="https://telegram.dog/onlineluterz"
            className="hover:border-gray-300 hover:bg-orange-400 hover:text-white border border-transparent transition duration-300 ease-in-out px-4 py-2 rounded-md text-2xl"
          >
            update
          </a>
          <a
            href="https://bdggame.in/#/register?invitationCode=671443560283"
            className="hover:border-gray-300 hover:bg-green-400 hover:text-white border border-transparent transition duration-300 ease-in-out px-4 py-2 rounded-md text-2xl"
          >
            conect
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
