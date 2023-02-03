import Navbar from "./components/Navbar";
import fatherhood from "./images/Fatherhood-pana.svg"
import fatherhood2 from "./images/Fatherhood2.svg"
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden w-screen">
      <Navbar />
      <div className="absolute flex z-0 right-0">
        {/* <img src = {fatherhood2} alt="Fatherhood" className="h-screen rotate-y-180"/> */}
        <img src = {fatherhood} alt="Fatherhood" className="h-screen"/>
      </div>
    </div>
  );
}

export default App;
