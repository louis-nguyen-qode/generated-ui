// id='2653:50810'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350810: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "22",
    height: "20.000001907348633",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50810"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0 0H20V7.94123C20 14.0164 16.3013 19.4795 10.6607 21.7357L10 22L9.33934 21.7357C3.6987 19.4795 0 14.0164 0 7.94123V0Z"
          fill="#005EB8"
        />
      </mask>
      <g mask="url(#mask0_2653_50810)">
        <rect y="10" width={width} height={height} fill="#009B77" />
      </g>
    </svg>
  )
}

export default QodeSvg265350810
