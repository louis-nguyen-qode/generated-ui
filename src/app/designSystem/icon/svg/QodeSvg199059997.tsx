// id='1990:59997'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg199059997: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "84",
    height: "84",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="42"
        cy="42"
        r="40.5"
        stroke="url(#paint0_linear_1990_59997)"
        stroke-width="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1990_59997"
          x1="42"
          y1="0"
          x2="42"
          y2="84"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2ECDFF" />
          <stop offset="1" stop-color="#0E8FEA" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg199059997
