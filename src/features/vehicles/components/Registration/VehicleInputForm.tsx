import { Input } from "../../../../ui/Input/Input.tsx";
import React from "react";
import type { VehicleInputFormProps } from "./VehicleInputForm.types.ts";
import {
  formatMileage,
  formatRegistrationNumber,
  sanitizeMileage,
  sanitizeRegistrationNumber,
} from "./vehicleInputForm.utils.ts";

export const VehicleInputForm: React.FC<VehicleInputFormProps> = ({ vehicle, setVehicle, validationErrors }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 max-w-3xl mx-auto">
        <Input
          label="Marcă"
          placeholder="Dacia"
          value={vehicle.make}
          setValue={(value: string) => setVehicle((prev) => ({ ...prev, make: value }))}
          errorMessage={validationErrors.make}
        />
        <Input
          label="Model"
          placeholder="Duster"
          value={vehicle.model}
          setValue={(value: string) => setVehicle((prev) => ({ ...prev, model: value }))}
          errorMessage={validationErrors.model}
        />
        <Input
          label="Număr de înmatriculare"
          placeholder="ABC 123"
          value={vehicle.registrationNumber}
          setValue={(value: string) =>
            setVehicle((prev) => ({ ...prev, registrationNumber: value }))
          }
          formatFn={formatRegistrationNumber}
          sanitizeFn={sanitizeRegistrationNumber}
          errorMessage={validationErrors.registrationNumber}
        />
        <Input
          label="Parcurs (km)"
          placeholder="80,000"
          value={vehicle.mileage}
          setValue={(value: string) => setVehicle((prev) => ({ ...prev, mileage: value }))}
          formatFn={formatMileage}
          sanitizeFn={sanitizeMileage}
          errorMessage={validationErrors.mileage}
        />
        <Input
          label="Parcursul la ultima revizie (km)"
          placeholder="75,000"
          value={vehicle.lastServiceMileage}
          setValue={(value: string) =>
            setVehicle((prev) => ({ ...prev, lastServiceMileage: value }))
          }
          formatFn={formatMileage}
          sanitizeFn={sanitizeMileage}
          errorMessage={validationErrors.lastServiceMileage}
        />
        <Input
          label="Intervalul pentru revizie (km)"
          placeholder="10,000"
          value={vehicle.serviceIntervalMileage}
          setValue={(value: string) =>
            setVehicle((prev) => ({ ...prev, serviceIntervalMileage: value }))
          }
          formatFn={formatMileage}
          sanitizeFn={sanitizeMileage}
          errorMessage={validationErrors.serviceIntervalMileage}
        />
      </div>
    </div>
  );
};