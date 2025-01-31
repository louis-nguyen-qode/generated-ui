// id='47:6992'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg476992: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "20",
    height: "20",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H15.5C16.0523 3.5 16.5 3.94772 16.5 4.5V15.5C16.5 16.0523 16.0523 16.5 15.5 16.5H4.5C3.94772 16.5 3.5 16.0523 3.5 15.5V4.5Z"
        fill="#F4F4F4"
        stroke="#A5A5A5"
        stroke-width="2"
      />
    </svg>
  )
}

export default QodeSvg476992
