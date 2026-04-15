import type { GetVehicleResponse } from "../../types/vehicle.types.ts";

export interface VehiclesTableContentProps {
  vehicles: GetVehicleResponse[];
}

export interface VehiclesTablePaginationProps {
  pageSize: number;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}