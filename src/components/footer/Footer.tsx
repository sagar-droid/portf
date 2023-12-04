import { Link } from "react-scroll";
import { UpArrowIcon } from "../icons/ArrowIcon";
const Footer = () => {
  return (
    <footer className=" p-8 flex gap-4 justify-center text-center items-center align-middle">
      <small>Lina Levi 2023. Layout based on Rocketseat's template.</small>
      <small className=" cursor-pointer">Github</small>
      <small className=" cursor-pointer">LinkedIn</small>
      <small className=" cursor-pointer">Instagram</small>
      <small className=" cursor-pointer">
        <Link to="home" smooth={true} duration={500}>
          <UpArrowIcon />
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
