import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./styles.css";
import GonggongNav from "./components/GonggongNav";

const navProps = {
  logoSrc: "/logo.png",
  menu: [
    {
      name: "Link1",
      link: "#",
      subMenu: [
        {
          name: "Link1-1",
          link: "#"
        },
        {
          name: "Link1-2",
          link: "#"
        },
        {
          name: "Link1-3",
          link: "#"
        }
      ]
    },
    {
      name: "Link2",
      link: "#"
    },
    {
      name: "Link3",
      link: "#"
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/type">
            <Switch>
              <Route path="/type/gonggong">
                <GonggongNav {...navProps} />
              </Route>
            </Switch>
          </Route>
        </Switch>
        <main>
          <h1>Hello Navigations</h1>
          <article className="link-container">
            <NavLink
              to="/type/gonggong"
              activeStyle={{
                fontWeight: 600,
                color: "red",
                textDecoration: "none"
              }}
            >
              공공
            </NavLink>
          </article>
        </main>
      </Router>
    </div>
  );
}
