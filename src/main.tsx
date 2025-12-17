import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initZipy } from './zipy';

initZipy();

createRoot(document.getElementById("root")!).render(<App />);
