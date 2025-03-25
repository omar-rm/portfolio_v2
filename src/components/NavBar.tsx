const NavBar = () => {
  return (
    <>
      <div className="top-0 flex ...  items-center mt-2 ">
        <div className="w-1/6">
          <h3 className="w font-light text-2xl">Omar Rico</h3>
        </div>
        <div className="w-4/6 rounded-xl p-1.5 box">
          <a
            href="Banner"
            className=" nav-hover-a font-normal rounded-lg py-1 px-8 "
          >
            Home
          </a>
          <a
            href="Service"
            className=" nav-hover-a font-normal rounded-lg py-1 px-8"
          >
            Service
          </a>
          <a
            href="Projects"
            className="  nav-hover-afont-normal rounded-lg py-1 px-8"
          >
            Projects
          </a>
          <a
            href="Contact"
            className="  nav-hover-a font-normal rounded-lg py-1 px-8"
          >
            Contact
          </a>
        </div>
        <div className="w-1/6">
          <button className="hireMe-btn px-8 h-10 primary-txt-1 bg-1 rounded-lg">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
