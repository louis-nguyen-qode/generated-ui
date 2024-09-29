// id='607:41501'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg60741501: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "150",
    height: "1",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.75"
        width={width}
        height={height}
        fill="#E3E3E3"
        stroke="#D5D5D5"
        stroke-width="0.5"
      />
    </svg>
  )
}

export default QodeSvg60741501
