import React from 'react'

export default function Arrow({color}) {
  return (
    <svg
      width="100%"
      fill="none"
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
    >
	    <path d="M2.02305 18.8818L2.00698 15.1695L11.794 15.1695L0.327603 3.70316L3.04354 0.987226L14.5099 12.4536L14.5019 2.67464L18.2222 2.68268L18.2222 18.8818L2.02305 18.8818Z" fill={color}/>
    </svg>
  )
}
