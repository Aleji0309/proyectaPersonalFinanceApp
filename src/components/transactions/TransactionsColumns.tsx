"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Timestamp } from "next/dist/server/lib/cache-handlers/types"


export type Transaction = {
    transactionId: number
    companyName: string
    transactionAmount: number
    transactionStatus: string
    transactionDate: Date
    trasactionTime: Timestamp
}

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "transactionId",
        header: "Transaction Number"
    },

    {
        accessorKey: "companyName",
        header: "Company Name"
    },

    {
        accessorKey: "transactionAmount",
        header: "Amount"
    },

    {
        accessorKey: "transactionStatus",
        header: "Status"
    },

    {
        accessorKey: "transactionDate",
        header: "Date"
    },

    {
        accessorKey: "transactionTime",
        header: "Time"
    }

]

