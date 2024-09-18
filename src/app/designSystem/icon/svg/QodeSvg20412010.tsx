// id='204:12010'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg20412010: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "50",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 363 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        transform="matrix(1 4.37113e-08 4.37113e-08 -1 -472.4 8)"
        fill="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg20412010
