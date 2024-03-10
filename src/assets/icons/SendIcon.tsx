import React from 'react'

export const SendIcon = ({color}:{color?:string}) => {
  return (
    <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha"
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={25}
    >
      <path fill="#D9D9D9" d="M0 0.5H24V24.5H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M3 20.5v-16l19 8-19 8zm2-3l11.85-5L5 7.5V11l6 1.5L5 14v3.5z"
        fill="#fff"
      />
    </g>
  </svg>
  )
}
