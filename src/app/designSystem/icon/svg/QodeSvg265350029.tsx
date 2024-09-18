// id='2653:50029'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265350029: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "18",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50029"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.800049 0H18.8V6.65678C18.8 12.5232 15.2392 17.8023 9.80005 20C4.36086 17.8023 0.800049 12.5232 0.800049 6.65678V0Z"
          fill="#86C5FA"
        />
      </mask>
      <g mask="url(#mask0_2653_50029)">
        <rect
          x="-0.199951"
          y="-0.928955"
          width={width}
          height={height}
          transform="rotate(-45 -0.199951 -0.928955)"
          fill="#F1B434"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350029
