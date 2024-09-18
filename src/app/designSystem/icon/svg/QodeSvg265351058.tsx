// id='2653:51058'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351058: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "22",
    height: "36",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51058"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M11.1067 0C35.6166 20.2193 11.1067 36 11.1067 36C11.1067 36 -13.8834 20.7124 11.1067 0Z"
          fill="#DD2033"
        />
      </mask>
      <g mask="url(#mask0_2653_51058)">
        <rect width={width} height={height} fill="#31373D" />
        <rect x="18" width={width} height={height} fill="#31373D" />
        <rect x="9.2002" width={width} height={height} fill="#F5F7F8" />
      </g>
    </svg>
  )
}

export default QodeSvg265351058
