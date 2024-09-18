// id='204:12217'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg20412217: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "50",
    height: "6",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 133 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="3"
        transform="matrix(1 4.37113e-08 4.37113e-08 -1 -717.2 6)"
        fill="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg20412217
