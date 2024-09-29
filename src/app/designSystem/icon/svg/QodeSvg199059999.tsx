// id='1990:59999'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg199059999: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="13.5791"
        cy="13.1582"
        r="12.5"
        fill="#1597F4"
        stroke="white"
      />
    </svg>
  )
}

export default QodeSvg199059999
