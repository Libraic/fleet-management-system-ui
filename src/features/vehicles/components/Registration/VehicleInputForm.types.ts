import type { Vehicle, VehicleErrors } from "../../types/vehicle.types.ts";
import React from "react";

export interface VehicleInputFormProps {
  vehicle: Vehicle;
  setVehicle: React.Dispatch<React.SetStateAction<Vehicle>>;
  validationErrors: VehicleErrors;
}