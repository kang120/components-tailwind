import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const Navbar = () => {
  const collapseNavbar = () => {
    const collapse = document.getElementById("collapse-navbar");

    if (collapse.style.height == "" || collapse.style.height == "0px") {
      collapse.style.height = "auto";
      const { height } = collapse.getBoundingClientRect();
      collapse.style.height = "0";
      const temp = collapse.offsetHeight;
      collapse.style.height = height + "px";
    } else {
      collapse.style.height = "0";
    }
  };

  return (
    <nav
      id="navbar"
      className="w-full bg-gradient-to-r from-orange-200 to-amber-200 shadow-lg"
    >
      <div className="text-slate-900 font-medium flex flex-col md:flex-row items-center px-10 md:px-15 lg:px-24 xl:px-32">
        <div className="w-full md:w-auto h-16 flex items-center">
          <div className="text-xl lg:text-2xl tracking-tighter font-bold font-serif italic">
            Navbar
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="block md:hidden text-2xl text-slate-300 ms-auto"
            onClick={collapseNavbar}
          />
        </div>

        <div
          id="collapse-navbar"
          className="fixed h-0 md:h-auto mt-16 md:mt-0 md:ms-10 md:pt-0 md:pb-0 md:grow md:relative w-full md:w-auto bg-gradient-to-r md:bg-transparent from-orange-200 md:from-transparent to-amber-200 md:to-transparent"
        >
          <div className="pb-6 md:pb-0 space-y-3 md:space-y-0 md:flex md:flex-row gap-x-6 items-center justify-center text-center">
            <div className="block font-bold mb-6 md:hidden">
              Welcome, Wei Kang
            </div>

            <div>
              <a className="navbar">Home</a>
            </div>

            <div>
              <a className="navbar">About</a>
            </div>
            <div>
              <a className="navbar">History</a>
            </div>

            <div className="ms-auto md:flex md:items-center">
              <div className="hidden md:flex gap-x-1">
                Welcome, <div>Wei Kang</div>
              </div>
              <a className="navbar md:ms-5 lg:ms-10">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
