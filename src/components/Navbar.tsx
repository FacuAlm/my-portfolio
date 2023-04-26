import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-red-500 px-3 py-2 text-xl text-white">
            FA
          </div>

          <h1 className="text-xl text-white">
            {" "}
            <span className="font-bold">Facundo</span> Almaraz
          </h1>
        </div>

        <div className="mb-5 mt-5 flex flex-col items-center gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-start">
          <Link to="/" className="text-white hover:text-red-500">
            Sobre mi
          </Link>

          <Link to="/proyectos" className="text-white hover:text-red-500">
            Proyectos
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
