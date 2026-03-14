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
    firstColumn: "Intercon",
    secondColumn: 1245,
    thirdColumn: 3500,
    fourthColumn: "pending",
    fifthColumn: "2023-08-23",
    sixthColumn: "10:00",
  },
  {
    firstColumn: "Nu Bank",
    secondColumn: 1246,
    thirdColumn: 820,
    fourthColumn: "completed",
    fifthColumn: "2023-08-24",
    sixthColumn: "12:15",
  },
  {
    firstColumn: "Amazon",
    secondColumn: 1247,
    thirdColumn: 1299,
    fourthColumn: "completed",
    fifthColumn: "2023-08-24",
    sixthColumn: "14:20",
  },
  {
    firstColumn: "Netflix",
    secondColumn: 1248,
    thirdColumn: 249,
    fourthColumn: "pending",
    fifthColumn: "2023-08-25",
    sixthColumn: "09:30",
  },
  {
    firstColumn: "Spotify",
    secondColumn: 1249,
    thirdColumn: 129,
    fourthColumn: "completed",
    fifthColumn: "2023-08-25",
    sixthColumn: "11:45",
  },
  {
    firstColumn: "Apple",
    secondColumn: 1250,
    thirdColumn: 2200,
    fourthColumn: "completed",
    fifthColumn: "2023-08-26",
    sixthColumn: "16:10",
  },
  {
    firstColumn: "Uber",
    secondColumn: 1251,
    thirdColumn: 180,
    fourthColumn: "pending",
    fifthColumn: "2023-08-26",
    sixthColumn: "18:05",
  },
  {
    firstColumn: "Airbnb",
    secondColumn: 1252,
    thirdColumn: 4500,
    fourthColumn: "completed",
    fifthColumn: "2023-08-27",
    sixthColumn: "13:00",
  },
  {
    firstColumn: "Telmex",
    secondColumn: 1253,
    thirdColumn: 899,
    fourthColumn: "pending",
    fifthColumn: "2023-08-27",
    sixthColumn: "08:20",
  },
  {
    firstColumn: "CFE",
    secondColumn: 1254,
    thirdColumn: 670,
    fourthColumn: "completed",
    fifthColumn: "2023-08-28",
    sixthColumn: "17:40",
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
            data={transactionsMock}
            companyTable={"Company Name"}
            transactionIdTable={"Transaction ID"}
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
