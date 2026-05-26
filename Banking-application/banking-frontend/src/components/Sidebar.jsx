import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div
      className="bg-dark text-white p-3"
      style={{
        minHeight: "100vh",
        width: "250px"
      }}
    >

      <h4 className="mb-4">

        Menu

      </h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/accounts">
            <i className="bi bi-people me-2"></i>
            Accounts
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/create-account">
            <i className="bi bi-person-plus me-2"></i>
            Create Account
          </Link>
        </li>

        <li className="nav-item">
    <Link
        to="/deposit"
        className="nav-link text-white"
    >
        Deposit Money
    </Link>
</li>

      </ul>

    </div>
  );
}

export default Sidebar;