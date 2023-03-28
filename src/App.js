import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Summary />
        <div className="App-content">
          <h2>My Portfolio ✍</h2>
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
