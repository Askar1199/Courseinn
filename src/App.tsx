import "./app.scss";
import Hero from "./components/hero";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
