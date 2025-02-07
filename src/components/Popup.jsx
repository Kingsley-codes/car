import TeddyBearHug from "./Teddy";


const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center py-20 justify-center bg-black bg-opacity-50">
      <div className="p-6 rounded-lg shadow-lg w-2/4 h-3/4 bg-pink-100 relative overflow-hidden">
        
        <h2 className="text-5xl my-2 text-[rgb(255,0,0)] font-bold text-center font-dancing">Yay!!</h2>
        <p className="font-great text-center my-3 text-3xl text-[rgb(255,0,0)]">Valentine don set!</p>


        <TeddyBearHug />

        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
