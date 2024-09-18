// id='2653:50585'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265350585: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "18.000001907348633",
    height: "20.000001907348633",
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
        id="mask0_2653_50585"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.60022 0.00012207H18.6002V9.82198C18.6002 13.7755 16.2005 17.3334 12.5348 18.8144C10.6523 19.575 8.5481 19.575 6.66562 18.8144C2.99997 17.3334 0.60022 13.7755 0.60022 9.82198V0.00012207Z"
          fill="#F5F7F8"
        />
      </mask>
      <g mask="url(#mask0_2653_50585)">
        <rect
          x="0.60022"
          y="0.00012207"
          width={width}
          height={height}
          fill="#DD2033"
        />
        <rect
          x="0.60022"
          y="10.0001"
          width={width}
          height={height}
          fill="#E26E00"
        />
        <rect
          x="9.60022"
          y="10.0001"
          width={width}
          height={height}
          fill="#DD2033"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350585
