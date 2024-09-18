// id='146:850'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg146850: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.5"
        y="4.5"
        width={width}
        height={height}
        rx="3.5"
        fill="white"
      />
      <rect
        x="4.5"
        y="4.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#158DE2"
      />
      <rect
        x="2"
        y="2"
        width={width}
        height={height}
        rx="6"
        stroke="#82C8FA"
        stroke-width="4"
      />
      <path
        d="M10 14C10 11.7909 11.7909 10 14 10H18C20.2091 10 22 11.7909 22 14V18C22 20.2091 20.2091 22 18 22H14C11.7909 22 10 20.2091 10 18V14Z"
        fill="#1597F4"
      />
    </svg>
  )
}

export default QodeSvg146850
