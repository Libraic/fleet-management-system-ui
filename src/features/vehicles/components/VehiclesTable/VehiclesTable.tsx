import { useEffect, useState } from "react";
import type { GetVehicleResponse } from "../../types/vehicle.types.ts";
import { getVehicles } from "../../api/vehicles.api.ts";
import type { ApiError, PageResponse } from "../../../../shared/api/api.types.ts";
import { VehiclesTableHeader } from "./VehiclesTableHeader.tsx";
import { VehiclesTableContent } from "./VehiclesTableContent.tsx";
import { VehiclesTablePagination } from "./VehiclesTablePagination.tsx";
import { SubmitButton } from "../../../../ui/Button/Submit/SubmitButton.tsx";
import { useNavigate } from "react-router-dom";
import { VEHICLES_REGISTRATION } from "../../../../routes/paths.ts";
import { useToast } from "../../../../ui/Toast/useToast.ts";

export const VehiclesTable = () => {
  const [page, setPage] = useState(0);
  const [vehicles, setVehicles] = useState<GetVehicleResponse[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    const loadVehicles = async (pageNumber: number) => {
      const result = await getVehicles(pageNumber);

      if (result.isOk) {
        const data = result.data as PageResponse<GetVehicleResponse>;
        setVehicles(data.content);
        setTotalPages(data.totalPages);
      } else {
        const errorData = result.data as ApiError;
        showToast(errorData.message);
      }
    };

    loadVehicles(page).then(() => {

    });
  }, [page, showToast]);

  return (
    <div className="w-full flex items-center justify-center items-col">
      <div className="flex flex-col gap-y-5 p-6">
        <div className="flex flex-row justify-between">
          <div className="tracking-tight">
            <p className="font-bold text-[1rem]">Vehicule</p>
            <p className="text-[0.9rem]">Lista vehiculelor și parametrii acestora</p>
          </div>
          <SubmitButton
            action={() => navigate(VEHICLES_REGISTRATION)}
            label="Înregistrează Vehicul"
          />
        </div>

        <div className="bg-white shadow rounded-2xl overflow-hidden">
          <table className="min-w-full text-sm">
            <VehiclesTableHeader />
            <VehiclesTableContent vehicles={vehicles} />
          </table>
          <VehiclesTablePagination
            pageSize={15}
            totalPages={totalPages}
            currentPage={page}
            setCurrentPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};