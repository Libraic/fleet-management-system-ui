export interface Vehicle {
  make?: string;
  model?: string;
  registrationNumber?: string;
  mileage?: string;
}

export interface VehicleErrors {
  make?: string;
  model?: string;
  registrationNumber?: string;
  mileage?: string;
}

export interface UpsertVehicleRequest {
  id?: string;
  make?: string;
  model?: string;
  registrationNumber?: string;
  mileage?: number;
}

export interface UpsertVehicleResponse {
  id: string;
}