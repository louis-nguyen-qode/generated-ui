// id='16:6020'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg166020: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "1",
    height: "75",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1 75"
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

export default QodeSvg166020
