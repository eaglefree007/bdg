import { useState } from "react";
import bdg_logo from "./bdg_logo.png";

function App() {
  const [period, setPeriod] = useState(""); // Initialize state with empty string

  const handleInputChange = (event) => {
    const newValue = event.target.value.slice(0, 3);
    setPeriod(newValue);
  };

  // const [color, setColor] = useState('green'); // Initial color state

  // const changeColor = () => {
  //   const newColor = color === 'green' ? 'blue' : 'green';
  //   setColor(newColor);
  // };
  const colors = ['red', 'green']; // Array containing color choices

  const [color, setColor] = useState(() => {
    return colors[Math.floor(Math.random() * colors.length)]; // Choose a random color initially
  });

  const changeColor = (e) => {
    e.preventDefault()
    if (period) { // Check if period has a value before changing color
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(newColor);
      console.log("Color changed to:", newColor); // Add for debugging
    }
  };
  let  bg = `bg-${color}-700`
  console.log(bg)
  return (
    <div className="w-100 h-[100vh] px-3 py-1 border border-white flex flex-col justify-around">
      <div className=" w-11/12 mx-auto flex gap-6 justify-around items-center">
        <div className="w-full mx-auto  p-1">
          <img src={bdg_logo} alt="" className="w-full h-auto" />
        </div>
        <div className="font-bold mx-auto ">
          <div className="for_img">
            {/* <h2 className="font-xl mx-auto font-bold">BDG Game</h2> */}
            {/* <img src="" alt="" /> */}
            <p className=" text-xl">
              Welcome to our app BDG Game. Enter your period Number and select
              result type and see the result.
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
      <div className="w-1/3 mx-auto gap-6 my-2">
      <div className="flex gap-4 justify-between mb-4">
          <p className=" font-bold">RESULT :</p>
          <div className={`mx-auto  h-8 border border-pink-50 px-4  rounded-md py-auto font-bold`}>{color == "green" ? "Win" : "Loss"}</div>
          {/* <div className={`mx-auto border border-red-50 h-8 w-8 rounded-full bg-${color}-600`}></div> */}
        </div>
        <div className=" flex gap-4 justify-between mb-4 font-bold">
          <p className="">SERVER </p>
          <span className="">:</span>
          <p className="border border-pink-50 px-4  rounded-md py-auto font-bold bg-green-900">CONNECTED</p>
        </div>
        <div className="flex font-bold gap-4 justify-between mb-4">
          <p className="">PERIOD </p>
          <span className="">:</span>
          <input
            type="number" min="100" maxLength={3}
            className="w-1/2 text-black"
            value={period} // Set input value from state
            onChange={handleInputChange} // Call handler on change
          />
        </div>
        {/* <input type="text" className="" /> */}
      </div>
      <button onClick={changeColor} className="flex justify-center items-center mx-auto bg-gray-700 text-white">
        Start hack
      </button>
      <div className="w-1/2 mx-auto">
        <img src={bdg_logo} alt="" className="" />
        {/* <span className="mx-auto block">Hack</span> */}
      </div>
      <div className="text-center">
        <p className="font-bold mb-6">Join us on telegram and download</p>
        <div className="flex justify-around items-center mb-6">
          <a
            href="https://telegram.dog/onlineluterz"
            className="hover:border-gray-300 hover:bg-blue-400 hover:text-white border border-transparent transition duration-300 ease-in-out px-4 py-2 rounded-md text-2xl"
          >
            TeleGram
          </a>
          <a
            href="https://bdggame.in/#/register?invitationCode=671443560283"
            className="hover:border-gray-300 hover:bg-green-400 hover:text-white border border-transparent transition duration-300 ease-in-out px-4 py-2 rounded-md text-2xl"
          >
            ReGister
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
