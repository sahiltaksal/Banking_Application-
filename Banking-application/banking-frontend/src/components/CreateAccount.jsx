import { useState } from "react";
import axios from "axios";

function CreateAccount() {
  const [accountHolderName, setAccountHolderName] = useState("");
  const [balance, setBalance] = useState("");

  const saveAccount = async (e) => {
    e.preventDefault();

    const account = {
      accountHolderName,
      balance
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/accounts",
        account
      );

      alert("Account Created Successfully");

      console.log(response.data);

      setAccountHolderName("");
      setBalance("");
    } catch (error) {
      console.error(error);
      alert("Failed to create account");
    }
  };
return (
  <div className="card shadow p-4">
    <h3 className="mb-3">Create Account</h3>

    <form onSubmit={saveAccount}>

      <div className="mb-3">
        <label className="form-label">
          Account Holder Name
        </label>

        <input
          type="text"
          className="form-control"
          value={accountHolderName}
          onChange={(e) =>
            setAccountHolderName(e.target.value)
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Balance
        </label>

        <input
          type="number"
          className="form-control"
          value={balance}
          onChange={(e) =>
            setBalance(e.target.value)
          }
        />
      </div>

      <button
        type="submit"
        className="btn btn-success"
      >
        Create Account
      </button>

    </form>
  </div>
);
}

export default CreateAccount;