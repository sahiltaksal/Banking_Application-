import { useState } from "react";
import {
    getTransactionsByAccountId
} from "../services/TransactionService";

function TransactionHistory() {

    const [accountId, setAccountId] =
        useState("");

    const [transactions, setTransactions] =
        useState([]);

    const searchTransactions = async () => {

        try {

            const response =
                await getTransactionsByAccountId(
                    accountId
                );

            setTransactions(response.data);

        } catch (error) {

            console.error(error);

            alert("No transactions found");

        }
    };

    return (

        <div className="card shadow p-4">

            <h2>Transaction History</h2>

            <div className="row mb-3">

                <div className="col-md-4">

                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Account ID"
                        value={accountId}
                        onChange={(e) =>
                            setAccountId(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-primary"
                        onClick={
                            searchTransactions
                        }
                    >
                        Search
                    </button>

                </div>

            </div>

            <table
                className="table table-bordered"
            >

                <thead
                    className="table-dark"
                >

                    <tr>

                        <th>ID</th>

                        <th>Type</th>

                        <th>Amount</th>

                        <th>Account ID</th>

                        <th>Date</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        transactions.map(
                            (transaction) => (

                            <tr
                              key={
                                transaction.id
                              }
                            >

                                <td>
                                    {transaction.id}
                                </td>

                                <td>
                                    {
                                      transaction.transactionType
                                    }
                                </td>

                                <td>
                                    ₹
                                    {
                                      transaction.amount
                                    }
                                </td>

                                <td>
                                    {
                                      transaction.accountId
                                    }
                                </td>

                                <td>
                                    {
                                      transaction.createdAt
                                    }
                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default TransactionHistory;