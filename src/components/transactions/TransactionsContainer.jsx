import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileOutput, Plus, Search, Funnel } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TransactionsTable } from "./TransactionsTable";

export const TransactionsContainer = () => {
  return (
    <>
      <div className="transactions-container shadow-box h-80">
        <div className="transactions-container-header flex justify-between items-center">
          <h3 className="text-xl font-bold">Transaction History</h3>
          <div className="flex gap-2">
            <Button className="hover:bg-chart-2">
              <FileOutput size={20} />
              Export File
            </Button>
            <Button className="bg-chart-5">
              <Plus size={20} /> New Transaction
            </Button>
          </div>
        </div>

        <div className="transaction-container-search flex gap-4 mt-6">
          <div className="relative w-64">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Input
              id="input-search-transaction"
              placeholder="Search"
              className="pl-9"
            />
          </div>

          <Select className="w-5">
            <SelectTrigger>
               <Funnel
              size={18}
            />
              <SelectValue placeholder="Filters" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="transactionNumber">
                Transaction Number
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="transaction-container-history">
          <TransactionsTable
            company={"Interconxs"}
            transaction={1245}
            amout={3500}
            statusTransaction={"pending"}
            date={"2023-08-23"}
            timeTransaction={1000}
          ></TransactionsTable>
        </div>
      </div>
    </>
  );
};
