import type { UpsertVehicleRequest, Vehicle } from "../types/vehicle.types.ts";

export const toUpsertVehicleRequest = (vehicle: Vehicle): UpsertVehicleRequest => {
  return {
    make: vehicle.make,
    model: vehicle.model,
    registrationNumber: vehicle.registrationNumber,
    mileage: vehicle.mileage ? Number(vehicle.mileage) : undefined,
    lastServiceMileage: vehicle.lastServiceMileage ? Number(vehicle.lastServiceMileage) : undefined,
    serviceIntervalMileage: vehicle.serviceIntervalMileage ? Number(vehicle.serviceIntervalMileage) : undefined,
  };
};