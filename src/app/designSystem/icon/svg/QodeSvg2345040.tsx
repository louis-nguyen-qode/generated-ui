// id='234:5040'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345040: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "19",
    height: "10",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.25 0H0.25V10H19.25V0Z" fill="#EBEBEB" />
    </svg>
  )
}

export default QodeSvg2345040
