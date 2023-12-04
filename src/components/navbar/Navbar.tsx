import { Link } from "react-scroll";
import { SunIcon } from "../icons/ArrowIcon";

const Navbar = () => {
  return (
    <header className=" bg-[#171023] text-white flex justify-around h-20 text-center items-center box-border shadow-2xl shadow-black">
      <h3 className=" font-kalam">PortF</h3>
      <nav className=" flex gap-6 items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className=" cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className=" cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className=" cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className=" cursor-pointer"
        >
          Contact
        </Link>
        <a href="#">PT</a>
        <a href="#" className="text-xl">
          <SunIcon />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
