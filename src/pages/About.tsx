import CodeAbout from "../components/CodeAbout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Proyectos from "../components/Proyectos";

const About = () => {
  return (
    <>
      <div className="rounded-2xl shadow-xl md:mx-28 md:my-16 md:bg-zinc-900 md:p-10">
        <Navbar />
        <div className="mt-10">
          <Header />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className=" ">
            <Proyectos />
          </div>

          <div className="  flex gap-3 ">
            <CodeAbout />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
