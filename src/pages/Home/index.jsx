import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import TotalMoney from "../../components/TotalMoney/TotalMoney";
import Filters from "../../components/Filters/Filters";
import List from "../../components/List/List";
import { Container, Content } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <section>
          <Form />
          <TotalMoney />
        </section>
        <section>
          <Filters />
          <List />
        </section>
      </Content>
    </Container>
  );
};

export default Home;
