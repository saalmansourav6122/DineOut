import React from "react";
import OrderReportHeader from "./OrderReportHeader";


function OrderReports({ order, setOrder }) {
  return (
    <>
      <OrderReportHeader order={order} setOrder={ setOrder}/>
      
    </>
  );
}

export default OrderReports;
