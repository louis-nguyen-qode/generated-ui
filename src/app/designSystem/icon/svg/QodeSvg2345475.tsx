// id='234:5475'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345475: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "35.400001525878906",
    height: "18.600000381469727",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.35 1.09985H4.15C2.16178 1.09985 0.550003 2.71163 0.550003 4.69985V16.0999C0.550003 18.0881 2.16178 19.6999 4.15 19.6999H32.35C34.3382 19.6999 35.95 18.0881 35.95 16.0999V4.69985C35.95 2.71163 34.3382 1.09985 32.35 1.09985Z"
        fill="white"
        stroke="black"
        stroke-opacity="0.15"
        stroke-width="0.6"
      />
    </svg>
  )
}

export default QodeSvg2345475
