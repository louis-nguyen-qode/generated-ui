// id='191:4542'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1914542: React.FC<IconProps> = ({
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
        x="0.75"
        y="0.25"
        width={width}
        height={height}
        stroke="#11A620"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg1914542
