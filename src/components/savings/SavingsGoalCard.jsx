import React from "react";

export const SavingsGoalCard = ({ data }) => {
  return (
    <>
      <div>
        <p>test</p>
        {data.map((dataSaving) => {
          return (
            <div key={dataSaving}>
                <div className="data-saving-container">
              <div className="base-circle"> {dataSaving.name}</div>
              <div className="saving-progress"></div>

                </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
