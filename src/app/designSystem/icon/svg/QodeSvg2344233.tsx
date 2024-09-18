// id='234:4233'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344233: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "21",
    height: "21",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.25 0.5H5.25C3.04086 0.5 1.25 2.29086 1.25 4.5V17.5C1.25 19.7091 3.04086 21.5 5.25 21.5H18.25C20.4591 21.5 22.25 19.7091 22.25 17.5V4.5C22.25 2.29086 20.4591 0.5 18.25 0.5Z"
        fill="white"
        stroke="#1677FF"
      />
    </svg>
  )
}

export default QodeSvg2344233
