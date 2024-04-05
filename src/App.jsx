import { useState } from "react";
import bdg_logo from "./bdg_logo.png";
import game from "./Assets/game.jpg"

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
    <div className=" bg-[#000000f5] w-100 sm:w-[688px] relative  h-[100vh] px-3  flex flex-col justify-around">
      
      <div className=" w-11/12 mx-auto flex flex-col justify-around items-center">
        <div className="w-8/12 mx-auto  p-1">
          <img src={bdg_logo} alt="" className="w-full h-auto" />
        </div>
<<<<<<< HEAD
        <span className="font-bold text-[6rem] mt-[-3rem] mb-[-1rem] w-[100vw] text-yellow-200 text-center my-3">
          H@ck
        </span>
        <hr className="border-white-full border w-1/2 mx-auto" />
      </div>

      <div className=" my-2 flex flex-col justify-between  items-center w-[90%] sm:w-[80%] mx-auto">
      
        <div className="flex justify-between items-center rounded-xl px-4 py-2 mx-auto bg-green-200 mb-2 text-green-900 text-2xl">
          <div className="flex items-center">
            <p className="font-bold ">Server: </p>
          </div>
          <div className={`mx-auto rounded-md font-bold`}>
            {period && color == "green" ? " ~ Connected_[USA]" : "🔴"}
          </div>
        </div>

        <div className=" flex font-bold justify-between text-xl px-4 bg-pink-300 rounded-xl py-2 items-center mb-2">
          <p className=" text-pink-900">WinGo 1Minute Period: </p>
          <input
            type="number"
            minLength={3}
            maxLength={3}
            className="p-1 w-1/5 rounded-md border border-pink-900 bg-pink-300 text-black"
=======
        <div className="font-bold mx-auto ">
          <div className="for_img">
            {/* <h2 className="font-xl mx-auto font-bold">BDG Game</h2> */}
            {/* <img src="" alt="" /> */}
            <p className=" text-center text-xl">
              ind
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto gap-6 my-2">
        <hr className="border-white-full border" />
        <p className="font-bold text-center text-2xl w-full mx-auto my-3">
          onlineluter h@ck
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
          <p className="mx-6 text-xl">SERVER</p>
          {/* <span className="">:</span> */}
          <p className="border border-pink-50  px-4  rounded-md py-auto py-2 my-2 font-bold bg-green-900">ind~CONECTED
          </p>
        </div>

        <div className="w-1/2 mx-auto flex font-bold justify-between items-center mb-4">
          <p className="">~PERIOD!</p>
          <input
            type="number"
            min="100"
            maxLength={4}
            className="w-1/3 p-1 rounded-md border border-white text-black"
>>>>>>> 60f31f1696148416e77de5383018d135957f53bf
            value={period} // Set input value from state
            onChange={handleInputChange} // Call handler on change
          />
        </div>

        <div className=" flex font-bold justify-between mx-4 px-4 bg-white/50 rounded-xl py-2 items-center mb-4">
          <div className=" text-2xl text-purple-800 flex justify-center w-100 items-center ">
            <p className="px-1">❤️‍🔥</p>
            <p className="px-1">Result</p>
            <p className="px-1">❤️‍🔥</p>
            <p className="px-1">:</p>
          </div>
          {/* <span className="">:</span> */}
          <p className="w-[80%]  px-4 rounded-md font-extrabold text-3xl">
            {period && color == "green" ? "🟢" : "🔴"}
          </p>
        </div>
      </div>

      <div className=" w-1/2 mx-auto">
        <img src={game} alt="" className="" />
      </div>

      <button
        onClick={changeColor}
        className="flex justify-center items-center mx-auto text-gray-700 mb-2 bg-white/90 text-xl "
      >
<<<<<<< HEAD
        H@CK 
=======
        h@ck
>>>>>>> 60f31f1696148416e77de5383018d135957f53bf
      </button>
      <div className="text-center">
<<<<<<< HEAD
        <div className="flex justify-around items-center mb-6">
          <a
            href="https://telegram.dog/onlineluterz"
            className="hover:border-gray-300 hover:bg-blue-400 bg-yellow-200 hover:text-white border border-transparent transition duration-300 ease-in-out px-4 py-2 rounded-md text-2xl"
          >
            Connect
=======
        <p className="font-bold mb-6"> anshurazz</p>
        <div className="flex justify-around items-center mb-6">
          <a
            href="https://telegram.dog/onlineluterz"
            className="hover:border-black-300 hover:bg-orange-400 hover:text-white border border-transparent transition duration-300 ease-in-out px-4 py-2 rounded-md text-2xl"
          >
            update
>>>>>>> 60f31f1696148416e77de5383018d135957f53bf
          </a>
          <a
            href="https://bdggame.in/#/register?invitationCode=671443560283"
            className="hover:border-gray-300 hover:bg-green-400 hover:text-white border border-transparent transition duration-300 ease-in-out uppercase px-4 py-2 rounded-md text-2xl"
          >
<<<<<<< HEAD
            Join
=======
            conect
>>>>>>> 60f31f1696148416e77de5383018d135957f53bf
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
