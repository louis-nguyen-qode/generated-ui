// id='I1259:41142;5612:154'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI1259411425612154: React.FC<IconProps> = ({
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
      <g clip-path="url(#clip0_2297_59781)">
        <path
          d="M0.833328 9.16683C5.4357 9.16683 9.16666 5.43587 9.16666 0.833496H10.8333C10.8333 5.43587 14.5643 9.16683 19.1667 9.16683V10.8335C14.5643 10.8335 10.8333 14.5645 10.8333 19.1668H9.16666C9.16666 14.5645 5.4357 10.8335 0.833328 10.8335V9.16683Z"
          fill="#2A2A2A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2297_59781">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default QodeSvgI1259411425612154
