export interface Vehicle {
  make?: string;
  model?: string;
  registrationNumber?: string;
  mileage?: string;
  lastServiceMileage?: string;
  serviceIntervalMileage?: string;
}

export interface VehicleErrors {
  make?: string;
  model?: string;
  registrationNumber?: string;
  mileage?: string;
  lastServiceMileage?: string;
  serviceIntervalMileage?: string;
}

export interface UpsertVehicleRequest {
  id?: string;
  make?: string;
  model?: string;
  registrationNumber?: string;
  mileage?: number;
  lastServiceMileage?: number;
  serviceIntervalMileage?: number;
}

export interface UpsertVehicleResponse {
  id: string;
}

export interface GetVehicleResponse {
  id: string;
  make: string;
  model: string;
  registrationNumber: string;
  mileage: number;
  lastServiceMileage: string;
  serviceIntervalMileage: string;
  status?: string;
}
