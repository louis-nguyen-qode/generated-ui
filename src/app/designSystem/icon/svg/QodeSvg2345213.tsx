// id='234:5213'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345213: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "208",
    height: "1",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 209 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.25 0H208.25V1H0.25V0Z" fill="#F0F0F0" />
    </svg>
  )
}

export default QodeSvg2345213
