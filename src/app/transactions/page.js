import { CardContainer } from "@/components/layout/CardContainer"
import { TransactionsContainer } from "@/components/transactions/TransactionsContainer"

export default function showTransactions(){ 
     return (
    <>
            <h2 className="text-3xl mb-8 my-8 font-bold">Transactions</h2>
            <CardContainer
                textBalance={'Total Expenses'}
                textIncome={'Total Income'}
                textExpenses={'Transaction Fees'}
                currentBalance={5000}
                incomeBalance={5000}
                expenseBalance={5000}
            />
            <TransactionsContainer/>
        </>
  );
 };