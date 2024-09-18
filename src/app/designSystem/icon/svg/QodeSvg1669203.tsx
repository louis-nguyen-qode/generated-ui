// id='166:9203'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1669203: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "27",
    height: "27",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="14.1045"
        cy="14.0015"
        r="13"
        stroke="url(#paint0_linear_166_9203)"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_166_9203"
          x1="23.1104"
          y1="4.55432"
          x2="5.57661"
          y2="23.6012"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229083" stop-color="#20FFF2" />
          <stop offset="1" stop-color="#20BCFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg1669203
