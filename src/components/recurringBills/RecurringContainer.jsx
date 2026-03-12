import React from "react";
import { DataTable } from "../layout/DataTable";

export const recurringBillsMock = [
  {
    billName: "Netflix",
    category: "Entertainment",
    amount: 249,
    frequency: "Monthly",
    nextDueDate: "2026-03-25",
    status: "upcoming",
  },
  {
    billName: "Spotify",
    category: "Entertainment",
    amount: 129,
    frequency: "Monthly",
    nextDueDate: "2026-03-28",
    status: "paid",
  },
  {
    billName: "Internet Telmex",
    category: "Utilities",
    amount: 599,
    frequency: "Monthly",
    nextDueDate: "2026-03-22",
    status: "overdue",
  },
  {
    billName: "Electricity CFE",
    category: "Utilities",
    amount: 720,
    frequency: "Monthly",
    nextDueDate: "2026-03-30",
    status: "upcoming",
  },
  {
    billName: "iCloud Storage",
    category: "Subscriptions",
    amount: 49,
    frequency: "Monthly",
    nextDueDate: "2026-03-27",
    status: "paid",
  },
];

const RecurringContainer = () => {
  return (
    <>
      <div className="recurring-container">
        <DataTable></DataTable>
      </div>
    </>
  );
};

export default RecurringContainer;
