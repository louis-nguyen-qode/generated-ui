// id='1331:40546'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg133140546: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "42",
    height: "42",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21" cy="21" r="20.5" stroke="#727272" />
    </svg>
  )
}

export default QodeSvg133140546
