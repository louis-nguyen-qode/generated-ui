// id='189:4466'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1894466: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_189_4466)">
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H212C214.209 0 216 1.79086 216 4C216 6.20914 214.209 8 212 8H4C1.79086 8 0 6.20914 0 4Z"
          fill="url(#paint0_linear_189_4466)"
        />
        <circle cx="130" cy="4" r="5" stroke="white" stroke-width="2" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_189_4466"
          x1="1.79997e-07"
          y1="3.99997"
          x2="216"
          y2="3.99999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF0000" />
          <stop offset="0.104167" stop-color="#FFA800" />
          <stop offset="0.234375" stop-color="#FAFF00" />
          <stop offset="0.354167" stop-color="#06FF01" />
          <stop offset="0.489583" stop-color="#01FFD1" />
          <stop offset="0.609375" stop-color="#0185FF" />
          <stop offset="0.729167" stop-color="#2501FF" />
          <stop offset="0.833333" stop-color="#BD01FF" />
          <stop offset="0.901042" stop-color="#FF01C7" />
          <stop offset="0.979167" stop-color="#FF0101" />
        </linearGradient>
        <clipPath id="clip0_189_4466">
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H212C214.209 0 216 1.79086 216 4C216 6.20914 214.209 8 212 8H4C1.79086 8 0 6.20914 0 4Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg1894466
