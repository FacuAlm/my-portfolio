const Navbar = () => {
  return (
    <>
      <div className="flex justify-between m-5 items-center">
        <div className="text-gray-200 text-xl flex gap-3 justify-center items-center">
          <div className="bg-red-500 rounded-full px-3 py-2 font-bold text-2xl">
            FA
          </div>
          <h1>
            <span className="font-bold">Facundo</span> Almaraz
          </h1>
        </div>
        <nav className="flex gap-8 text-sm font-bold  text-gray-200">
          <a href="#">Sobre Mi</a>
          <a href="#">CV</a>
          <a href="#">Portfolio</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
