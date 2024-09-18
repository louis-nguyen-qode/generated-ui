// id='2653:50512'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350512: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "22",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50512"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect x="0.200195" width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2653_50512)">
        <path
          d="M0.200195 -15H21.2002V-6.25678C21.2002 -0.173537 17.4918 5.29513 11.8402 7.54595L10.7002 8L9.56015 7.54595C3.90862 5.29513 0.200195 -0.173538 0.200195 -6.25679V-15Z"
          fill="#3CCBDA"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350512
