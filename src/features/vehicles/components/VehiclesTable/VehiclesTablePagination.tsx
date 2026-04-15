import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import type { VehiclesTablePaginationProps } from "./VehiclesTable.types.ts";
import { DOTS } from "../../../../shared/constants/constants.ts";

const getPaginationRange = (current: number, total: number): (number | "...")[] => {
  const delta = 1;

  const range: (number | "...")[] = [];

  const left = Math.max(1, current - delta);
  const right = Math.min(total, current + delta);

  let l: number;

  // always show first page
  range.push(1);

  if (left > 2) {
    range.push(DOTS);
  }

  for (l = left; l <= right; l++) {
    if (l !== 1 && l !== total) {
      range.push(l);
    }
  }

  if (right < total - 1) {
    range.push(DOTS);
  }

  if (total > 1) {
    range.push(total);
  }

  return range;
};


export const VehiclesTablePagination: React.FC<VehiclesTablePaginationProps> = ({
                                                                                  totalPages,
                                                                                  currentPage,
                                                                                  setCurrentPage,
                                                                                }) => {
  const startingElement = currentPage * 15 + 1;
  const endingElement = Math.min(currentPage * 15 + 15, totalPages * 15);
  const totalElements = totalPages * 15;
  return (
    <div className="w-full flex flex-row justify-between items-center px-6 py-3 text-[0.75rem] tracking-tight">
      <div className="flex flex-row items-center gap-5">
        <div
          className="flex flex-row items-center text-gray-500 w-fit hover:cursor-pointer hover:text-black"
          onClick={() => {
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          <KeyboardArrowLeftIcon fontSize="small" />
          <p>Precedent</p>
        </div>
        <div className="flex items-center gap-2 text-gray-600 w-fit">
          {getPaginationRange(currentPage + 1, totalPages).map((p, idx) => {
            if (p === DOTS) {
              return (
                <span key={idx} className="px-2 text-gray-400">
                  {DOTS}
                </span>
              );
            }

            const pageNumber = p as number;

            return (
              <button
                key={idx}
                onClick={() => setCurrentPage(pageNumber - 1)}
                className={`px-3 py-1 rounded-lg border ${
                  currentPage + 1 === pageNumber
                    ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                    : "hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
        <div
          className="flex flex-row items-center text-gray-500 w-fit hover:cursor-pointer hover:text-black"
          onClick={() => {
            if (currentPage < totalPages - 1) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          <p>Următor</p>
          <KeyboardArrowRightIcon fontSize="small" />
        </div>
      </div>
      <div className="text-gray-500 select-none">
        <p>Elementele {startingElement}-{endingElement} din {totalElements}</p>
      </div>
    </div>
  );
};