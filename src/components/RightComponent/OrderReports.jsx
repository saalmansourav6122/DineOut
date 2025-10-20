import React from "react";
import OrderReportHeader from "./OrderReportHeader";
import OrderReportTable from "./OrderReportTable";

function OrderReports({ order, setOrder }) {
  return (
    <>
      <OrderReportHeader />
      <OrderReportTable order={order} setOrder={ setOrder}/>
    </>
  );
}

export default OrderReports;
