// id='3026:28615'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302628615: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="17"
        cy="17"
        r="14.5"
        fill="#38A169"
        stroke="white"
        stroke-width="5"
      />
    </svg>
  )
}

export default QodeSvg302628615
