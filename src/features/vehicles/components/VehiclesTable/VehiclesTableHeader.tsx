export const VehiclesTableHeader = () => {
  return (
    <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500">
      <tr>
        <th className="px-6 py-3">Marca</th>
        <th className="px-6 py-3">Model</th>
        <th className="px-6 py-3">Număr de înmatriculare</th>
        <th className="px-6 py-3">Statut</th>
        <th className="px-6 py-3">Parcurs (km)</th>
      </tr>
    </thead>
  );
}