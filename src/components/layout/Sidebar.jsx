import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="bg-amber-900 ">
      Finance
      <div className="link-container grid grid-flow-col grid-rows-6 gap-4 mt-8">
        <Link href="/overview">Overview</Link>
        <Link href="/transactions">Transactions</Link>
        <Link href="/budgets">Budgets</Link>
        <Link href="/pots">Pots</Link>
        <Link href="/recurringBills">Recurring Bills</Link>
      </div>
    </div>
  );
};
