import React from 'react'
import OrderSummary from './OrderSummary'
import OrderReports from './OrderReports'

function OrderAndReport() {
  return (
   
    <>
      <div class="md:col-span-2 h-[calc(100vh_-_130px)]">
        <div>
          <OrderSummary />
        </div>
        <div>
          <OrderReports />
        </div>
      </div>
    </>
  )
}

export default OrderAndReport