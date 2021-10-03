import { React, useState } from "react";
import HeaderPractise from "./HeaderPractise";
import themeX from "./Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Footer from "./Footer";
import CustomSoftwarePage from "./CustomSoftwarePage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";

export default function App() {
  const [tabIndexValue, setTabIndexValue] = useState(0);

  return (
    <>
      <ThemeProvider theme={themeX}>
        <CssBaseline />
        <BrowserRouter>
          <HeaderPractise
            tabIndexValue={tabIndexValue}
            setTabIndexValue={setTabIndexValue}
          />
          {/* <Header /> */}
          {/* <Header2 /> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/service" component={ServicesPage} />
            <Route
              exact
              path="/custom"
              render={(props) => <CustomSoftwarePage />}
              // {
              //   // () => <h2> CUSTOM</h2>
              //   ContactPage
              // }
            />
            <Route exact path="/rpos" component={() => <h2> RPOS</h2>} />
            <Route exact path="/print" component={() => <h2> Print</h2>} />
            <Route
              exact
              path="/warranty"
              component={() => <h2> Warranty</h2>}
            />

            <Route
              exact
              path="/revolution"
              component={() => <h1>Revolution</h1>}
            />
            <Route exact path="/estimate" component={() => <h1>Estimate</h1>} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
          <Footer
            tabIndexValuep={tabIndexValue}
            setTabIndexValue={setTabIndexValue}
          />

          {/* <Footer /> */}
        </BrowserRouter>
        {/* <Footer> Footer Example</Footer> */}
      </ThemeProvider>
    </>
  );
}
