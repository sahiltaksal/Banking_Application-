import { useState } from "react";
import { depositMoney } from "../services/AccountService";

function Deposit() {

    const [accountId, setAccountId] = useState("");
    const [amount, setAmount] = useState("");

    const handleDeposit = async (e) => {

        e.preventDefault();

        try {

            await depositMoney(accountId, amount);

            alert("Deposit Successful");

            setAccountId("");
            setAmount("");

        } catch (error) {

            console.error(error);

            alert("Deposit Failed");
        }
    };

    return (

        <div className="card shadow p-4">

            <h2 className="mb-4">
                Deposit Money
            </h2>

            <form onSubmit={handleDeposit}>

                <div className="mb-3">

                    <label className="form-label">
                        Account ID
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={accountId}
                        onChange={(e) =>
                            setAccountId(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Amount
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={amount}
                        onChange={(e) =>
                            setAmount(e.target.value)
                        }
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Deposit
                </button>

            </form>

        </div>

    );
}

export default Deposit;