import React, { useState } from "react";
import { Pin } from "lucide-react";

interface PinDropProps {
  onPinPlaced: (coords: { x: number; y: number }) => void;
}

const PinDrop: React.FC<PinDropProps> = ({ onPinPlaced }) => {
  const [pinActive, setPinActive] = useState(false);
  const [pinCoords, setPinCoords] = useState<{ x: number; y: number } | null>(null);

  const handleActivate = () => {
    setPinActive(!pinActive);
    setPinCoords(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pinActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const coords = { x, y };
    setPinCoords(coords);
    setPinActive(false);
    onPinPlaced(coords);
  };

  return (
    <div className="relative w-full h-full" onClick={handleClick}>
      <button
        onClick={handleActivate}
        className={`absolute top-2 right-2 z-10 p-2 rounded-full border ${
          pinActive ? "bg-[#FDBD30]" : "bg-white"
        }`}
      >
        <Pin className={`w-4 h-4 ${pinActive ? "text-white" : "text-gray-400"}`} />
      </button>

      {pinCoords && (
        <div
          className="absolute z-10 text-[#FDBD30]"
          style={{ left: pinCoords.x, top: pinCoords.y }}
        >
          <Pin className="w-4 h-4 fill-[#FDBD30]" />
        </div>
      )}
    </div>
  );
};

export default PinDrop;
