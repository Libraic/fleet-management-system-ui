import type { SubmitButtonProps } from "./SubmitButton.types.ts";
import React from "react";

export const SubmitButton: React.FC<SubmitButtonProps> = ({ action }) => {
  return (
    <div
      className="flex justify-center items-center w-fit bg-emerald-500 hover:bg-emerald-600 text-white rounded-md hover:cursor-pointer tracking-tight font-bold px-5 py-2"
      onClick={action}
    >
      Creează
    </div>
  );
};