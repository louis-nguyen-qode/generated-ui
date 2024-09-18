// id='I133:531;132:953'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI133531132953: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "32",
    height: "32",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6346_45763)">
        <circle opacity="0.6" cx="26.1" cy="25.6" r="6.4" fill="#1597F4" />
        <circle cx="6.9" cy="25.6" r="6.4" fill="#1597F4" />
        <circle opacity="0.5" cx="6.9" cy="6.4" r="6.4" fill="#1597F4" />
        <circle opacity="0.3" cx="25.1858" cy="6.4" r="6.4" fill="#1597F4" />
      </g>
      <defs>
        <clipPath id="clip0_6346_45763">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI133531132953
