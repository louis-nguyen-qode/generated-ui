// id='2653:51372'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351372: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "90",
    height: "72.00001525878906",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51372"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="-9"
        y="0"
        width={width}
        height={height}
      >
        <path d="M36 72L81 0L-9 -3.93402e-06L36 72Z" fill="#31373D" />
      </mask>
      <g mask="url(#mask0_2653_51372)">
        <path
          d="M24.5724 29.959L16.3999 33.9999H56.3999L48.2279 29.9593L52.5796 21.6394L43.7054 23.4237L42.5812 14L36.3998 20.9309L30.2192 14L29.0941 23.4237L20.2202 21.6394L24.5724 29.959Z"
          fill="#F1B434"
        />
        <rect x="20" y="48" width={width} height={height} fill="#F5F7F8" />
        <path d="M12 34H60V48H12V34Z" fill="#005EB8" />
      </g>
    </svg>
  )
}

export default QodeSvg265351372
