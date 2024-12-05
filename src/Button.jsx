import React from 'react'

function Button({text, classname, onClick}) {
  return (
    <div>
         <button className={`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${classname}`} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button   