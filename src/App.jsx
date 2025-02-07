import { useState } from 'react';
import Navbar from './components/Navbar';
import BubbleAnimation from "./components/BubbleAnimation";
import Popup from "./components/Popup"; 
import TeddyBearHug from "./components/Teddy";


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [noClickedOnce, setNoClickedOnce] = useState(false);

  const handleYesClick = () => setShowPopup(true);

  const handleNoClick = () => {
    if (!noClickedOnce) {
      setNoClickedOnce(true);
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className='body-background'>
      <Navbar />
      <div>
        <p className='text-center text-shadow text-4xl text-red-600 font-bold font-dancing '>
          Hey Baby! Thank you for bringing so much joy, laughter, purpose, and clarity to my life.
        </p>
        <p className='text-center text-shadow text-4xl text-red-600 font-bold font-dancing mt-5 mb-7'>
          Please allow me the honor of showing you just how special you are on Valentine's Day.
        </p>
        <p className='text-center text-7xl text-red-600 font-semibold font-great mt-10'>
          Will You Be My Valentine?
        </p>

        <div className='flex w-full justify-center my-10 gap-10'>
          <button 
            className='font-dancing border rounded-md font-bold text-white hover:bg-green-400 py-2 px-6 bg-green-500' 
            onClick={handleYesClick}
          >
            YES
          </button>
          <button
            className={`font-dancing border rounded-md font-bold text-white py-2 px-6 ${
              noClickedOnce ? 'bg-green-500 hover:bg-green-400' : 'bg-red-500 hover:bg-red-400'
            }`}
            onClick={handleNoClick}
          >
            {noClickedOnce ? 'YES' : 'NO'}
          </button>
        </div>


        <BubbleAnimation />

        {showPopup && <Popup onClose={() => setShowPopup(false)} />} {/* Show Popup when triggered */}
      </div>
    </div>
  );
}

export default App;
