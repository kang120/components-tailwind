import {
    faBars,
    faCaretRight,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar3 = () => {
    const [alwaysOpen, setAlwaysOpen] = useState(true);

    const toggleNavbar = () => {
        if (alwaysOpen) {
            return;
        }

        const navbar = document.getElementById("navbar");

        navbar.style.transition = "all 0.2s linear";
        navbar.classList.toggle("w-60");
    };

    const toggleDropdown = (index) => {
        const dropdown = document.getElementById("dropdown-" + index);
        const icon = document.getElementById("icon-" + index);

        dropdown.style.transition = "all 0.2s linear";
        icon.style.transition = "all 0.2s linear";

        if (dropdown.classList.contains("h-0")) {
            dropdown.style.height = "auto";
            const { height } = dropdown.getBoundingClientRect();
            dropdown.style.height = 0;
            const temp = dropdown.offsetHeight;
            dropdown.style.height = height + "px";
        } else {
            dropdown.style.height = 0;
        }

        dropdown.classList.toggle("h-0");
        icon.classList.toggle("rotate-90");
    };

    return (
        <div className="w-full h-full relative">
            <nav className="fixed top-0 left-0 w-full h-12 px-1 flex items-center bg-slate-50 shadow">
                <div
                    className="px-3 py-2 rounded-full hover:bg-gray-300 cursor-pointer"
                    onClick={() => setAlwaysOpen((prev) => !prev)}
                >
                    <FontAwesomeIcon icon={faBars} className="text-lg" />
                </div>

                <div className="ms-8 font-bold text-xl">Navbar</div>
            </nav>

            <div className="flex pt-12 h-full">
                <nav
                    id="navbar"
                    className={`w-12 ${
                        alwaysOpen ? "w-60" : ""
                    } h-full bg-slate-50 shadow-xl overflow-hidden`}
                    onMouseEnter={toggleNavbar}
                    onMouseLeave={toggleNavbar}
                >
                    <div className="flex flex-col relative">
                        <div className="mt-12 flex flex-col text-sm text-nowrap">
                            <div className="px-4 py-2 flex items-center cursor-pointer bg-gray-300 hover:bg-gray-300">
                                <FontAwesomeIcon icon={faHouse} />
                                <a className="ms-4">Home</a>
                            </div>

                            <div className="px-4 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                <FontAwesomeIcon icon={faHouse} />
                                <a className="ms-4">Home</a>
                            </div>

                            <div className="px-4 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                <FontAwesomeIcon icon={faHouse} />
                                <a className="ms-4">Home</a>
                            </div>

                            <div
                                className="px-4 py-2 flex items-center hover:bg-gray-300 cursor-pointer"
                                onClick={() => toggleDropdown(1)}
                            >
                                <FontAwesomeIcon icon={faHouse} />
                                <a className="ms-4">Dropdown 1</a>
                                <FontAwesomeIcon
                                    id="icon-1"
                                    icon={faCaretRight}
                                    className="ms-auto text-lg text-slate-500"
                                />
                            </div>

                            <div
                                id="dropdown-1"
                                className="h-0 flex flex-col overflow-hidden"
                            >
                                <div className="px-10 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faHouse} />
                                    <a className="ms-4">Item 1</a>
                                </div>

                                <div className="px-10 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faHouse} />
                                    <a className="ms-4">Item 2</a>
                                </div>

                                <div className="px-10 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faHouse} />
                                    <a className="ms-4">Item 3</a>
                                </div>
                            </div>

                            <div className="px-4 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                <FontAwesomeIcon icon={faHouse} />
                                <a className="ms-4">Home</a>
                            </div>

                            <div
                                className="px-4 py-2 flex items-center hover:bg-gray-300 cursor-pointer"
                                onClick={() => toggleDropdown(2)}
                            >
                                <FontAwesomeIcon icon={faHouse} />
                                <a className="ms-4">Dropdown 2</a>
                                <FontAwesomeIcon
                                    id="icon-2"
                                    icon={faCaretRight}
                                    className="ms-auto text-lg text-slate-500"
                                />
                            </div>

                            <div
                                id="dropdown-2"
                                className="h-0 flex flex-col overflow-hidden"
                            >
                                <div className="px-10 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faHouse} />
                                    <a className="ms-4">Item 1</a>
                                </div>

                                <div className="px-10 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faHouse} />
                                    <a className="ms-4">Item 2</a>
                                </div>

                                <div className="px-10 py-2 flex items-center hover:bg-gray-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faHouse} />
                                    <a className="ms-4">Item 3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar3;
