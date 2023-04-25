import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="bg-zinc-900 m-20 rounded-2xl shadow-2xl">
        <div className="p-10">
          <Navbar />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
