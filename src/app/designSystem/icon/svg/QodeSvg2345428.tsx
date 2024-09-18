// id='234:5428'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345428: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "77",
    height: "115",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 78 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.103027 0.5H77.103V115.5H0.103027V0.5Z" fill="white" />
    </svg>
  )
}

export default QodeSvg2345428
