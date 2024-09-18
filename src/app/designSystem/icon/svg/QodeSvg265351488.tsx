// id='2653:51488'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265351488: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_51488"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect x="0.399902" width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2653_51488)">
        <path
          d="M0.399902 -7H21.3999V1.74322C21.3999 7.82646 17.6915 13.2951 12.04 15.546L10.8999 16L9.75985 15.546C4.10833 13.2951 0.399902 7.82646 0.399902 1.74322V-7Z"
          fill="#86C5FA"
        />
        <rect x="0.399902" width={width} height={height} fill="#31373D" />
      </g>
    </svg>
  )
}

export default QodeSvg265351488
