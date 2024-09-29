// id='27:8204'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg278204: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "1",
    height: "72",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-0.25"
        y="0.25"
        width={width}
        height={height}
        transform="matrix(-1 0 0 1 0.5 0)"
        stroke="black"
        stroke-opacity="0.15"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg278204
