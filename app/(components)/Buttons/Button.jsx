import React from 'react'

const Button = ({classProps,buttonText,onClick,disabled}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classProps}>{buttonText}</button>
  )
}

export default Button