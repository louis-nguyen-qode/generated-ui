// id='1120:36947'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg112036947: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_1120_36947)">
        <path
          d="M0.833374 9.16659C5.43575 9.16659 9.16671 5.43563 9.16671 0.833252H10.8334C10.8334 5.43563 14.5644 9.16659 19.1667 9.16659V10.8333C14.5644 10.8333 10.8334 14.5643 10.8334 19.1666H9.16671C9.16671 14.5643 5.43575 10.8333 0.833374 10.8333V9.16659Z"
          fill="#2A2A2A"
        />
      </g>
      <defs>
        <clipPath id="clip0_1120_36947">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvg112036947
