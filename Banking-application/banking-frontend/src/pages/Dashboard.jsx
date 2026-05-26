import { useEffect, useState } from "react";
import { getAllAccounts } from "../services/AccountService";

function Dashboard() {

    const [totalAccounts, setTotalAccounts] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {

            const response = await getAllAccounts();

            const accounts = response.data;

            setTotalAccounts(accounts.length);

            const balance = accounts.reduce(
                (sum, account) => sum + account.balance,
                0
            );

            setTotalBalance(balance);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>

            <h2 className="mb-4 fw-bold">
                Dashboard
            </h2>

            <div className="row g-4">

                <div className="col-lg-4">

                    <div className="card shadow-lg border-0">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Total Accounts
                            </h6>

                            <h2>
                                {totalAccounts}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow-lg border-0">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Total Balance
                            </h6>

                           <h2>
    ₹ {totalBalance.toLocaleString()}
</h2>

                        </div>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card shadow-lg border-0">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Transactions
                            </h6>

                            <h2>
                                Coming Soon
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;