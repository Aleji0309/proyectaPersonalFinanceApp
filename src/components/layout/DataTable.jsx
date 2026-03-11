import { Hotel, ArrowRightLeft, CircleDollarSign, RefreshCcw, CalendarDays, Clock4 } from "lucide-react";

export const TransactionsTable = ({ companyTitle,companyData, transactionData , amoutData, statusData, dateData, timeData}) => {
  return (
    <div class="table_component" role="region" tabindex="0">
      <table>
        <thead>
          <tr>
            <th>
              <div className="flex items-center gap-2">
                <Hotel size={18} />
                {companyTitle}
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
            <td>{companyData}</td>
            <td>{transactionData}</td>
            <td>{amoutData}</td>
            <td>{statusData}</td>
            <td>{dateData}</td>
            <td>{timeData}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
