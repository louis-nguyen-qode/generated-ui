// id='234:5216'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345216: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "48",
    height: "2",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.25 0H48.25V2H0.25V0Z" fill="#1677FF" />
    </svg>
  )
}

export default QodeSvg2345216
