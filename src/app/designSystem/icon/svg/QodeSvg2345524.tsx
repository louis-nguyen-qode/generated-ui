// id='234:5524'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345524: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "39",
    height: "23",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.75 1H4.75C2.54086 1 0.75 2.79086 0.75 5V20C0.75 22.2091 2.54086 24 4.75 24H35.75C37.9591 24 39.75 22.2091 39.75 20V5C39.75 2.79086 37.9591 1 35.75 1Z"
        fill="white"
        stroke="black"
        stroke-opacity="0.15"
      />
    </svg>
  )
}

export default QodeSvg2345524
