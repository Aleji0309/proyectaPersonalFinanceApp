import React from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import { SavingsGoalCard } from "./SavingsGoalCard";

const savingsMock = [
  {
    name: "Emergency Fund",
    saved: 3200,
    goal: 5000,
    progress: 64,
    icon: "heart",
    color: "#ef4444"
  },
  {
    name: "Vacation Trip",
    saved: 1800,
    goal: 3000,
    progress: 60,
    icon: "map-pin",
    color: "#3b82f6"
  },
  {
    name: "New Laptop",
    saved: 900,
    goal: 2000,
    progress: 45,
    icon: "laptop",
    color: "#10b981"
  },
  {
    name: "Gaming Console",
    saved: 250,
    goal: 600,
    progress: 42,
    icon: "gamepad-2",
    color: "#8b5cf6"
  },
  {
    name: "Car Down Payment",
    saved: 7200,
    goal: 15000,
    progress: 48,
    icon: "car",
    color: "#f97316"
  }
];

const SavingsContainer = () => {
  return (
    <>
      <div className="savings-containers bg-amber-300">
        <div className="savings-header">
          <h3>Goals</h3>
          <div className="progress-container">
            <Field className="w-full max-w-sm">
              <FieldLabel htmlFor="progress-upload">
                <span>Upload progress</span>
                <span className="ml-auto">66%</span>
              </FieldLabel>
              <Progress value={66} id="progress-upload" />
            </Field>{" "}
          </div>
          <div className="savings-summary flex gap-4">
            <div className="saved-container">
              <p>Saved</p>
              <p>$6,348</p>
            </div>
            <div className="planned-container">
              <p>Planned</p>
              <p>$8000</p>
            </div>
          </div>

          <div className="savings-info">
            <div className="saving-header flex">
              <h3>Monthly Goal</h3>
              <Plus size={20} />
            </div>

            <div className="savings-data">
                {/* reenderizar el commponente SavingsGoalCard*/}
                <SavingsGoalCard
                    data={savingsMock}
                ></SavingsGoalCard>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingsContainer;
