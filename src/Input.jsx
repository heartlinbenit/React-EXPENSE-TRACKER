import React from 'react'

function Input({type,  name, className, onChange, placeholder}) {
  return (
    <div>
        <input type={type} name={name} className={className} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

export default Input