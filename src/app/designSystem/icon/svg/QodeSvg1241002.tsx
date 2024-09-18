// id='124:1002'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1241002: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "6",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H8L0 6V0Z" fill="#993D28" />
    </svg>
  )
}

export default QodeSvg1241002
