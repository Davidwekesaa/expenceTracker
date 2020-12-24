
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddItemList from './components/AddItemList'
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />

      </div>
      <div className="container">
        <IncomeExpenses />
      </div>
      <div className="container">
        <TransactionList />
      </div>
      <div className="container">
        <AddItemList />
      </div>
    </GlobalProvider>
  );
}

export default App;
