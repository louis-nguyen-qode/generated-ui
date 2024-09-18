// id='2653:50947'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350947: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "14.000000953674316",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2653_50947"
        style={{ mixBlendMode: "multiply" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <ellipse cx="7.2002" cy="10" rx="7" ry="10" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2653_50947)">
        <path d="M4.6001 11L0.600098 17L-0.399902 11H4.6001Z" fill="#008259" />
        <path d="M4.6001 11L13.4001 17L15.6001 11H4.6001Z" fill="#008259" />
        <path
          d="M6.6001 7L11.6001 11H-1.3999L0.100098 6L4.6001 8L6.6001 7Z"
          fill="#F5F7F8"
        />
      </g>
    </svg>
  )
}

export default QodeSvg265350947
