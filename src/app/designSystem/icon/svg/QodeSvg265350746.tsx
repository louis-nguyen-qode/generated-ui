// id='2653:50746'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265350746: React.FC<IconProps> = ({
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
        id="mask0_2653_50746"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect x="0.800049" width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2653_50746)">
        <path
          d="M0.800049 -15H21.8V-6.25678C21.8 -0.173537 18.0916 5.29513 12.4401 7.54595L11.3 8L10.16 7.54595C4.50848 5.29513 0.800049 -0.173538 0.800049 -6.25679V-15Z"
          fill="#009B77"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350746
