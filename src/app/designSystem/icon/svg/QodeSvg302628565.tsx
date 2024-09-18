// id='3026:28565'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg302628565: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "6",
    height: "6",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="3.5" fill="#38A169" stroke="white" />
    </svg>
  )
}

export default QodeSvg302628565
