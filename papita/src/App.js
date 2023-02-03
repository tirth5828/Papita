import Navbar from "./components/Navbar";
import fatherhood from "./images/Fatherhood-pana.svg"
import fatherhood2 from "./images/Fatherhood2.svg"
import TopQues from "./pages/TopQues";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden w-screen scrollbar-hide">
      <Navbar />
      <div className="fixed flex z-0 left-0 scrollbar-hide">
        {/* <img src = {fatherhood2} alt="Fatherhood" className="h-screen rotate-y-180"/> */}
        <img src = {fatherhood} alt="Fatherhood" className="h-screen "/>
      </div>
      <TopQues />
    </div>
  );
}

export default App;
