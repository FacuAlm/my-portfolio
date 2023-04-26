import editado from "../assets/img/editado.png";

const Portfolio = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-center text-6xl font-bold text-white">
        *Sitio en construcción*
      </h1>

      <img src={editado} alt="editado" className="mt-5 w-[50%]  self-center" />
    </div>
  );
};

export default Portfolio;
