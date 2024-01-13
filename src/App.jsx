import Nav from "./components/Nav";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Nav />
      <About isOpen={isOpen} />
      <button onClick={open}>Please Khant</button>
    </>
  );
}

export default App;
