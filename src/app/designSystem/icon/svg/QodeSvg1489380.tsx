// id='148:9380'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1489380: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "36",
    height: "36",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18.3047"
        cy="18.2017"
        r="18"
        fill="url(#paint0_linear_148_9380)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_148_9380"
          x1="18.3047"
          y1="0.20166"
          x2="18.3047"
          y2="36.2017"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E5E5E5" />
          <stop offset="0.384624" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg1489380
