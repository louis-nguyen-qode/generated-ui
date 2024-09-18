// id='234:5030'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345030: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "28",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.25 0H0.25V10H28.25V0Z" fill="#EBEBEB" />
    </svg>
  )
}

export default QodeSvg2345030
