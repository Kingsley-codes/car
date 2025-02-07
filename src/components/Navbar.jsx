const Navbar = () => {
  return (
    <div className="bg-[rgba(255,0,0,0.5)] py-2 relative z-10"> {/* Semi-transparent background and ensure it's above the background image */}
      <div className="my-10 w-full text-center">
        <p className="font-outfit text-2xl pb-3 text-white text-shadow font-bold">Hello Baby</p> {/* Fully opaque text */}
        <h1 className="font-great text-8xl text-white text-shadow font-bold">Be My Valentine</h1> {/* Fully opaque text */}
      </div>
    </div>
  );
} 

export default Navbar;