// id='234:4191'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2344191: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "119",
    height: "71",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 121 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M118.75 1H2.75C2.19772 1 1.75 1.44772 1.75 2V70C1.75 70.5523 2.19772 71 2.75 71H118.75C119.302 71 119.75 70.5523 119.75 70V2C119.75 1.44772 119.302 1 118.75 1Z"
        fill="white"
      />
      <path
        opacity="0.15"
        d="M118.25 0.5H3.25C2.14543 0.5 1.25 1.39543 1.25 2.5V69.5C1.25 70.6046 2.14543 71.5 3.25 71.5H118.25C119.355 71.5 120.25 70.6046 120.25 69.5V2.5C120.25 1.39543 119.355 0.5 118.25 0.5Z"
        stroke="black"
      />
    </svg>
  )
}

export default QodeSvg2344191
