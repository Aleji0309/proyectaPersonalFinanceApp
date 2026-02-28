export  const CardContainer = () => { 
    return (
        <div className="card-container grid grid-cols-3 grid-rows-1 gap-4  h-40">
            <div className="current-balance-card card">
                <h3 className="card-title">Current Blance</h3>
                <p className="card-price">$4836.00</p>
            </div>
            <div className="income-card card">
                <h3 className="card-title">Income</h3>
                <p className="card-price">$3814.25</p>
            </div>
            <div className="expenses-card card">
                <h3 className="card-title">Expenses</h3>
                <p className="card-price">$1700.50</p>
            </div>
        </div>
    );
 };


 