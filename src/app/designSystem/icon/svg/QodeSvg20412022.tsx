// id='204:12022'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg20412022: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "50",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 360 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        transform="matrix(1 4.37113e-08 4.37113e-08 -1 -440.5 8)"
        fill="#11A620"
      />
    </svg>
  )
}

export default QodeSvg20412022
