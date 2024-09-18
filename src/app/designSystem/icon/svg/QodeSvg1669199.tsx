// id='166:9199'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1669199: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "41",
    height: "41",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="21.1182"
        cy="21.1133"
        r="20.5"
        fill="url(#paint0_linear_166_9199)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_166_9199"
          x1="21.1182"
          y1="0.613281"
          x2="21.1182"
          y2="41.6133"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.453811" stop-color="white" />
          <stop offset="1" stop-color="#D4D4D4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg1669199
