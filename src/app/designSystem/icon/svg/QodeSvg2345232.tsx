// id='234:5232'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345232: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "118",
    height: "21",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M117.25 0.5H3.25C2.14543 0.5 1.25 1.39543 1.25 2.5V19.5C1.25 20.6046 2.14543 21.5 3.25 21.5H117.25C118.355 21.5 119.25 20.6046 119.25 19.5V2.5C119.25 1.39543 118.355 0.5 117.25 0.5Z"
        fill="#FAFAFA"
        stroke="#D9D9D9"
      />
    </svg>
  )
}

export default QodeSvg2345232
