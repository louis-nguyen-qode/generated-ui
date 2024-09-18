// id='234:5235'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345235: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "39",
    height: "21",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.25 0.5H3.25C2.14543 0.5 1.25 1.39543 1.25 2.5V19.5C1.25 20.6046 2.14543 21.5 3.25 21.5H38.25C39.3546 21.5 40.25 20.6046 40.25 19.5V2.5C40.25 1.39543 39.3546 0.5 38.25 0.5Z"
        fill="#FAFAFA"
        stroke="#D9D9D9"
      />
    </svg>
  )
}

export default QodeSvg2345235
