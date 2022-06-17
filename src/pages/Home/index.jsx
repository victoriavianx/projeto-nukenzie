import Header from "../../components/Header/Header";
import Form from "../../components/Form/form";
import TotalMoney from "../../components/TotalMoney/totalMoney";
import Filters from "../../components/Filters/filters";
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
