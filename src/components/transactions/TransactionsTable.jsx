import { MoveDown } from "lucide-react";

export const TransactionsTable = () => {
  return (
    <div class="table_component" role="region" tabindex="0">
      <table>
        <thead>
          <tr>
            <th className="flex gap-2">
              {" "}
              Company Name <MoveDown size={18} />
            </th>

            <th>Transaction Number</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8989</td>
            <td>$1500</td>
            <td>NU</td>
            <td>Pending</td>
            <td>2026-09-26</td>
            <td>18:00:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
