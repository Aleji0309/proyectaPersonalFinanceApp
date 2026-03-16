import React from "react";
import { ProgressRing } from "./ProgressRing";

export const SavingsGoalCard = ({ data }) => {
  return (
    <>
      <div>
        
        {data.map((dataSaving) => {
          return (
            <div key={dataSaving.name}>
              <div className="data-saving-container w-2xl">
              <div className="base-circle"> {dataSaving.name}</div>
              <div className="flex gap-20">
                <div className="amount-container flex gap-2 justify-center items-center ">
                <div className="saved-amount">{dataSaving.saved}</div> <p>/</p>
                <div className="saved-amount">{dataSaving.goal}</div>
                </div>
               
                 <ProgressRing
                  progress={dataSaving.progress}
                  icon={dataSaving.icon}
                  color={dataSaving.color}
                ></ProgressRing>
              </div>

                
               

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
