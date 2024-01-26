import {
  faArrowRightFromBracket,
  faBars,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { useEffect, useRef, useState } from "react";

const VerticalNavbar = () => {
  const navbarRef = useRef(null);
  const navbarCollapseRef = useRef(null);
  const [bodyClicked, setBodyClicked] = useState(false);

  const collapseNavbar = () => {
    const collapse = document.getElementById("collapse-navbar");
    collapse.classList.toggle("hidden");

    const navbar = document.getElementById("navbar");

    if (navbar.classList.contains("md:!w-12")) {
      // open navbar
      navbar.classList.remove("md:!w-12");
      navbar.style.width = "auto";
      const { width } = navbar.getBoundingClientRect();
      navbar.classList.add("md:!w-12");
      const temp = navbar.offsetWidth;
      navbar.style.width = width + "px";
    } else {
      // close navbar
      navbar.classList.add("md:!w-12");
      navbar.classList.remove("md:!w-12");
    }

    navbar.classList.toggle("md:!w-12");
  };

  const collapseMobileNavbar = () => {
    const collapse = document.getElementById("mobile-collapse-navbar");

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

  const handleClick = (e) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(e.target) &&
      navbarCollapseRef.current &&
      !navbarCollapseRef.current.contains(e.target) &&
      !bodyClicked &&
      !document.getElementById("navbar").classList.contains("md:!w-12")
    ) {
      collapseNavbar();
      setBodyClicked(true);
    } else {
      setBodyClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav
      id="navbar"
      ref={navbarRef}
      className="w-full md:!w-12 md:max-w-72 h-16 min-h-16 md:h-full bg-sky-950 text-slate-50"
    >
      {/* Desktop view */}
      <div className="hidden md:flex md:flex-col h-full py-8 relative overflow-hidden text-nowrap">
        <div className="text-center flex items-center px-4">
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl cursor-pointer"
            onClick={collapseNavbar}
          />

          <div className="px-16 font-bold italic text-3xl">
            <div className="break-words">Navbar</div>
          </div>
        </div>

        <div
          id="collapse-navbar"
          ref={navbarCollapseRef}
          className="hidden h-full flex flex-col relative"
        >
          <div className="mt-10 h-1 grow overflow-y-auto overflow-x-hidden">
            <div className="vertical-navbar">
              <FontAwesomeIcon icon={faHouse} className="text-lg" />
              <a className="ms-4">Home</a>
            </div>

            <div className="vertical-navbar">
              <FontAwesomeIcon icon={faHouse} className="text-lg" />
              <a className="ms-4">Home</a>
            </div>

            <div className="vertical-navbar">
              <FontAwesomeIcon icon={faHouse} className="text-lg" />
              <a className="ms-4">Home</a>
            </div>
          </div>

          <div className="mt-8 px-16 text-center">
            Welcome back,<div className="italic">Wei Kang</div>
          </div>

          <div className="vertical-navbar mt-4">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-lg"
            />
            <a className="ms-4">Logout</a>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="h-full relative">
        <div className="h-full px-10 text-center flex items-center z-20">
          <div className="font-bold italic text-3xl">
            <div className="break-words">Navbar</div>
          </div>

          <FontAwesomeIcon
            icon={faBars}
            className="text-xl cursor-pointer ms-auto"
            onClick={collapseMobileNavbar}
          />
        </div>

        <div
          id="mobile-collapse-navbar"
          className="fixed w-full h-0 bg-sky-950"
        >
          <div className="py-6 flex flex-col items-center">
            <div className="max-h-60">
              <div className="vertical-navbar">
                <FontAwesomeIcon icon={faHouse} className="text-lg" />
                <a className="ms-4">Home</a>
              </div>

              <div className="vertical-navbar">
                <FontAwesomeIcon icon={faHouse} className="text-lg" />
                <a className="ms-4">Home</a>
              </div>

              <div className="vertical-navbar">
                <FontAwesomeIcon icon={faHouse} className="text-lg" />
                <a className="ms-4">Home</a>
              </div>
            </div>

            <div className="mt-8 px-16 text-center">
              Welcome back, <span className="italic">Wei Kang</span>
            </div>

            <div className="vertical-navbar mt-2">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="text-lg"
              />
              <a className="ms-4">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
