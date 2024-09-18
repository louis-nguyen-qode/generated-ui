// id='234:5023'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345023: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "65",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M65.25 0H0.25V10H65.25V0Z" fill="#EBEBEB" />
    </svg>
  )
}

export default QodeSvg2345023
