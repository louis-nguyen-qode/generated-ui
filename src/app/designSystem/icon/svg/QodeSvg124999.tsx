// id='124:999'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg124999: React.FC<IconProps> = ({
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
      <path d="M0 0H8L0 6V0Z" fill="#C41D7F" />
    </svg>
  )
}

export default QodeSvg124999
