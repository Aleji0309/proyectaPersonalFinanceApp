import React from "react";
import { DataTable } from "../layout/DataTable";

const recurringBillsMock = [
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

const recurringBillsHeader = [
  {firstRow:"Bill Name",
    secondRow: "Category",
    thirdRow: "Amount",
    fourthRow: "Frecuency",
    fifthRow: "Next Dute Date",
    sixthRow: "Status",
  }

]



const RecurringContainer = () => {
  return (
    <>
      <div className="recurring-container">
        <DataTable 
            data={recurringBillsMock}
            dataHeader={recurringBillsHeader}
        ></DataTable>
      </div>
    </>
  );
};

export default RecurringContainer;
