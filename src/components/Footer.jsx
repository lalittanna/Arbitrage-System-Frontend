const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-[#00ffd4] absolute bottom-0 left-0 right-0">
      <hr />
      <div>
        <p className="text-black mt-5 text-center font-normal text-base">
          &copy;{new Date().getFullYear()} Aata the Dough dam raeet INC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
