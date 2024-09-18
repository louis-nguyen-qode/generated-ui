// id='I275:13636;189:4468'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI275136361894468: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "216",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 216 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6381_53327)">
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H212C214.209 0 216 1.79086 216 4C216 6.20914 214.209 8 212 8H4C1.79086 8 0 6.20914 0 4Z"
          fill="url(#paint0_linear_6381_53327)"
        />
        <circle cx="130" cy="4" r="5" stroke="white" stroke-width="2" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_6381_53327"
          x1="216"
          y1="4.00018"
          x2="-1.00961e-06"
          y2="4.00012"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1677FF" />
          <stop offset="1" stop-color="#1677FF" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_6381_53327">
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H212C214.209 0 216 1.79086 216 4C216 6.20914 214.209 8 212 8H4C1.79086 8 0 6.20914 0 4Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI275136361894468
