import Link from "next/link";
import React from "react";
import {
  House,
  FolderSync,
  BadgeDollarSign,
  PiggyBank,
  BanknoteX,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="sidebar-container bg-(--bg-sidebar) text-(--text-secondary) min-h-screen">
      <h2 className="text-2xl text-white">finance</h2>
      <div className="link-container grid grid-flow-col grid-rows-6 gap-4 mt-8">
        <Link
          href="/overview"
          className="group flex items-center gap-3 rounded-xs px-3 py-2
                    text-(--text-secondary)
                    hover:bg-white hover:text-black
                    transition-colors"
        >
          <House
            size={20}
            className="
                    text-(--text-secondary)
                    group-hover:text-(--accent-hover)
                    transition-colors"
          />
          <span>Overview</span>
        </Link>

        <Link
          href="/transactions"
          className="group flex items-center gap-3 rounded-xs px-3 py-2
                      text-(--text-secondary)
                    hover:bg-white hover:text-black
                      transition-colors"
        >
          <FolderSync
            size={20}
            className="
                        text-(--text-secondary)
                        group-hover:text-(--accent-hover)
                        transition-colors"
          />
          <span>Transactions</span>
        </Link>

        <Link
          href="/budgets"
          className="group flex items-center gap-3 rounded-xs px-3 py-2
                    text-(--text-secondary)
                  hover:bg-white hover:text-black
                    transition-colors"
        >
          <BadgeDollarSign
            size={20}
            className="
                    text-(--text-secondary)
                    group-hover:text-(--accent-hover)
                    transition-colors"
          />
          <span>Budgets</span>
        </Link>

        <Link
          href="/pots"
          className="group flex items-center gap-3 rounded-xs px-3 py-2
                    text-(--text-secondary)
                    hover:bg-white hover:text-black
                    transition-colors"
        >
          <PiggyBank
            size={20}
            className="
                  text-(--text-secondary)
                  group-hover:text-(--accent-hover)
                  transition-colors"
          />
          <span>Savings</span>
        </Link>

        <Link
          href="/recurringBills"
          className="group flex items-center gap-3 rounded-xs px-3 py-2
                    text-(--text-secondary)
                  hover:bg-white hover:text-black
                    transition-colors"
        >
          <BanknoteX
            size={20}
            className="
                  text-(--text-secondary)
                  group-hover:text-(--accent-hover)
                  transition-colors"
          />
          <span>Recurring Bills</span>
        </Link>
      </div>
    </div>
  );
};
