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
import { TransactionsTable } from "./DataTable";

export const DataContainer = ({
  dataTitle,
  dataButton1,
  dattaButton2,
  dateFilter, 
  statusFilter, 
  transactionFilter
}) => {
  return (
    <>
      <div className="transactions-container shadow-box h-80">
        <div className="transactions-container-header flex justify-between items-center">
          <h3 className="text-xl font-bold">{dataTitle}</h3>
          <div className="flex gap-2">
            <Button className="hover:bg-chart-2">
              <FileOutput size={20} />
              {dataButton1}
            </Button>
            <Button className="bg-chart-5">
              <Plus size={20} /> {dattaButton2}
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
              <SelectItem value="date">{dateFilter}</SelectItem>
              <SelectItem value="status">{statusFilter}</SelectItem>
              <SelectItem value="transactionNumber">
               {transactionFilter}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>
    </>
  );
};
