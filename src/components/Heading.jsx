import React from 'react'

export const Heading = ({text ,className}) => {
  return (
    <h1 className={`${className}`}>{text}</h1>
  )
}


// destructure way to make and address compoent