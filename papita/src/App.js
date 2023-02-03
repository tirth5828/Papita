import Navbar from "./components/Navbar";
import fatherhood from "./images/Fatherhood-pana.svg";
import fatherhood2 from "./images/Fatherhood2.svg";
import TopQues from "./pages/TopQues";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./pages/Question";
function App() {
  return (
    <div className="min-h-screen top-0 relative w-screen scrollbar-hide">
      <BrowserRouter>
        <Navbar />
        <div className="fixed flex z-0 right-0 scrollbar-hide">
          {/* <img src = {fatherhood2} alt="Fatherhood" className="h-screen rotate-y-180"/> */}
          <img src={fatherhood} alt="Fatherhood" className="h-screen " />
        </div>
        <Routes>
          <Route path="/" element={<TopQues />}></Route>
          <Route path="/question" element={<Question />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
