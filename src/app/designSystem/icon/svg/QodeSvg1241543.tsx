// id='124:1543'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg1241543: React.FC<IconProps> = ({
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
        d="M9.41421 6.58579C8.63316 7.36684 7.36684 7.36684 6.58579 6.58579L0 0L16 0L9.41421 6.58579Z"
        fill="#CC8135"
      />
    </svg>
  )
}

export default QodeSvg1241543
