// id='1:2086'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg12086: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "36",
    height: "36",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="17.5" stroke="#5783C9" />
    </svg>
  )
}

export default QodeSvg12086
