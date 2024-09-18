// id='234:5041'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345041: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "40",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40.25 0H0.25V10H40.25V0Z" fill="#F5F5F5" />
    </svg>
  )
}

export default QodeSvg2345041
