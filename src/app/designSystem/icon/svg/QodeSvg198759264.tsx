// id='1987:59264'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg198759264: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "18",
    height: "18",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9.5" fill="#1597F4" stroke="white" />
    </svg>
  )
}

export default QodeSvg198759264
