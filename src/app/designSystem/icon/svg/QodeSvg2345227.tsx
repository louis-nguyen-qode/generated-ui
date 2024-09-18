// id='234:5227'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345227: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "46",
    height: "21",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.25 0.5H3.25C2.14543 0.5 1.25 1.39543 1.25 2.5V19.5C1.25 20.6046 2.14543 21.5 3.25 21.5H45.25C46.3546 21.5 47.25 20.6046 47.25 19.5V2.5C47.25 1.39543 46.3546 0.5 45.25 0.5Z"
        fill="#FAFAFA"
        stroke="#D9D9D9"
      />
    </svg>
  )
}

export default QodeSvg2345227
