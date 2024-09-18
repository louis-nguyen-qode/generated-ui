// id='234:5229'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345229: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "64",
    height: "21",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.25 0.5H3.25C2.14543 0.5 1.25 1.39543 1.25 2.5V19.5C1.25 20.6046 2.14543 21.5 3.25 21.5H63.25C64.3546 21.5 65.25 20.6046 65.25 19.5V2.5C65.25 1.39543 64.3546 0.5 63.25 0.5Z"
        fill="#FAFAFA"
        stroke="#D9D9D9"
      />
    </svg>
  )
}

export default QodeSvg2345229
