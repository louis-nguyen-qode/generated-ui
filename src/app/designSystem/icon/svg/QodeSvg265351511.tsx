// id='2653:51511'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265351511: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20",
    height: "22",
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
        id="mask0_2653_51511"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0 0H20V7.94123C20 14.0164 16.3013 19.4795 10.6607 21.7357L10 22L9.33934 21.7357C3.6987 19.4795 0 14.0164 0 7.94123V0Z"
          fill="#2F80ED"
        />
      </mask>
      <g mask="url(#mask0_2653_51511)">
        <path
          d="M14.0588 10.6806L10.2003 5L6.34182 10.6806L5.20029 9L-3.45996 21.75H8V22H13V21.75H23.8605L15.2003 9L14.0588 10.6806Z"
          fill="#F5F7F8"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265351511
