// id='191:1185'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1911185: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "170",
    height: "1",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 170 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.75"
        width={width}
        height={height}
        stroke="#11A620"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg1911185
