// id='I43:8751;221:18420;219:23826'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI4387512211842021923826: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="2" fill="#464646" />
      <circle cx="12" cy="12" r="8" stroke="white" />
      <circle cx="12" cy="12" r="5.5" stroke="white" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  )
}

export default QodeSvgI4387512211842021923826
