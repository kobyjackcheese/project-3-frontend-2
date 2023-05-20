import "./App.css";
import Header from "./components/Header";
import SimonGame from "./components/SimonGame";
import Footer from "./components/Footer";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Header />
      <SimonGame />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
