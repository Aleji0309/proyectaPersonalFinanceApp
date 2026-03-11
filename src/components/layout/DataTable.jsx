import { Hotel, ArrowRightLeft, CircleDollarSign, RefreshCcw, CalendarDays, Clock4 } from "lucide-react";

export const DataTable = ({ companyTable, transactionTable, amountTable, statusTable, dateTable, timeTable, companyData, transactionData , amoutData, statusData, dateData, timeData}) => {
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
                {transactionTable}
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
