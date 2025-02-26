import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./app.module.css";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
