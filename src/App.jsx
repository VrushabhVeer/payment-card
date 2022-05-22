import './App.css';
import Payment from './components/Payment';
import payment from "./data/payment.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>PAYMENT CARD</h2>
      </header>
      <Payment payment={payment}></Payment>
    </div>
  );
}

export default App;
