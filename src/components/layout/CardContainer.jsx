import { ChartLine } from "lucide-react";

export const CardContainer = ({
  currentBalance,
  incomeBalance,
  expenseBalance,
  textBalance,
  textIncome,
  textExpenses,
}) => {
  return (
    <div className="card-container grid grid-cols-3 grid-rows-1 gap-4  h-40">
      <div className="current-balance-card card shadow-box">
        <div className="title-container flex-containers">
          <ChartLine size={18} />
          <h3 className="card-title">{textBalance}</h3>
        </div>
        <div className="amount-container flex-containers">
          <p className="card-price">${currentBalance}</p>
          <p>MXN</p>
        </div>
      </div>

      <div className="income-balance-card card shadow-box">
        <div className="title-container flex-containers">
          <ChartLine size={18} />
          <h3 className="card-title">{textIncome}</h3>
        </div>
        <div className="amount-container flex-containers">
          <p className="card-price">${incomeBalance}</p>
          <p>MXN</p>
        </div>
      </div>

      <div className="expenses-balance-card card shadow-box">
        <div className="title-container flex-containers">
          <ChartLine size={18} />
          <h3 className="card-title">{textExpenses}</h3>
        </div>
        <div className="amount-container flex-containers">
          <p className="card-price">${expenseBalance}</p>
          <p>MXN</p>
        </div>
      </div>
    </div>
  );
};
