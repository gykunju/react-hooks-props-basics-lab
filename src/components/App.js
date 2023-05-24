import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

console.log(user);

function App() {
  const bio = user.bio
  const links = user.links
  return (
    <div>
      <NavBar />
      <Home />
      <About bio={bio} links={links}/>
    </div>
  );
}

export default App;
