import { React, useState } from "react";
import HeaderPractise from "./HeaderPractise";
import themeX from "./Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Footer from "./Footer";
// import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

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
            <Route
              exact
              path="/"
              component={HomePage}
              // component={LandingPage}
              // component={() => <h1 style={{ height: "500px" }}>Home Page</h1>}
            />
            <Route exact path="/service" component={() => <h1> Services</h1>} />
            {/* <Route exact path="/contact" component={() => {Contact;}}/> */}
            {/* <Route exact path="/website" component={() => <h2> Website</h2>} /> */}
            <Route exact path="/rpos" component={() => <h2> RPOS</h2>} />
            <Route exact path="/print" component={() => <h2> Print</h2>} />
            <Route
              exact
              path="/warranty"
              component={() => <h2> Warranty</h2>}
            />
            {/* <Route
            exact
            path="/custom"
            component={() => <h2> Custom Services</h2>}
          /> */}
            <Route
              exact
              path="/revolution"
              component={() => <h1>Revolution</h1>}
            />
            <Route exact path="/estimate" component={() => <h1>Estimate</h1>} />
            <Route exact path="/contact" component={ContactPage} />

            {/* <Route exact path="/contact" component={ContactPage} /> */}
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
