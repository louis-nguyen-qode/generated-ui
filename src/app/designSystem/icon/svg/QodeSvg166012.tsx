// id='16:6012'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg166012: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "160",
    height: "1",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.25"
        width={width}
        height={height}
        stroke="#2D64BC"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg166012
