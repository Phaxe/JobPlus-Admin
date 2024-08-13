import Image from 'next/image'
import React, { useState } from 'react'
// import Switcher from "Switcher.svg"
function TableToggle() {
  const [openToggle,setOpenToggle]  = useState(true)
  const handleToggle = () =>{
    setOpenToggle(!openToggle)
  }
  return (
    <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0 " >
  {openToggle ? (
        <Image
        onClick={handleToggle}
        alt="actions-icon"
        src="/offSwitcher.svg"
        width={40}
        height={15}
        className="object-cover flex items-center justify-center"
      />
  ):
  (
    <Image
    onClick={handleToggle}
    alt="actions-icon"
    src="/Switcher.svg"
    width={40}
    height={15}
    className="object-cover flex items-center justify-center"
  />
  )}
  </td>
  )
}

export default TableToggle