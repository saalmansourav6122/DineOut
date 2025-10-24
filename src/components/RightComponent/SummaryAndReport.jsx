import React from "react";
import OrderSummary from "./OrderSummary";
import OrderReports from "./OrderReports";

function SummaryAndReport({ order, setOrder }) {
  return (
    <>
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <div>
          <OrderSummary order={order} />
        </div>
        <div>
          <OrderReports order={order} setOrder={ setOrder} />
        </div>
      </div>
    </>
  );
}

export default SummaryAndReport;
