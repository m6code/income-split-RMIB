import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import "./App.css";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(getColorPreference());
  }, [color]);

  return (
    <div className="container">
      <Header />
      <Main />
      <Toaster
        position="top-right"
        closeButton
        visibleToasts={9}
        theme={color}
        richColors
      />
    </div>
  );
}

export default App;
