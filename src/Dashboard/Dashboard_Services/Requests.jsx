import React from 'react'
import { useOutletContext } from 'react-router'
import { IoWarning } from 'react-icons/io5'
function Requests() {
  const { requests } = useOutletContext()
  if (!requests) return null
  if (requests.length === 0)
    return (
        <div className=" flex justify-center items-center gap-1 text-2xl text-gray pt-8">
            <IoWarning />
            No Request for the moment
        </div>
    );
  return (
    <div>
      

    </div>
  )
}

export default Requests