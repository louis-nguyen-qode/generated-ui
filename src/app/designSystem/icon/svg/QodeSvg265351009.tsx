// id='2653:51009'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351009: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "15",
    height: "15",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51009"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="0"
        width={width}
        height={height}
      >
        <path d="M7.7002 0L14.1954 11.25H1.205L7.7002 0Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2653_51009)">
        <rect x="1.2002" width={width} height={height} fill="#86C5FA" />
        <rect x="1.2002" y="9" width={width} height={height} fill="#005EB8" />
        <rect x="1.2002" y="7" width={width} height={height} fill="#009B77" />
      </g>
    </svg>
  )
}

export default QodeSvg265351009
