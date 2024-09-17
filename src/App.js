import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./components/detail";
import Mascotas from "./components/mascotas";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Mascotas />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascotas/:mascotaId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
