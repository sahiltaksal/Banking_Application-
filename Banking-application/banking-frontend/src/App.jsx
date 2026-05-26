
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Withdraw from "./pages/Withdraw";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TransferMoney from "./pages/TransferMoney";
import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import Accounts from "./pages/Accounts";
import EditAccount from "./pages/EditAccount";
import Deposit from "./pages/Deposit";
import TransactionHistory
from "./pages/TransactionHistory";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div className="flex-grow-1 p-4">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route
              path="/create-account"
              element={<CreateAccount />}
            />

            <Route
              path="/accounts"
              element={<Accounts />}
            />

            <Route
    path="/withdraw"
    element={<Withdraw />}
/>


            <Route
 path="/edit-account/:id"
 element={<EditAccount />}
/>

            <Route
              path="/deposit"
              element={<Deposit />}
            />


<Route
    path="/transfer"
    element={<TransferMoney />}
/>

<Route
 path="/transactions"
 element={<TransactionHistory />}
/>
          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;