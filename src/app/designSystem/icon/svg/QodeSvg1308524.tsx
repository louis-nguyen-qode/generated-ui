// id='130:8524'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1308524: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "160",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        fill="#1597F4"
        stroke="#158DE2"
      />
    </svg>
  )
}

export default QodeSvg1308524
