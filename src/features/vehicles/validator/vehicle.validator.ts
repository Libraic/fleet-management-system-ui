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

  if (!vehicle.lastServiceMileage) {
    vehicleErrors.lastServiceMileage = "Parcursul la ultima revizie este obligatoriu";
  } else if (parseInt(vehicle.lastServiceMileage) < 0) {
    vehicleErrors.lastServiceMileage = "Formatul parcursului este invalid";
  }

  if (!vehicle.serviceIntervalMileage) {
    vehicleErrors.serviceIntervalMileage = "Intervalul de revizie este obligatoriu";
  } else if (parseInt(vehicle.serviceIntervalMileage) < 0) {
    vehicleErrors.serviceIntervalMileage = "Formatul parcursului este invalid";
  }

  return vehicleErrors;
}