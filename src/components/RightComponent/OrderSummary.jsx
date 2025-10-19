import React from "react";
import OrderReports from "./OrderReports";
import OrderSummaryBox from "./OrderSummaryBox";

function OrderSummary({ order }) {
 
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <OrderSummaryBox order={order} />
      </div>
    </div>
  );
}

export default OrderSummary;
