import React, { useState } from 'react'
import db from '../db/reglas.json'

export const Rules = () => {
    const [rule, setRule] = useState(0)
  return (
    <div className='rules'>
        <p>{db.reglas[rule].text}</p>
        {
            rule===0 ?
            <img src="https://i.pinimg.com/originals/cd/f0/73/cdf0733558b541da82d9d24c0bcb0c2f.gif" alt="" /> : ""
        }
        {rule===0 ?
        <button onClick={()=>setRule(1)} className='app-btn next'>Siguiente</button>
        :
        <a href="/game" className='app-btn game'>Empezar</a>

    }
    </div>
  )
}
