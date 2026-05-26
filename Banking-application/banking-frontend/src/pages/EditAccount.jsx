import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    getAccountById,
    updateAccount
} from "../services/AccountService";

function EditAccount() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [accountHolderName, setAccountHolderName] = useState("");
    const [balance, setBalance] = useState("");

    useEffect(() => {
        loadAccount();
    }, []);

    const loadAccount = async () => {
        try {
            const response = await getAccountById(id);

            setAccountHolderName(response.data.accountHolderName);
            setBalance(response.data.balance);

        } catch (error) {
            console.error(error);
        }
    };

    // MOVE THIS HERE
    const saveAccount = async (e) => {

        e.preventDefault();

        try {

            const account = {
                accountHolderName,
                balance
            };

            await updateAccount(id, account);

            alert("Account Updated Successfully");

            navigate("/accounts");

        } catch (error) {

            console.error(error);

            alert("Update Failed");
        }
    };

    return (
        <div className="card shadow p-4">

            <h2>Edit Account</h2>

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

                <div className="mt-3">
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Update Account
                    </button>
                </div>

            </form>

        </div>
    );
}

export default EditAccount;