import { CardContainer } from "@/components/layout/CardContainer";

export default function showOverview() {
  return (
    <>
      <h2 className="text-3xl mb-8 my-8 font-bold">Overview</h2>
      <CardContainer
        textBalance={"Total Blance"}
        textIncome={"Total Income"}
        textExpenses={"Total Expenses"}
        currentBalance={4800}
        incomeBalance={4800}
        expenseBalance={4800}
      />
    </>
  );
}
