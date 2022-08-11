import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SelectSize from "./components/SelectSize";
import Table3 from "./components/Table3";
import Table5 from "./components/Table5";
import Table9 from "./components/Table9";

function App() {
  return (
    <>
      <Header />
      <h1>Project Pixel Art</h1>
      <p className="info">i</p>
      <Routes>
        <Route exact path="/" element={<SelectSize />} />
        <Route path="/table3" element={<Table3 />} />
        <Route path="/table5" element={<Table5 />} />
        <Route path="/table9" element={<Table9 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
