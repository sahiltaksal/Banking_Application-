import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import Accounts from "./pages/Accounts";
import EditAccount from "./pages/EditAccount";
import Deposit from "./pages/Deposit";
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
 path="/edit-account/:id"
 element={<EditAccount />}
/>

            <Route
              path="/deposit"
              element={<Deposit />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;