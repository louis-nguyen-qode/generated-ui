// id='191:4563'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1914563: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "1",
    height: "28",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-0.25"
        y="0.25"
        width={width}
        height={height}
        transform="matrix(-1 0 0 1 1 0)"
        stroke="#D5D5D5"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg1914563