// id='I30:6110;24:5097;2787:9060'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI30611024509727879060: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "1",
    height: "70",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-0.25"
        y="0.25"
        width={width}
        height={height}
        transform="matrix(-1 0 0 1 0.5 0)"
        stroke="#E3E3E3"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvgI30611024509727879060
