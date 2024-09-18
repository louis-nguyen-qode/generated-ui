// id='I5820:40866;188:319'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI582040866188319: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="7.5"
        fill="white"
      />
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="7.5"
        stroke="#158DE2"
      />
      <rect x="4" y="4" width={width} height={height} rx="4" fill="#1597F4" />
    </svg>
  )
}

export default QodeSvgI582040866188319
