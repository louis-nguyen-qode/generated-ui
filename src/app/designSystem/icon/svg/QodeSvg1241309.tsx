// id='124:1309'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg1241309: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.58579 1.41421C7.36684 0.633164 8.63316 0.633165 9.41421 1.41421L16 8L0 8L6.58579 1.41421Z"
        fill="#383838"
      />
    </svg>
  )
}

export default QodeSvg1241309
