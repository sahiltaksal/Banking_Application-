import { useState } from "react";
import { transferMoney } from "../services/AccountService";

function TransferMoney() {

    const [fromAccountId, setFromAccountId] = useState("");
    const [toAccountId, setToAccountId] = useState("");
    const [amount, setAmount] = useState("");

    const handleTransfer = async (e) => {

        e.preventDefault();

        try {

            const transferData = {
                fromAccountId,
                toAccountId,
                amount
            };

            await transferMoney(transferData);

            alert("Transfer Successful");

            setFromAccountId("");
            setToAccountId("");
            setAmount("");

        } catch (error) {

            console.error(error);

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Transfer Failed");
            }
        }
    };

    return (

        <div className="card shadow p-4">

            <h2 className="mb-4">
                Transfer Money
            </h2>

            <form onSubmit={handleTransfer}>

                <div className="mb-3">

                    <label className="form-label">
                        From Account ID
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={fromAccountId}
                        onChange={(e) =>
                            setFromAccountId(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        To Account ID
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={toAccountId}
                        onChange={(e) =>
                            setToAccountId(e.target.value)
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
                    className="btn btn-primary"
                >
                    Transfer
                </button>

            </form>

        </div>

    );
}

export default TransferMoney;