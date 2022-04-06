import "./Header.css";
import Logo from "./nu-kenzie.png";

const Header = () => {
  return (
    <div className="top">
      <figure className="imageLogo">
        <img src={Logo} alt="Logo NuKenzie" />
      </figure>
      <button className="homeButton">Início</button>
    </div>
  );
};

export default Header;
