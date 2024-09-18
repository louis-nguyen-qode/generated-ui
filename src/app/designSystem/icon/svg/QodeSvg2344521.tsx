// id='234:4521'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2344521: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "16",
    height: "16",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.25 8C16.25 3.58172 12.6683 0 8.25 0C3.83172 0 0.25 3.58172 0.25 8C0.25 12.4183 3.83172 16 8.25 16C12.6683 16 16.25 12.4183 16.25 8Z"
        fill="#1677FF"
      />
      <path
        d="M8.25 11C9.90685 11 11.25 9.65685 11.25 8C11.25 6.34315 9.90685 5 8.25 5C6.59315 5 5.25 6.34315 5.25 8C5.25 9.65685 6.59315 11 8.25 11Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg2344521
