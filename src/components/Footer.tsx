const Footer = () => {
  return (
    <div className="flex h-24 items-center justify-center rounded-b-2xl bg-black">
      <p className="text-center text-2xl text-white">
        Todos los derechos reservados - Facundo Almaraz -{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
