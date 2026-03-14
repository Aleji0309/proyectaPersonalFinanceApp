import React from "react";
import { DataTable } from "../layout/DataTable";

export const recurringBillsMock = [
  {
    firstColumn: "Netflix",
    secondColumn: "Entertainment",
    thirdColumn: 249,
    fourthColumn: "Monthly",
    fifthColumn: "2026-03-25",
    sixthColumn: "upcoming",
  },
  {
    firstColumn: "Spotify",
    secondColumn: "Entertainment",
    thirdColumn: 129,
    fourthColumn: "Monthly",
    fifthColumn: "2026-03-28",
    sixthColumn: "paid",
  },
  {
    firstColumn: "Internet Telmex",
    secondColumn: "Utilities",
    thirdColumn: 599,
    fourthColumn: "Monthly",
    fifthColumn: "2026-03-22",
    sixthColumn: "overdue",
  },
  {
    firstColumn: "Electricity CFE",
    secondColumn: "Utilities",
    thirdColumn: 720,
    fourthColumn: "Monthly",
    fifthColumn: "2026-03-30",
    sixthColumn: "upcoming",
  },
  {
    firstColumn: "iCloud Storage",
    secondColumn: "Subscriptions",
    thirdColumn: 49,
    fourthColumn: "Monthly",
    fifthColumn: "2026-03-27",
    sixthColumn: "paid",
  },
];

const RecurringContainer = () => {
  return (
    <>
      <div className="recurring-container">
        <DataTable 
            data={recurringBillsMock}
            companyTable={"Bill Name"}
            transactionIdTable={"Category"}
            amountTable={"Amount"}
            statusTable={"Frecuency"}
            dateTable={"Next Due Date"}
            timeTable={"Status"}
        ></DataTable>
      </div>
    </>
  );
};

export default RecurringContainer;
