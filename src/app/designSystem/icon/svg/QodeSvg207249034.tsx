// id='2072:49034'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg207249034: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "135",
    height: "35",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 136 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="17.5" fill="#D9D9D9" />
      <rect
        x="47.5"
        y="8.5"
        width={width}
        height={height}
        rx="4"
        fill="#D9D9D9"
      />
    </svg>
  )
}

export default QodeSvg207249034
