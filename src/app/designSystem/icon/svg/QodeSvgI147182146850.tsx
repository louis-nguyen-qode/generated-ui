// id='I147:182;146:850'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI147182146850: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="4.5" width={width} height={height} rx="3.5" fill="white" />
      <rect
        x="5"
        y="4.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#158DE2"
      />
      <rect
        x="2.5"
        y="2"
        width={width}
        height={height}
        rx="6"
        stroke="#82C8FA"
        stroke-width="4"
      />
      <path
        d="M10.5 14C10.5 11.7909 12.2909 10 14.5 10H18.5C20.7091 10 22.5 11.7909 22.5 14V18C22.5 20.2091 20.7091 22 18.5 22H14.5C12.2909 22 10.5 20.2091 10.5 18V14Z"
        fill="#1597F4"
      />
    </svg>
  )
}

export default QodeSvgI147182146850
