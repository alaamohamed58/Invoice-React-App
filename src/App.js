import Form from "./components/Form";
import Header from "./components/layout/Header";
import Wrapper from "./components/UI/Wrapper";
import Layout from "./components/layout/Layout";
import AllPages from "./pages/AllPages";

function App() {
  return (
    <Wrapper>
      <Layout>
        {<Form />}
        <Header />
        <AllPages />
      </Layout>
    </Wrapper>
  );
}

export default App;
