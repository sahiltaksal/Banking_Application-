import { useEffect, useState } from "react";
import axios from "axios";
import { deleteAccount } from "../services/AccountService";
import { useNavigate } from "react-router-dom";

function ViewAccounts() {

    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();
    const removeAccount = async (id) => {

    const confirmDelete =
        window.confirm("Are you sure?");

    if (!confirmDelete) return;

    try {

        await deleteAccount(id);

        alert("Account Deleted Successfully");

        getAllAccounts();

    } catch (error) {

        console.error(error);

        alert("Failed to delete account");
    }
};

    useEffect(() => {
        getAllAccounts();
    }, []);

    const getAllAccounts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/accounts"
            );

            setAccounts(response.data);

        } catch (error) {
            console.error(error);
        }
    };

 return (
  <div className="card shadow p-4 mt-4">

    <h3 className="mb-3">
      All Accounts
    </h3>

    <table className="table table-bordered table-striped">

      <thead className="table-dark">
    <tr>
        <th>ID</th>
        <th>Account Holder</th>
        <th>Balance</th>
        <th>Action</th>
    </tr>
</thead>

      <tbody>
        {
          accounts.map(account => (
           <tr key={account.id}>
    <td>{account.id}</td>
    <td>{account.accountHolderName}</td>
    <td>₹ {account.balance}</td>

    <td>
       <div className="d-flex gap-2">

    <button
    className="btn btn-warning btn-sm"
    onClick={() =>
        navigate(`/edit-account/${account.id}`)
    }
>
    Edit
</button>

    <button
        className="btn btn-danger btn-sm"
        onClick={() => removeAccount(account.id)}
    >
        Delete
    </button>

</div>
    </td>
</tr>
          ))
        }
      </tbody>

    </table>

  </div>
);
}

export default ViewAccounts;