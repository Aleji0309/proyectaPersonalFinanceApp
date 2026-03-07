import { Hotel, ArrowRightLeft, CircleDollarSign, RefreshCcw, CalendarDays, Clock4 } from "lucide-react";

export const TransactionsTable = ({ company, transaction , amout, statusTransaction, date, timeTransaction}) => {
  return (
    <div class="table_component" role="region" tabindex="0">
      <table>
        <thead>
          <tr>
            <th>
              <div className="flex items-center gap-2">
                <Hotel size={18} />
                Company Name
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <ArrowRightLeft size={18} />
                Transaction Number
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <CircleDollarSign size={18} />
                Amount
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <RefreshCcw size={18} />
                Status
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                Date
              </div>
            </th>

            <th>
              <div className="flex items-center gap-2">
                <Clock4 size={18} />
                Time
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{company}</td>
            <td>{transaction}</td>
            <td>{amout}</td>
            <td>{statusTransaction}</td>
            <td>{date}</td>
            <td>{timeTransaction}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
