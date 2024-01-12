import Nav from "./components/Nav";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Pan");

  return (
    <>
      <Nav />
      <About name={name} />
    </>
  );
}

export default App;
