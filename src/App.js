import Form from "./components/Form";
import Header from "./components/layout/Header";
import Wrapper from "./components/UI/Wrapper";
import Layout from "./components/layout/Layout";
import AllPages from "./pages/AllPages";
function App() {
  window.domain = "http://127.0.0.1:9000/api/v1/";

  return (
    <div>
      <Wrapper>
        <Layout>
          {<Form />}
          <Header />
          <AllPages />
        </Layout>
      </Wrapper>
    </div>
  );
}

export default App;
