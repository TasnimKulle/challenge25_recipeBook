import React from 'react'
import { useRouteError } from 'react-router'

export const NotFound = () => {
    const errer=useRouteError()
  return (
    <div className='flex items-center justify-center p-4 m-4'>
        <p className='text-red-600 text-2xl font-semibold'>{errer.statusText}-{errer.status}</p>
    </div>
  )
}
