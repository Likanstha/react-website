import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/react.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#features">Features</a>
    </p>
    <p>
      <a href="#brand">Gallery</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 text-white">
      {/* Logo & Links */}
      <div className="flex items-center">
        <img src={logo} alt="3D Logo" className="w-16 h-auto" />
        <div className="hidden md:flex space-x-6 ml-6">
          <Menu />
        </div>
      </div>

      {/* Sign-in & Sign-up */}
      <div className="hidden md:flex items-center space-x-4">
        <p className="cursor-pointer">Sign in</p>
        <button className="bg-orange-500 px-6 py-2 rounded-md font-bold hover:bg-orange-600 transition">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
      </div>

      {/* Dropdown Menu */}
      {toggleMenu && (
        <div className="absolute top-16 right-6 bg-gray-800 p-4 rounded-md shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 text-center">
            <Menu />
            <div className="border-t border-gray-600 pt-2">
              <p className="cursor-pointer">Sign in</p>
              <button className="bg-orange-500 px-6 py-2 rounded-md font-bold hover:bg-orange-600 transition w-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
