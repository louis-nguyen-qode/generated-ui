// id='191:1150'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1911150: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "168",
    height: "1",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 168 2"
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

export default QodeSvg1911150
