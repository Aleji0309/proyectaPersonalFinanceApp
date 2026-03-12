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
import { DataTable } from "../layout/DataTable";


 export const transactionsMock = [
  {
    companyData: "Intercon",
    transactionData: 1245,
    amountData: 3500,
    statusData: "pending",
    dateData: "2023-08-23",
    timeData: "10:00",
  },
  {
    companyData: "Nu Bank",
    transactionData: 1246,
    amountData: 820,
    statusData: "completed",
    dateData: "2023-08-24",
    timeData: "12:15",
  },
  {
    companyData: "Amazon",
    transactionData: 1247,
    amountData: 1299,
    statusData: "completed",
    dateData: "2023-08-24",
    timeData: "14:20",
  },
  {
    companyData: "Netflix",
    transactionData: 1248,
    amountData: 249,
    statusData: "pending",
    dateData: "2023-08-25",
    timeData: "09:30",
  },
  {
    companyData: "Spotify",
    transactionData: 1249,
    amountData: 129,
    statusData: "completed",
    dateData: "2023-08-25",
    timeData: "11:45",
  },
  {
    companyData: "Apple",
    transactionData: 1250,
    amountData: 2200,
    statusData: "completed",
    dateData: "2023-08-26",
    timeData: "16:10",
  },
  {
    companyData: "Uber",
    transactionData: 1251,
    amountData: 180,
    statusData: "pending",
    dateData: "2023-08-26",
    timeData: "18:05",
  },
  {
    companyData: "Airbnb",
    transactionData: 1252,
    amountData: 4500,
    statusData: "completed",
    dateData: "2023-08-27",
    timeData: "13:00",
  },
  {
    companyData: "Telmex",
    transactionData: 1253,
    amountData: 899,
    statusData: "pending",
    dateData: "2023-08-27",
    timeData: "08:20",
  },
  {
    companyData: "CFE",
    transactionData: 1254,
    amountData: 670,
    statusData: "completed",
    dateData: "2023-08-28",
    timeData: "17:40",
  },
];

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
              <Funnel size={18} />
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
          <DataTable
            companyTable={"Company Name"}
            transactionTable={"Transaction ID"}
            amountTable={"Amount"}
            statusTable={"Status"}
            dateTable={"Date"}
            timeTable={"Time"}
          ></DataTable>

        </div>
      </div>
    </>
  );
};
