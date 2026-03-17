import React from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import { SavingsGoalCard } from "./SavingsGoalCard";
import { Button } from "@/components/ui/button";

const savingsMock = [
  {
    name: "Emergency Fund",
    saved: 3200,
    goal: 5000,
    progress: 24,
    icon: "heart",
    color: "#ef4444",
  },
  {
    name: "Vacation Trip",
    saved: 1800,
    goal: 3000,
    progress: 60,
    icon: "map-pin",
    color: "#3b82f6",
  },
  {
    name: "New Laptop",
    saved: 900,
    goal: 2000,
    progress: 45,
    icon: "laptop",
    color: "#10b981",
  },
  {
    name: "Gaming Console",
    saved: 250,
    goal: 6000,
    progress: 42,
    icon: "gamepad-2",
    color: "#8b5cf6",
  },
  {
    name: "Car Down Payment",
    saved: 7200,
    goal: 15000,
    progress: 48,
    icon: "car",
    color: "#f97316",
  },
];

const SavingsContainer = () => {
  return (
    <>
      <div className="savings-containers">
        <div className="savings-header w-[80%] h-65 mt-8 bg-gray-10 border border-gray-100 rounded-xl p-4 shadow-sm">
          <h3 className="font-bold p-2 text-xl">Summary</h3>
          <div className="progress-container px-4 py-2 w-[100%] mx-auto h-40 bg-white border border-gray-200 rounded-lg shadow-sm">
            <Field className="w-full max-full">
              <FieldLabel htmlFor="progress-upload">
                <div className="savings-summary flex gap-10 text-lg w-full h-10 mt-4">
                  <div className="saved-container flex gap-2 justify-between w-[50%]">
                    <p>Total Saved</p>
                    <p>$6,348</p>
                  </div>
                  <p>|</p>
                  <div className="planned-container flex gap-2 justify-between w-[50%]">
                    <p>Overall Progress</p>
                    <span className="ml-auto">66%</span>
                  </div>
                </div>
                
              </FieldLabel>
              <Progress value={66} id="progress-upload" />
              <div className="goal-info flex gap-4 text-2xl">
                <p>$6,348</p>
                <p>$8,000</p>
              </div>
            </Field>{" "}
          </div>
          
        </div>

        <div className="savings-info mt-14 w-[80%]">
          <div className="saving-header flex gap-4 justify-between">
            <h3 className="text-xl" >Monthly Goals</h3>
            <Button className="p-4 text-lg">
              <Plus size={20} /> Add Goal
            </Button>
          </div>

          <div className="savings-data mt-8">
            {/* reenderizar el commponente SavingsGoalCard*/}
            <SavingsGoalCard data={savingsMock}></SavingsGoalCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingsContainer;
