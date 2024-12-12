import React from "react";
import { Button } from "primereact/button";
import ExcelJS from "exceljs";

interface DataItem {
  [key: string]: any;
}

interface Mapping {
  [key: string]: string; 
}

interface GenerateExcelButtonProps {
  data: DataItem[];
  mapping: Mapping; 
  sheetName: string; 
}

const GenerateExcelButton: React.FC<GenerateExcelButtonProps> = ({
  data,
  mapping,
  sheetName,
}) => {
  const exportToExcel = async (dataToExport: any[], filename: string): Promise<void> => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(sheetName);

    const headerStyle = {
      fill: {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "232C3D" },
      },
      font: {
        color: { argb: "FFFFFFFF" },
        bold: true,
        size: 13,
      },
      alignment: {
        vertical: "middle",
        horizontal: "center",
      },
      border: {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      },
    };

 
    const headers = Object.entries(mapping);

 
    headers.forEach(([key, headerName], index) => {
      const cell = sheet.getCell(1, index + 1);
      cell.value = headerName;
      cell.fill = headerStyle.fill;
      cell.font = headerStyle.font;
      cell.alignment = headerStyle.alignment;
      cell.border = headerStyle.border;

      sheet.getColumn(index + 1).width = headerName.length + 12;
    });

    // Rellenar los datos en las filas
    dataToExport.forEach((item, rowIndex) => {
      headers.forEach(([key], colIndex) => {
        const cell = sheet.getCell(rowIndex + 2, colIndex + 1);
        cell.value = item[key] ?? ""; // Usar la clave original del JSON
        cell.border = headerStyle.border;
        cell.alignment = {
          vertical: "middle",
          horizontal: "center",
        };
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.xlsx`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const generateFileName = (): string => {
    const currentDate = new Date();
    return `Export_${currentDate.toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const handleExportClick = (): void => {
    const filename = generateFileName();
    exportToExcel(data, filename);
  };

  return (
    <Button
      label="DESCARGAR EXCEL"
      icon="pi pi-file-excel"
      className="p-button-sm p-button-success mr-2"
      onClick={handleExportClick}
      style={{backgroundColor:"#ECEFF1"}}
    />
  );
};

export default GenerateExcelButton;
