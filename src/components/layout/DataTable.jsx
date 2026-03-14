import {
  Hotel,
  ArrowRightLeft,
  CircleDollarSign,
  RefreshCcw,
  CalendarDays,
  Clock4,
} from "lucide-react";

export const DataTable = ({
  data,
  dataHeader,
}) => {
  return (
    <div class="table_component" role="region" tabindex="0">
      <table>
        <thead>
          {dataHeader.map((dataInfoH) => {
            return (
              <tr key={dataInfoH}>
                <th>
                  <div className="flex items-center gap-2">
                    <Hotel size={18} />
                    {dataInfoH.firstRow}
                  </div>
                </th>

                <th>
                  <div className="flex items-center gap-2">
                    <ArrowRightLeft size={18} />
                    {dataInfoH.secondRow}
                  </div>
                </th>

                <th>
                  <div className="flex items-center gap-2">
                    <CircleDollarSign size={18} />
                    {dataInfoH.thirdRow}
                  </div>
                </th>

                <th>
                  <div className="flex items-center gap-2">
                    <RefreshCcw size={18} />
                    {dataInfoH.fourthRow}
                  </div>
                </th>

                <th>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} />
                    {dataInfoH.fifthRow}
                  </div>
                </th>

                <th>
                  <div className="flex items-center gap-2">
                    <Clock4 size={18} />
                    {dataInfoH.sixthRow}
                  </div>
                </th>
              </tr>
            );
          })}
        </thead>

        <tbody>
          {data.map((dataInfo) => {
            console.log("''''''''''''''''''''''");
            console.log(dataInfo);
            return (
              <tr key={data}>
                <td>{dataInfo.firstColumn}</td>
                <td>{dataInfo.secondColumn}</td>
                <td>{dataInfo.thirdColumn}</td>
                <td>{dataInfo.fourthColumn}</td>
                <td>{dataInfo.fifthColumn}</td>
                <td>{dataInfo.sixthColumn}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
