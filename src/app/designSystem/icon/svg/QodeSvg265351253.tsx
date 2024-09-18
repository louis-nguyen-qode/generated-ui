// id='2653:51253'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg265351253: React.FC<IconProps> = ({
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
        id="mask0_2653_51253"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          d="M0.800049 0H21.8V8.74322C21.8 14.8265 18.0916 20.2951 12.4401 22.546L11.3 23L10.16 22.546C4.50848 20.2951 0.800049 14.8265 0.800049 8.74321V0Z"
          fill="#0091DA"
        />
      </mask>
      <g mask="url(#mask0_2653_51253)">
        <path
          d="M9.80005 9L9.80005 20H12.8L12.8 9H17.8V6H12.8V2H9.80005V6H4.80005V9H9.80005Z"
          fill="#31373D"
        />
        <rect
          x="0.800049"
          y="16"
          width={width}
          height={height}
          fill="#936846"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265351253
