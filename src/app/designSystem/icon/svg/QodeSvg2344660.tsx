// id='234:4660'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2344660: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8",
    height: "8",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.26535 0H2.26535C1.16078 0 0.26535 0.89543 0.26535 2V6C0.26535 7.10457 1.16078 8 2.26535 8H6.26535C7.36992 8 8.26535 7.10457 8.26535 6V2C8.26535 0.89543 7.36992 0 6.26535 0Z"
        fill="#1677FF"
      />
      <path
        d="M6.10535 3.5H2.42535C2.33685 3.5 2.26535 3.51787 2.26535 3.54V4.46C2.26535 4.48213 2.33685 4.5 2.42535 4.5H6.10535C6.19385 4.5 6.26535 4.48213 6.26535 4.46V3.54C6.26535 3.51787 6.19385 3.5 6.10535 3.5Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg2344660
