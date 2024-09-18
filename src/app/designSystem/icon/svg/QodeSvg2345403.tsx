// id='234:5403'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2345403: React.FC<IconProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 0.5C2.81719 0.5 1.25 2.06719 1.25 4C1.25 5.93281 2.81719 7.5 4.75 7.5C6.68281 7.5 8.25 5.93281 8.25 4C8.25 2.06719 6.68281 0.5 4.75 0.5ZM5 5.6875C5 5.72188 4.97187 5.75 4.9375 5.75H4.5625C4.52813 5.75 4.5 5.72188 4.5 5.6875V3.5625C4.5 3.52813 4.52813 3.5 4.5625 3.5H4.9375C4.97187 3.5 5 3.52813 5 3.5625V5.6875ZM4.75 3C4.54297 3 4.375 2.83203 4.375 2.625C4.375 2.41797 4.54297 2.25 4.75 2.25C4.95703 2.25 5.125 2.41797 5.125 2.625C5.125 2.83203 4.95703 3 4.75 3Z"
        fill="#1677FF"
      />
    </svg>
  )
}

export default QodeSvg2345403
