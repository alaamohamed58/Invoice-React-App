import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/layout/Header";
import Wrapper from "./components/UI/Wrapper";
import Layout from "./components/layout/Layout";
import AllPages from "./pages/AllPages";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
function App() {
  const [theme, setTheme] = useState("dark");

  const themeChangeHandeler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
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
