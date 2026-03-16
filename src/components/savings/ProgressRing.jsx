import React from "react";
import { Heart, MapPin, Laptop, Gamepad2, Car } from "lucide-react";

const iconMap = {
  heart: Heart,
  "map-pin": MapPin,
  laptop: Laptop,
  "gamepad-2": Gamepad2,
  car: Car
};
export const ProgressRing = ({ progress, icon, color}) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;
const Icon = iconMap[icon];
  return (
    <div className="relative w-20 h-20">

      <svg width="80" height="80" className="rotate-[-90deg]">

        {/* círculo base */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="6"
          fill="transparent"
        />

        {/* círculo progreso */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={color}
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />

      </svg>

      {/* icono centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Icon && <Icon size={20} />}
      </div>

    </div>
  );
};