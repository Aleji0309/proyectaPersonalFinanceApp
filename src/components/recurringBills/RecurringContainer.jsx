import React from "react";
import { DataTable } from "../layout/DataTable";

const RecurringContainer = () => {
  return (
    <>
      <div className="recurring-container">
        <DataTable
          companyTable={"Service Name"}
          transactionTable={"Transaction ID"}
          amountTable={"Amount"}
          statusTable={"Status"}
          dateTable={"Date"}
          timeTable={"Time"}
          companyData={"Netflix"}
          transactionData={1245}
          amoutData={3500}
          statusData={"pending"}
          dateData={"2023-08-23"}
          timeData={1000}
        ></DataTable>
      </div>
    </>
  );
};

export default RecurringContainer;
