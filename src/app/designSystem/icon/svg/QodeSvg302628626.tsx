// id='3026:28626'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302628626: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6"
        cy="6"
        r="5"
        fill="#38A169"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  )
}

export default QodeSvg302628626
