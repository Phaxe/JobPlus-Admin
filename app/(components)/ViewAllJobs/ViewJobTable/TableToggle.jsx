import Image from 'next/image'
import React from 'react'
// import Switcher from "Switcher.svg"
function TableToggle() {
  return (
    <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0 " >
      <Image
          alt="actions-icon"
          src="/Switcher.svg"
          width={40}
          height={15}
          className="object-cover flex items-center justify-center"
        />
  </td>
  )
}

export default TableToggle