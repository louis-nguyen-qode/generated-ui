// id='47:6991'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg476991: React.FC<IconProps> = ({
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
        d="M2.5 4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H15.5C16.6046 2.5 17.5 3.39543 17.5 4.5V15.5C17.5 16.6046 16.6046 17.5 15.5 17.5H4.5C3.39543 17.5 2.5 16.6046 2.5 15.5V4.5Z"
        fill="#0299EC"
      />
      <rect x="5" y="9.16663" width={width} height={height} fill="white" />
    </svg>
  )
}

export default QodeSvg476991
