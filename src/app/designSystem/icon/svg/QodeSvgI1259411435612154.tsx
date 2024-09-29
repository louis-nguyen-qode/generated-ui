// id='I1259:41143;5612:154'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI1259411435612154: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_2297_59785)">
        <path
          d="M0.833374 9.16683C5.43575 9.16683 9.16671 5.43587 9.16671 0.833496H10.8334C10.8334 5.43587 14.5644 9.16683 19.1667 9.16683V10.8335C14.5644 10.8335 10.8334 14.5645 10.8334 19.1668H9.16671C9.16671 14.5645 5.43575 10.8335 0.833374 10.8335V9.16683Z"
          fill="#2A2A2A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2297_59785">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI1259411435612154
