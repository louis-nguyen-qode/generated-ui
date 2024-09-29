// id='I1990:47220;71:10349;1987:47809;1987:59261'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI1990472207110349198747809198759261: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "46",
    height: "46",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="23"
        cy="23"
        r="22"
        stroke="url(#paint0_linear_2297_39650)"
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2297_39650"
          x1="23"
          y1="0"
          x2="23"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2ECDFF" />
          <stop offset="1" stop-color="#0E8FEA" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvgI1990472207110349198747809198759261