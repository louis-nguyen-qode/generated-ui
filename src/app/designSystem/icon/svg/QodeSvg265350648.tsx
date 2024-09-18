// id='2653:50648'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350648: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21",
    height: "23",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50648"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.800049 0H21.8V8.74322C21.8 14.8265 18.0916 20.2951 12.4401 22.546L11.3 23L10.16 22.546C4.50848 20.2951 0.800049 14.8265 0.800049 8.74321V0Z"
          fill="#F5F7F8"
        />
      </mask>
      <g mask="url(#mask0_2653_50648)">
        <path
          d="M0.800049 0H21.8V6H12.8V12H21.8V15H12.8V23H9.80005V15H0.800049V12H9.80005V6H0.800049V0Z"
          fill="#DD2033"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350648
