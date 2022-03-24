import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Gallery from "./components/Gallery";


function App() {
  return (<>
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Main />
            <Redirect to="/"></Redirect>
          </Route>
          <Route exact path="/About">
            <AboutMe />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </main>
     
    </div>
  
    </>
  );
}

export default App;
