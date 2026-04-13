import React, { useState } from "react";
import type { InputProps } from "./Input.types.ts";
import { BLANK_STRING } from "../../shared/constants/constants.ts";

export const Input: React.FC<InputProps> = ({
                                              label,
                                              placeholder,
                                              value,
                                              errorMessage,
                                              setValue,
                                              formatFn,
                                              sanitizeFn,
                                            }) => {
  const [isFocused, setIsFocused] = useState(false);
  const finalValue = value ?? BLANK_STRING;
  const displayValue = formatFn ? formatFn(finalValue) : (finalValue);
  return (
    <div className="relative w-fit tracking-tight">
      <span
        className={`
          flex flex-row gap-x-1 absolute left-3 -top-[0.3rem] px-1 bg-white text-[0.7rem] leading-none
          ${
            isFocused
              ? errorMessage
                ? "text-red-600 font-medium"
                : "text-emerald-500 font-medium"
              : errorMessage
                ? "text-red-600 font-light"
                : "text-black font-light"
          }
        `}
      >
        <p>{label}</p>
        <p className="text-red-600 pt-[0.09rem] text-[0.8rem]">*</p>
      </span>
      <input
        name={label}
        value={displayValue}
        placeholder={isFocused ? undefined : placeholder}
        autoComplete="off"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          const targetValue = e.target.value;
          const rawValue = sanitizeFn ? sanitizeFn(targetValue) : targetValue;
          setValue(rawValue);
        }}
        className={`
          border-[0.1rem] rounded-md py-[0.65rem] w-56 px-3 focus:border-transparent
          ${!errorMessage ? "border-gray-300 focus:ring-emerald-400" : "border-red-600 focus:ring-red-600"} 
          focus:outline-none focus:ring-2  
          text-[0.85rem] font-light tracking-tight
        `}
      />
      <p className="text-red-600 text-[0.8rem] pl-1 h-4">{errorMessage ?? BLANK_STRING}</p>
    </div>
  );
};