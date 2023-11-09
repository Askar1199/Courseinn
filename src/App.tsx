import { useState } from "react";
import "./app.scss";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarHandling = () => {
    setSidebar(true);
  };

  const sidebarClose = () => {
    setSidebar(false);
  };

  return (
    <>
      <header>
        <Navigation clicking={sidebarHandling} />
        <Sidebar state={sidebar} close={sidebarClose} />
      </header>

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
