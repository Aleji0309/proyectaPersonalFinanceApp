import Link from "next/link";
import Image from "next/image";


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
      {/* Logo */}
  <div className="logo-section py-6">
    <Image
      src="/logoFondo-removebg-preview.png"
      alt="Logo Empresa"
      width={120}
      height={40}
      className="object-contain"
    />
  </div>
      <div className="link-container grid grid-flow-col grid-rows-6 gap-4 mt-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-r-lg w-3xs px-3 py-2 
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
          className="group flex items-center gap-3 rounded-r-lg w-3xs  px-3 py-2
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

        {/* <Link
          href="/budgets"
          className="group flex items-center gap-3 rounded-r-lg w-3xs  px-3 py-2
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
        </Link> */}

        <Link
          href="/savings"
          className="group flex items-center gap-3 rounded-r-lg w-3xs  px-3 py-2
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
          className="group flex items-center gap-3 rounded-r-lg w-3xs  px-3 py-2
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
