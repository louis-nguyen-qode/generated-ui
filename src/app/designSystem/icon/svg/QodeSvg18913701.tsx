// id='189:13701'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg18913701: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "120",
    height: "1",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.25"
        width={width}
        height={height}
        stroke="black"
        stroke-opacity="0.06"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg18913701
