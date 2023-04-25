import cotizador from "../assets/img/cotizador.png";
import kiosco from "../assets/img/kiosco.png";
import medicina from "../assets/img/medicina.png";

const Proyectos = () => {
  return (
    <>
      <h2 className="text-white text-2xl font-bold">Proyectos {"/>"}</h2>

      <div className="grid grid-cols-1">
        <div className=" flex flex-col p-10">
          <h3 className="text-white font-bold mt-5">Cotizador Cripto</h3>
          <p className="text-gray-500 mt-2">
            Aplicación web que permite cotizar criptomonedas en tiempo real. Se
            utilizó React, Axios, Styled Components y React Hooks.
          </p>

          <img
            src={cotizador}
            alt="cotizador"
            className="mt-5 w-[100%] rounded-2xl hover:opacity-80 hover:shadow-xl cursor-pointer self-center hover:border-2 border-red-500"
          />
        </div>

        <div className=" flex flex-col p-10">
          <h3 className="text-white font-bold mt-5">KioscoApp</h3>
          <p className="text-gray-500 mt-2">
            Aplicación web que permite administrar un kiosco. Se utilizó NextJs,
            PrismaORM, TailwindCSS y MySQL
          </p>

          <img
            src={kiosco}
            alt="kiosco"
            className="mt-5 w-[100%] rounded-2xl hover:opacity-50 hover:shadow-xl cursor-pointer self-center hover:border-2 border-red-500"
          />
        </div>

        <div className=" flex flex-col p-10">
          <h3 className="text-white font-bold mt-5">MedicineList</h3>
          <p className="text-gray-500 mt-2">
            Prototipo pagina IS para generar ordenes de medicamentos. Se utilizo
            React Vite Tailwind
          </p>

          <img
            src={medicina}
            alt="medicina"
            className="mt-5 w-[100%] rounded-2xl hover:opacity-50 hover:shadow-xl cursor-pointer self-center hover:border-2 border-red-500"
          />
        </div>

        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full justify-self-center mt-10 w-[50%]">
          Ver más proyectos
        </button>
      </div>
    </>
  );
};

export default Proyectos;
