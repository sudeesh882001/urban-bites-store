import { Link } from "react-router-dom";
import logo from "../assets/urbanbiteslogo.png";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="Urban Bites"
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
}