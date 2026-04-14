import React from "react";
import type { CancelButtonProps } from "./CancelButton.types.ts";

export const CancelButton: React.FC<CancelButtonProps> = ({ action, label = "Anulează" }) => {
  return (
    <div
      className="
        flex justify-center items-center w-fit
        bg-gray-200 hover:bg-gray-300
        text-gray-800
        rounded-md hover:cursor-pointer
        tracking-tight font-bold
        px-5 py-2
        transition
      "
      onClick={action}
    >
      {label}
    </div>
  );
};
