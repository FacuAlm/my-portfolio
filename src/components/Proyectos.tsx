import { Link } from "react-router-dom";
import cotizador from "../assets/img/cotizador.png";
import kiosco from "../assets/img/kiosco.png";
import medicina from "../assets/img/medicina.png";

const Proyectos = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-white">Proyectos {"/>"}</h2>

      <div className="grid grid-cols-1">
        <div className=" flex flex-col p-10">
          <h3 className="mt-5 font-bold text-white">Cotizador Cripto</h3>
          <p className="mt-2 text-gray-500">
            Aplicación web que permite cotizar criptomonedas en tiempo real. Se
            utilizó React, Axios, Styled Components y React Hooks.
          </p>

          <Link to="https://cotizador-cripto-six.vercel.app/">
            <img
              src={cotizador}
              alt="cotizador"
              className="mt-5 w-[100%] cursor-pointer self-center rounded-2xl border-red-500 hover:border-2 hover:opacity-80 hover:shadow-xl"
            />
          </Link>
        </div>

        <div className=" flex flex-col p-10">
          <h3 className="mt-5 font-bold text-white">KioscoApp</h3>
          <p className="mt-2 text-gray-500">
            Aplicación web que permite administrar un kiosco. Se utilizó NextJs,
            PrismaORM, TailwindCSS y MySQL
          </p>

          <Link to="https://github.com/FacuAlm/quiosco-app">
            <img
              src={kiosco}
              alt="kiosco"
              className="mt-5 w-[100%] cursor-pointer self-center rounded-2xl border-red-500 hover:border-2 hover:opacity-50 hover:shadow-xl"
            />
          </Link>
        </div>

        <div className=" flex flex-col p-10">
          <h3 className="mt-5 font-bold text-white">MedicineList</h3>
          <p className="mt-2 text-gray-500">
            Prototipo pagina IS para generar ordenes de medicamentos. Se utilizo
            React Vite Tailwind
          </p>

          <Link to="https://medicine-list.vercel.app/">
            <img
              src={medicina}
              alt="medicina"
              className="mt-5 w-[100%] cursor-pointer self-center rounded-2xl border-red-500 hover:border-2 hover:opacity-50 hover:shadow-xl"
            />
          </Link>
        </div>

        <Link
          to="/proyectos"
          className="mt-10 w-[50%] justify-self-center rounded-full bg-red-500 px-4 py-2 text-center font-bold text-white hover:bg-red-600"
        >
          Ver más proyectos
        </Link>
      </div>
    </>
  );
};

export default Proyectos;
