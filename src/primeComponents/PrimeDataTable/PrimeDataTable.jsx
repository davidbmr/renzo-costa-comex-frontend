import { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataTable as PrimeReactDataTable } from "primereact/datatable";

export const PrimeDataTable = ({
  columns,
  data,
  onUpdate,
  onDelete,
  onEye,
  isEyeDisabled,
  customButtonProps,
  isPaginator = true,
  dataKey = "id",
}) => {
  const [dataTable, setDataTable] = useState(data);
  const [rowsPerPageOptions, setRowsPerPageOptions] = useState([5, 10, 25]);

  //Nueva funcionalidad
  const [selectedProducts, setSelectedProducts] = useState(null);

  useEffect(() => {
    setDataTable(data);

    if (data && data.length > 25) {
      setRowsPerPageOptions((prev) => {
        const totalRowsOption = data.length;
        return prev.includes(totalRowsOption)
          ? prev
          : [...prev, totalRowsOption];
      });
    }
  }, [data]);

  const buttonSuccess = (rowData) => (
    <Button
      className="p-button-info p-button-rounded"
      style={{ width: "40px", height: "40px" }}
      type="button"
      icon="pi pi-pencil"
      onClick={() => onUpdate(rowData)}
    />
  );

  const buttonDecline = (rowData) => (
    <Button
      className="p-button-danger p-button-rounded"
      style={{ width: "40px", height: "40px" }}
      type="button"
      icon="pi pi-ban"
      onClick={() => onDelete(rowData.id)}
    />
  );

  const buttonEye = (rowData) => (
    <Button
      className="p-button-help p-button-rounded"
      style={{ width: "40px", height: "40px" }}
      type="button"
      icon="pi pi-eye"
      onClick={() => onEye(rowData)}
      disabled={isEyeDisabled ? isEyeDisabled(rowData) : false}
    />
  );

  const customButton = (rowData) => (
    <Button
      className="p-button-rounded"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: customButtonProps?.background || "gray",
      }}
      type="button"
      icon={customButtonProps?.icon || "pi pi-cog"}
      onClick={() => customButtonProps?.onClick(rowData)}
    />
  );
  console.log(selectedProducts);

  return (
    <PrimeReactDataTable
      value={dataTable}
      paginator={isPaginator}
      rows={5}
      rowsPerPageOptions={rowsPerPageOptions}
      dataKey={dataKey}
      emptyMessage="No se han encontrado resultados."
      scrollable
      selection={selectedProducts}
      onSelectionChange={(e) => setSelectedProducts(e.value)}
    >
      <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
      {columns &&
        columns.map((column) => (
          <Column
            key={`${column.campo}`}
            sortable
            field={column.campo}
            body={column.body}
            header={column.nombre}
            style={{ minWidth: "7.5rem", fontSize: "15px" }}
          />
        ))}

      {onUpdate && <Column style={{ width: "5rem" }} body={buttonSuccess} />}
      {onEye && <Column style={{ width: "5rem" }} body={buttonEye} />}
      {onDelete && <Column style={{ width: "5rem" }} body={buttonDecline} />}
      {customButtonProps && (
        <Column style={{ width: "5rem" }} body={customButton} />
      )}
    </PrimeReactDataTable>
  );
};
