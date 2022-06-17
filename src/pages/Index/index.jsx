import Logo from "../../assets/logo.png";
import IndexImage from "../../assets/image-nukenzie.svg";
import { useHistory } from "react-router-dom";
import { BoxImage, BoxLogo, Container, Content } from "./styles";

const Index = () => {
  const history = useHistory();

  const handleClick = () => {
    return history.push("/home");
  };

  return (
    <Container>
      <Content>
        <BoxLogo>
          <figure>
            <img src={Logo} alt="logo-nukenzie" />
          </figure>
          <h1>Kenzie</h1>
        </BoxLogo>
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={handleClick}>Iniciar</button>
      </Content>
      <BoxImage>
        <figure>
          <img src={IndexImage} alt="imagem-ilustrativa" />
        </figure>
      </BoxImage>
    </Container>
  );
};

export default Index;
