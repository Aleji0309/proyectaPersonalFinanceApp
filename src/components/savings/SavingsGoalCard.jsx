import React from "react";
import { ProgressRing } from "./ProgressRing";

export const SavingsGoalCard = ({ data }) => {
  return (
    <>
      <div className="data-saving-container grid grid-cols-2 gap-6 w-full">
        {data.map((dataSaving) => {
          return (
            <>
              <div
                key={dataSaving.name}
                className="saving-card flex items-center justify-between bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <ProgressRing
                  progress={dataSaving.progress}
                  icon={dataSaving.icon}
                  color={dataSaving.color}
                />

                <div className="flex flex-col flex-1 ml-4">
                  <p className="font-medium text-gray-800">{dataSaving.name}</p>

                  <div className="flex gap-2 text-gray-600 text-sm items-center justify-between">
                    <span>${dataSaving.saved}</span>
                    <span>/</span>
                    <span>${dataSaving.goal}</span>
                    <p className="font-semibold text-gray-700 text-lg">
                      {dataSaving.progress}%
                    </p>
                  </div>
                  <span className="border-b-2 border-gray-300 outline-none"></span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
