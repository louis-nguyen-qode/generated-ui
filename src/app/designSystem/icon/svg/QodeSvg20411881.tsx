// id='204:11881'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg20411881: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "50",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="4"
        transform="matrix(1 4.37113e-08 4.37113e-08 -1 -690.8 8)"
        fill="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg20411881
