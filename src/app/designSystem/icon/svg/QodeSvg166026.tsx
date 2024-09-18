// id='16:6026'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg166026: React.FC<IconProps> = ({
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
      <rect width={width} height={height} fill="black" fillOpacity="0.15" />
    </svg>
  )
}

export default QodeSvg166026
