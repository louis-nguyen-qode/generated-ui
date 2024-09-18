// id='130:8530'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1308530: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "3",
    height: "75",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 3 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="#D5D5D5" />
    </svg>
  )
}

export default QodeSvg1308530
