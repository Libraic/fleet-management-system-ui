import { toUpsertVehicleRequest } from "../mappers/vehicles.mapper.ts";
import type { GetVehicleResponse, UpsertVehicleResponse, Vehicle } from "../types/vehicle.types.ts";
import { api } from "../../../shared/api/axios.ts";
import type { ApiError, ApiResult, ErrorType, PageResponse } from "../../../shared/api/api.types.ts";
import { VEHICLES_BASE_ROUTE } from "./vehicles.routes.ts";
import type { AxiosError } from "axios";
import { UNKNOWN_ERROR } from "../../../shared/constants/constants.ts";

export const createVehicle = async (vehicle: Vehicle): Promise<ApiResult<UpsertVehicleResponse | ApiError>> => {
  const payload = toUpsertVehicleRequest(vehicle);
  try {
    const response = await api.post(VEHICLES_BASE_ROUTE, payload);
    return {
      isOk: true,
      data: response.data,
    };
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{
      message: string;
      type: ErrorType;
      errors: Record<string, string>;
    }>;
    const message = axiosError.response?.data?.message || UNKNOWN_ERROR;
    const type = axiosError.response?.data?.type || "GENERAL";
    const errors = axiosError.response?.data?.errors;
    return {
      isOk: false,
      data: { message, type, errors },
    };
  }
};

export const getVehicles = async (
  page: number = 0,
): Promise<ApiResult<PageResponse<GetVehicleResponse> | ApiError>> => {
  try {
    const response = await api.get(VEHICLES_BASE_ROUTE, {
      params: { page },
    });

    return {
      isOk: true,
      data: response.data,
    };
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{
      message: string;
      type: ErrorType;
      errors: Record<string, string>;
    }>;

    const message = axiosError.response?.data?.message || UNKNOWN_ERROR;
    const type = axiosError.response?.data?.type || "GENERAL";
    const errors = axiosError.response?.data?.errors;

    return {
      isOk: false,
      data: { message, type, errors },
    };
  }
};
