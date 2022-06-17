import { Box, LogoBox } from "./styles";
import Logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleBack = () => {
    return history.push("/");
  };

  return (
    <Box>
      <LogoBox>
        <figure>
          <img src={Logo} alt="logo-nukenzie" />
        </figure>
        <h1>Kenzie</h1>
      </LogoBox>
      <button onClick={handleBack}>Início</button>
    </Box>
  );
};

export default Header;
