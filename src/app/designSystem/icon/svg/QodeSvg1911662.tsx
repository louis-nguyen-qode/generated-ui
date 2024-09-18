// id='191:1662'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1911662: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "123",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 123 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="1"
        width={width}
        height={height}
        fill="#E3E3E3"
        stroke="#D5D5D5"
      />
    </svg>
  )
}

export default QodeSvg1911662
