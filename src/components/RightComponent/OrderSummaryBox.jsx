import React from "react";

function OrderSummaryBox({ order }) {
  const orderNumber = order?.length || 0;

  const pendingNumber = order.filter(
    (value) => value.status === "pending"
  ).length;

  const deliveredNumber = order.filter(
    (value) => value.status === "delivered"
  ).length;

  return (
    <>
      {/* Total Orders  */}
      <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
        <div className="text-5xl font-bold text-yellow-500 mb-2">
          {orderNumber}
        </div>
        <div className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
          Total Order
        </div>
      </div>
      {/* Pending Orders */}
      <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
        <div className="text-5xl font-bold text-red-500 mb-2">
          {pendingNumber}
        </div>
        <div className="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
          Pending
        </div>
      </div>
      {/* Delivered Orders */}
      <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
        <div className="text-5xl font-bold text-green-500 mb-2">{ deliveredNumber}</div>
        <div className="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
          Delivered
        </div>
      </div>
    </>
  );
}

export default OrderSummaryBox;
