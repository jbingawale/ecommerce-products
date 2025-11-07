import React, { useMemo, useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import {
  useGetProductsQuery,
} from "../services/productSlice";

ModuleRegistry.registerModules([AllCommunityModule]);

// Create new GridExample component
const GridExample = () => {
    const {
      data: rowData,
      isLoading,
      isFetching,
      isError,
      error,
    } = useGetProductsQuery();


  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    {
      field: "id",
      hide: true,
    },
    { field: "productName" },
    { field: "price" },
    { field: "category" },
    { field: "stockStatus" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  });

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className="ag-theme-quartz product-table"
      style={{ height: 500, width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default GridExample;
