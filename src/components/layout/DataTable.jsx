import {
  Hotel,
  ArrowRightLeft,
  CircleDollarSign,
  RefreshCcw,
  CalendarDays,
  Clock4,
} from "lucide-react";
import { transactionsMock } from "../transactions/TransactionsContainer";

export const DataTable = ({
  companyTable,
  transactionIdTable,
  amountTable,
  statusTable,
  dateTable,
  timeTable,
  // companyData,
  // transactionIdData,
  // amountData,
  // statusData,
  // dateData,
  // timeData,
}) => {
  console.log("test de ale mock ");
  console.log(transactionsMock);

  return (
    <div class="table_component" role="region" tabindex="0">
      <table>
        <thead>
          <tr>
            <th>
              <div className="flex items-center gap-2">
                <Hotel size={18} />
                {companyTable}
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <ArrowRightLeft size={18} />
                {transactionIdTable}
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <CircleDollarSign size={18} />
                {amountTable}
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <RefreshCcw size={18} />
                {statusTable}
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                {dateTable}
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <Clock4 size={18} />
                {timeTable}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactionsMock.map((transaction) => {
            return (
              <tr key={transaction.transactionId}>
                <td>{transaction.companyData}</td>
                <td>{transaction.transactionIdData}</td>
                <td>{transaction.amountData}</td>
                <td>{transaction.statusData}</td>
                <td>{transaction.dateData}</td>
                <td>{transaction.timeData}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
