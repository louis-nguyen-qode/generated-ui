// id='I147:167;146:844'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI147167146844: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="0.5" width={width} height={height} rx="3.5" fill="white" />
      <rect
        x="1"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#D5D5D5"
      />
      <path
        d="M7 10C7 8.067 8.567 6.5 10.5 6.5H14.5C16.433 6.5 18 8.067 18 10V14C18 15.933 16.433 17.5 14.5 17.5H10.5C8.567 17.5 7 15.933 7 14V10Z"
        fill="#1597F4"
        stroke="#158DE2"
      />
    </svg>
  )
}

export default QodeSvgI147167146844
