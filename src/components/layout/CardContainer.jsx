export  const CardContainer = ({
    currentBalance,
    incomeBalance,
    expenseBalance,
    textBalance,
    textIncome,
    textExpenses
}) => { 
    return (
        <div className="card-container grid grid-cols-3 grid-rows-1 gap-4  h-40">
            <div className="current-balance-card card shadow-box ">
                <h3 className="card-title">{textBalance}</h3>
                <p className="card-price">${currentBalance}</p>
            </div>
            <div className="income-card card shadow-box ">
                <h3 className="card-title">{textIncome}</h3>
                <p className="card-price">${incomeBalance}</p>
            </div>
            <div className="expenses-card card shadow-box">
                <h3 className="card-title">{textExpenses}</h3>
                <p className="card-price">${expenseBalance}</p>
            </div>
        </div>
    );
 };


 