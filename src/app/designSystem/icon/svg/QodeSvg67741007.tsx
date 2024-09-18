// id='677:41007'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg67741007: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "12",
    height: "12",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="url(#paint0_linear_677_41007)" />
      <defs>
        <linearGradient
          id="paint0_linear_677_41007"
          x1="3.03748"
          y1="2.91448"
          x2="9.75"
          y2="9.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0095FF" />
          <stop offset="1" stop-color="#4A3BFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg67741007
