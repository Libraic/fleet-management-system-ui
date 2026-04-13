import type { Vehicle, VehicleErrors } from "../types/vehicle.types.ts";

export const validateVehicle = (vehicle: Vehicle): VehicleErrors => {
  const vehicleErrors: VehicleErrors = {};
  if (!vehicle.make) {
    vehicleErrors.make = "Marca este obligatorie";
  }

  if (!vehicle.model) {
    vehicleErrors.model = "Modelul este obligatoriu";
  }

  if (!vehicle.registrationNumber) {
    vehicleErrors.registrationNumber = "Numărul de înmatriculare este obligatoriu";
  }

  if (!vehicle.mileage) {
    vehicleErrors.mileage = "Parcursul este obligatoriu";
  } else if (parseInt(vehicle.mileage) < 0) {
    vehicleErrors.mileage = "Formatul parcursului este invalid";
  }

  return vehicleErrors;
}