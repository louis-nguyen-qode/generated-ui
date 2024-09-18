// id='234:5412'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg2345412: React.FC<IconProps> = ({
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
        d="M4.75 0.5C2.81719 0.5 1.25 2.06719 1.25 4C1.25 5.93281 2.81719 7.5 4.75 7.5C6.68281 7.5 8.25 5.93281 8.25 4C8.25 2.06719 6.68281 0.5 4.75 0.5ZM4.5 2.3125C4.5 2.27813 4.52813 2.25 4.5625 2.25H4.9375C4.97187 2.25 5 2.27813 5 2.3125V4.4375C5 4.47187 4.97187 4.5 4.9375 4.5H4.5625C4.52813 4.5 4.5 4.47187 4.5 4.4375V2.3125ZM4.75 5.75C4.54297 5.75 4.375 5.58203 4.375 5.375C4.375 5.16797 4.54297 5 4.75 5C4.95703 5 5.125 5.16797 5.125 5.375C5.125 5.58203 4.95703 5.75 4.75 5.75Z"
        fill="#FAAD14"
      />
    </svg>
  )
}

export default QodeSvg2345412
