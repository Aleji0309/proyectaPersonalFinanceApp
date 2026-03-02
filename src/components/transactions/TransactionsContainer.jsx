import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TransactionsContainer = () => {
  return (
    <>
      <div className="transactions-container mt-20 h-80">
        <div className="transactions-container-header grid grid-cols-3 grid-rows-1 gap-2">
          <h3 className="text-1xl font-bold">Transaction History</h3>
          <Button>Export File</Button>
          <Button> + New Transaction</Button>
        </div>

        <div className="transaction-container-search grid grid-cols-2 grid-rows-1 gap-2 mt-10">
          <Input
            id="input-search-transaction"
            placeholder="Example: Taxes"
          ></Input>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="transactionNumber">Transaction Number</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="transaction-container-history">

            
        </div>


      </div>
    </>
  );
};
