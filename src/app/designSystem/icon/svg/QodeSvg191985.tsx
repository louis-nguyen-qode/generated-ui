// id='191:985'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg191985: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "3",
    height: "75",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 4 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width={width} height={height} fill="#D5D5D5" />
    </svg>
  )
}

export default QodeSvg191985
