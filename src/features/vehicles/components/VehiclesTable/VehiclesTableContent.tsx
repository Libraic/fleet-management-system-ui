import { formatMileage, formatRegistrationNumber } from "../Registration/vehicleInputForm.utils.ts";
import React from "react";
import type { VehiclesTableContentProps } from "./VehiclesTable.types.ts";

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Maintenance":
      return "bg-yellow-100 text-yellow-700";
    case "Inactive":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const VehiclesTableContent: React.FC<VehiclesTableContentProps> = ({ vehicles }) => {
  return (
    <tbody className="divide-y divide-gray-300">
    {vehicles.map((v) => (
      <tr key={v.id} className="hover:bg-emerald-50 transition cursor-pointer text-gray-600">
        <td className="px-6 py-4">{v.make}</td>
        <td className="px-6 py-4">{v.model}</td>
        <td className="px-6 py-4 ">{formatRegistrationNumber(v.registrationNumber)}</td>
        <td className="px-6 py-4">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                v.status ?? "Active",
              )}`}
            >
              {v.status ?? "Activ"}
            </span>
        </td>
        <td className="px-6 py-4">{formatMileage(v.mileage.toString())}</td>
      </tr>
    ))}
    </tbody>
  );
};