import React from 'react'

export default function page({params}) {
  return (
    <div>Details page{params.id}
    <button>Add To cart</button>
    </div>
  )
}
