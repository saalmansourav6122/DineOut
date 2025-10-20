import React from "react";

function OrderReportTable({ order, setOrder }) {
  console.log(order);
  
  const heandleDeleteOrder = (info) => {
    setOrder((prev) => 
      prev.filter((ord) => ord.orderId != info.orderId)
    )
  }
  
  return (
    <>
      <div className="bg-cardbg rounded-lg p-4">
        <div className=" block max-h-[340px] overflow-y-auto scrollbar-thin">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {order.map((info) => {
                console.log(info);

                return (
                  <tr key={info.orderId} className="border-t border-gray-700">
                    <td className="py-3">{info.orderId}</td>
                    <td className="py-3">{info.name}</td>
                    <td className="py-3">
                      {info.productsCustomer?.length || 0}
                    </td>
                    <td className="py-3">{info.amount || 0}</td>
                    <td className="py-3">
                      <span
                        className={
                          info.status === "pending"
                            ? "text-red-500"
                            : "text-green-500"
                        }
                      >
                        {info.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-3">
                      <button onClick={()=>heandleDeleteOrder(info)} className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                        Delete
                      </button>
                      <button className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                        DELIVER
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderReportTable;
