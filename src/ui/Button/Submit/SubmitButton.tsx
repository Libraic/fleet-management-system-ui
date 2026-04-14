import type { SubmitButtonProps } from "./SubmitButton.types.ts";
import React from "react";

export const SubmitButton: React.FC<SubmitButtonProps> = ({ action }) => {
  return (
    <div
      className="
        flex justify-center items-center w-fit
        bg-emerald-500 hover:bg-emerald-600 rounded-md hover:cursor-pointer
        text-white tracking-tight font-bold px-5 py-2
        transition
      "
      onClick={action}
    >
      Creează
    </div>
  );
};