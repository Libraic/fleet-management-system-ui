import type { Vehicle, VehicleErrors } from "../features/vehicles/types/vehicle.types.ts";
import { useState } from "react";
import { VehicleInputForm } from "../features/vehicles/components/Registration/VehicleInputForm.tsx";
import { VehicleInputFormHeader } from "../features/vehicles/components/Registration/VehicleInputFormHeader.tsx";
import { validateVehicle } from "../features/vehicles/validator/vehicle.validator.ts";
import { createVehicle } from "../features/vehicles/api/vehicles.api.ts";
import { useToast } from "../ui/Toast/useToast.ts";
import { handleApiError } from "../shared/api/api.utils.ts";
import type { ApiError } from "../shared/api/api.types.ts";
import { SubmitButton } from "../ui/Button/Submit/SubmitButton.tsx";
import { CancelButton } from "../ui/Button/Cancel/CancelButton.tsx";
import { useNavigate } from "react-router-dom";
import { VEHICLES } from "../routes/paths.ts";

export const VehicleRegistrationPage = () => {
  const [vehicle, setVehicle] = useState<Vehicle>({});
  const [validationErrors, setValidationErrors] = useState<VehicleErrors>({});
  const { showToast } = useToast();
  const navigate = useNavigate();

  const submitVehicle = async (vehicle: Vehicle) => {
    const validationErrors = validateVehicle(vehicle);
    if (Object.keys(validationErrors).length > 0) {
      setValidationErrors(validationErrors);
      return;
    }

    const result = await createVehicle(vehicle);

    if (!result.isOk) {
      const error = result.data as ApiError;
      handleApiError({
        error: error,
        setFieldErrors: setValidationErrors,
        showToast,
      });
      return;
    }

    setVehicle({});
    setValidationErrors({});
    navigate(VEHICLES);
  };

  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <VehicleInputFormHeader />
      <VehicleInputForm
        vehicle={vehicle}
        setVehicle={setVehicle}
        validationErrors={validationErrors}
      />
      <div className="flex justify-center items-center flex-row gap-x-10">
        <SubmitButton action={() => submitVehicle(vehicle)} label="Înregistrează"/>
        <CancelButton action={() => navigate(VEHICLES)} />
      </div>
    </div>
  );
};