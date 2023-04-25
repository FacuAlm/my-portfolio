import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="bg-zinc-900 md:m-20 rounded-2xl shadow-2xl">
        <div className="md:p-10">
          <Navbar />
          <About />
        </div>
          <div className="bg-black h-24 flex justify-center items-center rounded-b-2xl">
            <p className="text-center text-white text-2xl">Todos los derechos reservados - Facundo Almaraz - {new Date().getFullYear()}</p>
          </div>
      </div>
    </>
  );
}

export default App;
