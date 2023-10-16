import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Board from "./Module/Board/Board";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh - 80px)]">
        <Routes>
          {/* <Route path="/"  element={Footer} /> */}
          <Route exact path="/" element={<Board />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
