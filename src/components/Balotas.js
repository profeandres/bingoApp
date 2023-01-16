import React from 'react'

export const Balotas = ({balotas}) => {
  const {id,out} = balotas
    return (
    <div className={out===true ? "balotas on": "balotas off"}>{id}</div>
  )
}
