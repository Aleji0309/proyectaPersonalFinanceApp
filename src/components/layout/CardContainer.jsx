export  const CardContainer = ({
    currentBalance,
    incomeBalance,
    expenseBalance
}) => { 
    return (
        <div className="card-container grid grid-cols-3 grid-rows-1 gap-4  h-40">
            <div className="current-balance-card card">
                <h3 className="card-title">Current Blance</h3>
                <p className="card-price">${currentBalance}</p>
            </div>
            <div className="income-card card">
                <h3 className="card-title">Income</h3>
                <p className="card-price">${incomeBalance}</p>
            </div>
            <div className="expenses-card card">
                <h3 className="card-title">Expenses</h3>
                <p className="card-price">${expenseBalance}</p>
            </div>
        </div>
    );
 };


 