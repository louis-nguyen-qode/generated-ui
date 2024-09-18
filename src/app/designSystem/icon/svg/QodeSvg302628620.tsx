// id='3026:28620'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302628620: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "40",
    height: "40",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="28"
        cy="28"
        r="24"
        fill="#38A169"
        stroke="white"
        stroke-width="8"
      />
    </svg>
  )
}

export default QodeSvg302628620
