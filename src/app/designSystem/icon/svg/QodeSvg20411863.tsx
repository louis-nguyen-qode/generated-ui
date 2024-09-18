// id='204:11863'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg20411863: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "50",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 302 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="4"
        transform="matrix(1 4.37113e-08 4.37113e-08 -1 -548.5 8)"
        fill="#F85631"
      />
    </svg>
  )
}

export default QodeSvg20411863
