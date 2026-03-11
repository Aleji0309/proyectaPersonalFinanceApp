import { CardContainer } from "@/components/layout/CardContainer";
import RecurringContainer from "@/components/recurringBills/RecurringContainer";
export default function showRecurringBills() {
  return (
    <>
      <h2 className="text-3xl mb-8 my-8 font-bold">Recurring Bills</h2>
      <CardContainer
        textBalance={"Total Montly Bills"}
        textIncome={"Paid Bills"}
        textExpenses={"Upcoming Bills"}
        currentBalance={700}
        incomeBalance={700}
        expenseBalance={700}
      />

        <RecurringContainer
        
      />
  
    </>
  );
}
