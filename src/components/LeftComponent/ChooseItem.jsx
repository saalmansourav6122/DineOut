import React from 'react'

import AddSvg from "../../svg/AddSvg";
import RemoveSvg from "../../svg/RemoveSvg";
import { icons } from "../../data/icons";
function ChooseItem({products, handleClickToggle, toggle}) {
  return (
      <>
           <div className="max-h-[250px] overflow-y-auto scrollbar-thin">
            {/* Item  */}
            {products.map((product, id) => (
              <div
                key={id}
                className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300 "
              >
                <div className="flex items-center">
                  <div className="w-12 h-12   flex items-center justify-center mr-3">
                    {icons[product.slug] || icons["leomonade"]}
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-xs text-gray-400">{product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleClickToggle(product)}
                  className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  {toggle[product.id] ? <RemoveSvg /> : <AddSvg />}
                </button>
              </div>
            ))}
          </div>
    </>
  )
}

export default ChooseItem