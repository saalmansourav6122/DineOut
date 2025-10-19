import React from "react";
import OrderReportHeader from "./OrderReportHeader";
import OrderReportTable from "./OrderReportTable";

function OrderReports({ order }) {
  return (
    <>
      <OrderReportHeader />
      <OrderReportTable order={order}/>
    </>
  );
}

export default OrderReports;
