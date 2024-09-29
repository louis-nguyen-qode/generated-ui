// id='1510:57772'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg151057772: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.41421 9.41421C0.633164 8.63316 0.633165 7.36684 1.41421 6.58579L8 0L8 16L1.41421 9.41421Z"
        fill="#383838"
      />
    </svg>
  )
}

export default QodeSvg151057772
