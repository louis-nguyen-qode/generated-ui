// id='16:6018'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg166018: React.FC<IconProps> = ({
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
      <rect width={width} height={height} fill="black" fillOpacity="0.15" />
    </svg>
  )
}

export default QodeSvg166018
