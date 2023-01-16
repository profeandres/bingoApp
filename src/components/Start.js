import React, { useState } from 'react'

export const Start = () => {
    const [start, setStart] = useState(false)
    return (
    <>
    {
        !start ?
        <a href='/rules' className='app-btn-empezar' onClick={()=>{
            setStart(true)
            }}>
        Start
    </a>:""
    }
    </>
  )
}
