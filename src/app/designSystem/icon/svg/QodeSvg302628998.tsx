// id='3026:28998'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302628998: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="url(#paint0_linear_3026_28998)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3026_28998"
          x1="12"
          y1="0"
          x2="12"
          y2="23.822"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2AABEE" />
          <stop offset="1" stop-color="#229ED9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QodeSvg302628998
