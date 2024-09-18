// id='204:12193'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg20412193: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "50",
    height: "6",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 106 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="3"
        transform="matrix(1 4.37113e-08 4.37113e-08 -1 -744.8 6)"
        fill="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg20412193
