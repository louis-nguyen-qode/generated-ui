// id='234:5026'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345026: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "43",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M43.25 0H0.25V10H43.25V0Z" fill="#F5F5F5" />
    </svg>
  )
}

export default QodeSvg2345026
