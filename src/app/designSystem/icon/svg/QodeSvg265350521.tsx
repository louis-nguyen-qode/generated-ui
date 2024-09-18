// id='2653:50521'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350521: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "56.00000762939453",
    height: "56.00000762939453",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50521"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <circle cx="28" cy="28" r="28" fill="#DD2033" />
      </mask>
      <g mask="url(#mask0_2653_50521)">
        <rect
          x="60.5161"
          y="60.5161"
          width={width}
          height={height}
          transform="rotate(-180 60.5161 60.5161)"
          fill="#008259"
        />
        <path
          d="M-4.69678 60.5161L26.9161 28L-4.69677 -4.51615L60.3355 -4.51614L26.9161 28L60.3355 60.5161L-4.69678 60.5161Z"
          fill="#F1B434"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350521
