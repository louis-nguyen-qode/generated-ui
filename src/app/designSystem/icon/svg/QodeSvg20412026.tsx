// id='204:12026'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg20412026: React.FC<IconProps> = ({
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
        transform="matrix(1 4.37113e-08 4.37113e-08 -1 -548.5 8)"
        fill="#F85631"
      />
    </svg>
  )
}

export default QodeSvg20412026
