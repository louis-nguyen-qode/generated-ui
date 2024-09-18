// id='I5820:40872;188:360'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI582040872188360: React.FC<IconProps> = ({
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
        fill="#E3E3E3"
      />
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="7.5"
        stroke="#D5D5D5"
      />
      <rect x="4" y="4" width={width} height={height} rx="4" fill="#BFBFBF" />
    </svg>
  )
}

export default QodeSvgI582040872188360
