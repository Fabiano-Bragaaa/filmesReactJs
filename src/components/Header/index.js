import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
  return (
    <header>
      <Link className="logo" to={"/"}>
        PrimeFlix
      </Link>

      <Link className="favoritos" to={"/favoritos"}>
        Favoritos
      </Link>
    </header>
  );
}
