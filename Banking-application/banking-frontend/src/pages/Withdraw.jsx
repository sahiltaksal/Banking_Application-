import { useState } from "react";
import { withdrawMoney } from "../services/AccountService";

function Withdraw() {

    const [accountId, setAccountId] = useState("");
    const [amount, setAmount] = useState("");

    const handleWithdraw = async (e) => {

        e.preventDefault();

        try {

            await withdrawMoney(accountId, amount);

            alert("Withdrawal Successful");

            setAccountId("");
            setAmount("");

        } catch (error) {

            console.error(error);

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Withdrawal Failed");
            }
        }
    };

    return (
        <div className="card shadow p-4">

            <h2 className="mb-4">
                Withdraw Money
            </h2>

            <form onSubmit={handleWithdraw}>

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
                    className="btn btn-danger"
                >
                    Withdraw
                </button>

            </form>

        </div>
    );
}

export default Withdraw;